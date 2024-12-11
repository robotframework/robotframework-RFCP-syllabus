from pathlib import Path
import re


def update_heading_numbers_and_generate_toc(directory: Path):
    # Regex patterns
    chapter_file_pattern = re.compile(r"Chapter_(\d+)_.*\.md")
    heading_pattern = re.compile(r"(#+)\s*(\d+(?:\.\d+)*)?\s*(.*)")
    internal_link_pattern = re.compile(r"\[([^\[\]]*?)\]\((Chapter_.*?)?#(?:\d\.?)*-?(.*?)\)")

    # Dictionary to store chapters and their headings for resolving links
    catalog = {}

    # Step 1: Update headings and generate the catalog of chapters
    toc_entries = []

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
        code_block = False
        for line in lines:
            if line.strip().startswith("```robot"):
                code_block = True
                continue
            if code_block:
                if line.strip() == "```":
                    code_block = False
                continue

            heading_match = heading_pattern.match(line)
            if heading_match:
                level = len(heading_match.group(1))  # Number of '#' indicates heading level
                title = heading_match.group(3).strip()  # Extract the title

                if is_first_heading and level == 1:
                    # Special handling for the first h1
                    numbering = f"{chapter_number}"
                    is_first_heading = False
                    numbering_stack = [chapter_number]  # Initialize the stack for this file
                else:
                    if len(numbering_stack) < level:
                        numbering_stack.append(1)  # Add a new level
                    else:
                        numbering_stack[level - 1] += 1  # Increment the current level
                        numbering_stack = numbering_stack[:level]  # Trim excess levels

                    # Generate the hierarchical numbering
                    numbering = ".".join(map(str, numbering_stack))

                # Update the line with the new numbering
                heading = f"{numbering} {title}"
                updated_line = f"{'#' * level} {heading}\n"
                updated_lines.append(updated_line)

                # Generate an anchor for this heading
                anchor = re.sub(r'[^\w\- ]', '', heading).strip().replace(' ', '-').lower()
                headings.append((numbering, title, anchor))

                # Generate a link for the table of contents
                toc_entry = (
                    f"{'  ' * (level - 1)}- [`{numbering} {title}`]"
                    f"({file.name}#{anchor})"
                )
                # Add entry with a sort key for sorting later
                toc_entries.append((list(map(int, numbering.split('.'))), toc_entry))
            else:
                updated_lines.append(line)  # Preserve non-heading lines

        # Store the chapter's headings in the catalog
        catalog[file.name] = headings

        # Write the updated content back to the file
        with file.open("w", encoding="utf-8") as f:
            f.writelines(updated_lines)

    # Sort the TOC entries by their numerical keys
    toc_entries.sort(key=lambda x: x[0])

    # Write the table of contents to README.md
    readme_path = directory / "README.md"
    with readme_path.open("w", encoding="utf-8") as readme_file:
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
