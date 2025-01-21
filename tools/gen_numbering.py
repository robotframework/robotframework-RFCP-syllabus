import csv
from pathlib import Path
import re


def update_heading_numbers_and_generate_toc(directory: Path):
    chapter_file_pattern = re.compile(r".*/docs/chapter-(?P<chapter>\d+)/(?P<file_idx>\d+)_(?P<file>.*?)\.md")
    heading_pattern = re.compile(r"^(?P<level>#+)\s*(?P<number>\d+(?:\.\d+)*)?\s*(?P<name>.*)")
    internal_link_pattern = re.compile(r"\[([^\[\]]*?)\]\((?!https?:\/\/)(.*?)?#(?:\d\.?)*(-?.*?)\)")
    lo_pattern = re.compile(r":::(?P<k_level>K[123])\[LO-(?P<id>[X\d\.-]+)\] *\n?")  #:::K2[LO-2.1]

    catalog = {}
    heading_catalog = {}
    toc_entries = []
    all_learning_objectives = []
    Path().as_posix()
    chapters = {}

    for file in sorted(directory.glob("website/docs/**/*.md")):
        file_path = file.relative_to(Path('website/docs').resolve())
        match = chapter_file_pattern.fullmatch(file.as_posix())
        if not match:
            continue

        chapter_nr = int(match.group('chapter'))
        numbering_stack = [chapter_nr]
        file_nr = int(match.group('file_idx'))
        file_title = match.group('file')
        file_name = f'{file_nr}_{file_title}.md'
        with file.open("r", encoding="utf-8") as md_file:
            lines = md_file.readlines()
            if chapter_nr not in chapters:
                chapters[chapter_nr] = {}
            chapters[chapter_nr][file_name] = lines

        updated_lines = []
        numbering_stack = []
        headings = []
        learning_objectives = []
        code_block = False
        learning_objectives_container_open = False
        learning_objective_open = False
        current_chapter_number = []
        current_level = 0
        current_learning_objective_number = ''
        current_learning_objective_k_level = ''
        for lineno, line in enumerate(lines):
            if line.strip().startswith("```") and not code_block:
                code_block = True
                updated_lines.append(line)
                continue
            if code_block:
                if line.strip() == "```":
                    code_block = False
                updated_lines.append(line)
                continue

            if line.strip() == "::::lo[Learning Objectives]":
                learning_objectives_container_open = True
                updated_lines.append(line)
                continue

            if (lo_match := lo_pattern.match(line)) and learning_objectives_container_open:
                learning_objective_open = True
                updated_lines.append(line)
                current_learning_objective_number = lo_match.group('id')
                current_learning_objective_k_level = lo_match.group('k_level')
                continue


            if learning_objectives_container_open and  learning_objective_open and line.strip() == ":::":
                learning_objective_open = False
                updated_lines.append(line)
                continue

            if learning_objectives_container_open and line.strip() == "::::":
                learning_objectives_container_open = False
                updated_lines.append(line)
                continue


            heading_match = heading_pattern.match(line)
            if heading_match:
                current_level = len(heading_match.group('level')) - 1
                title = heading_match.group('name').strip()

                if current_level == 0:
                    if file.name == "00_overview.md":
                        numbering = f"{chapter_nr}"
                    else:
                        numbering = f"{chapter_nr}.{file_nr}"
                    heading = f"{numbering} {title}"
                    updated_line = f"# {numbering} {title}\n"
                else:
                    if len(numbering_stack) < current_level:
                        numbering_stack.append(1)
                    else:
                        numbering_stack[current_level - 1] += 1
                        numbering_stack = numbering_stack[:current_level]

                    numbering = f"{chapter_nr}.{file_nr}." + ".".join(map(str, numbering_stack))
                    heading = f"{numbering} {title}"
                    updated_line = f"#{'#' * current_level} {heading}\n"
                updated_lines.append(updated_line)
                anchor = re.sub(r'[^\w\- ]', '', heading).strip().replace(' ', '-').lower()
                headings.append((numbering, title, anchor))

                if len(numbering) <= 3:
                    toc_anchor = file_path
                else:
                    toc_anchor = f"{file_path}#{anchor}"
                toc_entry = (
                    f"{'  ' * (current_level - 1)}- [`{numbering} {title}`]"
                    f"({toc_anchor})"
                )
                current_chapter_number = list(map(int, numbering.split('.')))
                toc_entries.append((current_chapter_number, toc_entry))
            elif learning_objective_open and line.strip() != "":
                lo_id = current_learning_objective_number
                lo_content = line.strip()
                k_level = current_learning_objective_k_level
                current_chapter_string = ".".join(map(str, current_chapter_number))
                if lo_id == 'XX':
                    lo_id = current_chapter_string
                if lo_id.split('-')[0] != current_chapter_string:
                    print(f"LO {lo_id} in {file_path}:{lineno + 1} does not match chapter {current_chapter_string}")
                learning_objectives.append((lo_id, k_level, lo_content))
                toc_entry = (
                    f"{'  ' * (current_level)}- LO-{lo_id} ({k_level}) {lo_content}"
                )
                toc_entries.append((current_chapter_number, toc_entry))
                updated_lines.append(line)
            else:
                updated_lines.append(line)

        seen = set()
        dupl = [lo[0] for lo in learning_objectives if lo[0] in seen or seen.add(lo[0])]
        if dupl:
            print(f"Duplicate LOs in {file_path}: {dupl}")
        catalog[file_path] = headings
        for heading in headings:
            heading_anchor = heading[2].lstrip("1234567890")
            if heading_anchor in heading_catalog:
                print(f"Duplicate anchor '{heading_anchor}' in '{file_path}' and '{heading_catalog[heading_anchor][0]}'")
            heading_catalog[heading_anchor] = (file_path, *heading)

        with file.open("w", encoding="utf-8") as md_file:
            md_file.writelines(updated_lines)

        all_learning_objectives.extend(learning_objectives)

    sorted_lo = sorted(all_learning_objectives, key=lambda x: x[0])

    with (directory / "LOs.csv").open("w", encoding="utf-8") as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(["LO ID", "K Level", "Content", "Slide Number", "Done", "Notes"])
        writer.writerows([(f"LO-{lo_id}", f"({k_level})", lo_content, "", "", "") for lo_id, k_level, lo_content in sorted_lo])

    print(f"Total LOs: {len(sorted_lo)}")
    toc_entries.sort(key=lambda x: x[0])

    readme_path = directory / "README.md"
    with readme_path.open("w", encoding="utf-8") as readme_file:
        readme_file.write("# Table of Contents\n\n")
        for _, toc_entry in toc_entries:
            readme_file.write(toc_entry + "\n")

    for file in sorted(directory.glob("website/docs/**/*.md")):
        file_path = file.relative_to(Path('website/docs').resolve())
        match = chapter_file_pattern.fullmatch(file.as_posix())
        if not match:
            continue
        with file.open("r", encoding="utf-8") as md_file:
            lines = md_file.readlines()

        updated_lines = []
        for lineno, line in enumerate(lines):
            def replace_link(match):
                description, link_file, anchor_name = match.groups()
                link_file = link_file or file_path
                if anchor_name in heading_catalog:
                    file_path, numbering, title, anchor = heading_catalog[anchor_name]
                    if title.strip() == anchor_name.strip() or anchor.endswith(anchor_name):
                        if len(numbering) <= 3:
                            return f"[{numbering} {title}]({file_path})"
                        return f"[{numbering} {title}]({file_path}#{anchor})"
                print(f"Warning: Could not find anchor '{anchor_name}' in '{link_file}'."
                      "\n "
                      f"File: {link_file}:{lineno + 1}")
                return match.group(0)

            updated_line = re.sub(internal_link_pattern, replace_link, line)
            updated_lines.append(updated_line)

        with file.open("w", encoding="utf-8") as md_file:
            md_file.writelines(updated_lines)

    with Path("website", "docs", "learning_objectives.md").open("w", encoding="utf-8") as lo_file:
        anchor = {}
        for k, v in heading_catalog.items():
            numbering = v[1]
            if len(numbering) <= 3:
                anchor[v[1]] = str(v[0])
            else:
                anchor[v[1]] = f'{v[0]}#{v[-1]}'
        lo_file.write("# Learning Objectives\n")
        lo_file.write(f'| ID | K-Level | Content |\n')
        lo_file.write(f'| --- | --- | --- |\n')
        for lo_id, k_level, lo_content in sorted_lo:
            lo_file.write(f'| [LO-{lo_id}]({anchor.get(lo_id.split("-")[0])}) | {k_level} | {lo_content} |\n')



if __name__ == "__main__":
    update_heading_numbers_and_generate_toc(Path.cwd())
