import csv
from pathlib import Path
import re


introduction = """# Public Review of the Robot Framework Certified Professional® Syllabus

Welcome to the public review of the Robot Framework® Certified Professional certification syllabus.

We are seeking feedback from the community to ensure this syllabus meets the highest standards and addresses the needs of Robot Framework professionals. While the topics have been largely finalized internally, we welcome suggestions and insights to refine and improve the content.

If you have feedback or ideas, please participate by opening an issue or commenting directly on the pull request linked below:
[Comment on the Pull Request](https://github.com/robotframework/robotframework-RFCP-syllabus/pull/39/files)

When providing feedback, please be as detailed as possible and explain your suggestions clearly. If you have a specific proposal, we encourage you to use GitHub’s proposal features to submit it directly. Your input is invaluable to making this certification syllabus comprehensive and effective.


"""

def update_heading_numbers_and_generate_toc(directory: Path):
    # Regex patterns
    chapter_file_pattern = re.compile(r"Chapter_(\d+)_.*\.md")
    heading_pattern = re.compile(r"(#+)\s*(\d+(?:\.\d+)*)?\s*(.*)")
    internal_link_pattern = re.compile(r"\[([^\[\]]*?)\]\((Chapter_.*?)?#(?:\d\.?)*-?(.*?)\)")
    lo_pattern = re.compile(r"> LO-(?P<id>[X\d\.-]+) ?(?P<content>.*?) ?(?P<k_level>\(K[123]\))\n?")

    # Dictionary to store chapters and their headings for resolving links
    catalog = {}

    # Step 1: Update headings and generate the catalog of chapters
    toc_entries = []
    all_learning_objectives = []

    for file in directory.glob("Chapter_*.md"):
        match = chapter_file_pattern.match(file.name)
        if not match:
            continue

        chapter_number = int(match.group(1))  # Extract chapter number
        with file.open("r", encoding="utf-8") as f:
            lines = f.readlines()

        updated_lines = []
        numbering_stack = []
        is_first_heading = True
        headings = []  # Store headings for this chapter
        learning_objectives = []  # Store learning objectives for this chapter
        code_block = False
        current_chapter_number = []
        current_level = 0
        for lineno, line in enumerate(lines):
            if line.strip().startswith("```robot"):
                code_block = True
                updated_lines.append(line)
                continue
            if code_block:
                if line.strip() == "```":
                    code_block = False
                updated_lines.append(line)
                continue

            heading_match = heading_pattern.match(line)
            if heading_match:
                current_level = len(heading_match.group(1))  # Number of '#' indicates heading level
                title = heading_match.group(3).strip()  # Extract the title

                if is_first_heading and current_level == 1:
                    # Special handling for the first h1
                    numbering = f"{chapter_number}"
                    is_first_heading = False
                    numbering_stack = [chapter_number]  # Initialize the stack for this file
                else:
                    if len(numbering_stack) < current_level:
                        numbering_stack.append(1)  # Add a new level
                    else:
                        numbering_stack[current_level - 1] += 1  # Increment the current level
                        numbering_stack = numbering_stack[:current_level]  # Trim excess levels

                    # Generate the hierarchical numbering
                    numbering = ".".join(map(str, numbering_stack))

                # Update the line with the new numbering
                heading = f"{numbering} {title}"
                updated_line = f"{'#' * current_level} {heading}\n"
                updated_lines.append(updated_line)

                # Generate an anchor for this heading
                anchor = re.sub(r'[^\w\- ]', '', heading).strip().replace(' ', '-').lower()
                headings.append((numbering, title, anchor))

                # Generate a link for the table of contents
                toc_entry = (
                    f"{'  ' * (current_level - 1)}- [`{numbering} {title}`]"
                    f"({file.name}#{anchor})"
                )
                # Add entry with a sort key for sorting later
                current_chapter_number = list(map(int, numbering.split('.')))
                toc_entries.append((current_chapter_number, toc_entry))
            elif match := lo_pattern.fullmatch(line):
                lo_id = match.group('id')
                lo_content = match.group('content')
                k_level = match.group('k_level')
                current_chapter_string = ".".join(map(str, current_chapter_number))
                if lo_id == 'XX':
                    lo_id = current_chapter_string
                if lo_id.split('-')[0] != current_chapter_string:
                    print(f"LO {lo_id} in {file.name}:{lineno + 1} does not match chapter {current_chapter_string}")
                learning_objectives.append((lo_id, k_level, lo_content))
                # Add learning objective to the table of contents
                toc_entry = (
                    f"{'  ' * (current_level)}- LO-{lo_id} {k_level} {lo_content}"
                )
                toc_entries.append((current_chapter_number, toc_entry))
                updated_line = f"> LO-{lo_id} {lo_content} {k_level}\n"
                updated_lines.append(updated_line)  # Preserve non-heading lines
            else:
                updated_lines.append(line)  # Preserve non-heading lines

        seen = set()
        dupl = [lo[0] for lo in learning_objectives if lo[0] in seen or seen.add(lo[0])]
        if dupl:
            print(f"Duplicate LOs in {file.name}: {dupl}")
        # Store the chapter's headings in the catalog
        catalog[file.name] = headings

        # Write the updated content back to the file
        with file.open("w", encoding="utf-8") as f:
            f.writelines(updated_lines)

        all_learning_objectives.extend(learning_objectives)

    sorted_lo = sorted(all_learning_objectives, key=lambda x: x[0])

    with (directory / "LOs.csv").open("w", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["LO ID", "K Level", "Content", "Slide Number", "Done", "Notes"])
        writer.writerows([(f"LO-{lo_id}", k_level, lo_content, "", "", "") for lo_id, k_level, lo_content in sorted_lo])

    print(f"Total LOs: {len(sorted_lo)}")
    # Sort the TOC entries by their numerical keys
    toc_entries.sort(key=lambda x: x[0])

    # Write the table of contents to README.md
    readme_path = directory / "README.md"
    with readme_path.open("w", encoding="utf-8") as readme_file:
        readme_file.write(introduction)
        readme_file.write("# Table of Contents\n\n")
        for _, toc_entry in toc_entries:
            readme_file.write(toc_entry + "\n")

    # Step 2: Resolve and update internal links
    for file in directory.glob("Chapter_*.md"):
        with file.open("r", encoding="utf-8") as f:
            lines = f.readlines()

        updated_lines = []
        for lineno, line in enumerate(lines):
            def replace_link(match):
                description, link_file, anchor = match.groups()
                link_file = link_file or file.name  # If no file is specified, use the current file
                anchor_name = anchor

                # Find the matching chapter and anchor
                if link_file in catalog:
                    for numbering, title, anchor in catalog[link_file]:
                        if title.strip() == anchor_name.strip() or anchor.endswith(anchor_name):
                            # Update the link with correct numbering and title
                            new_anchor = f"#{anchor}"
                            return f"[{numbering} {title}]({link_file}{new_anchor})"
                # If no match, leave the link unchanged
                print(f"Warning: Could not find anchor '{anchor_name}' in '{link_file}'."
                      "\n "
                      f"File: {file.name}:{lineno + 1}")
                return match.group(0)

            # Replace internal links in the line
            updated_line = re.sub(internal_link_pattern, replace_link, line)
            updated_lines.append(updated_line)

        # Write the updated content back to the file
        with file.open("w", encoding="utf-8") as f:
            f.writelines(updated_lines)


if __name__ == "__main__":
    update_heading_numbers_and_generate_toc(Path.cwd())
