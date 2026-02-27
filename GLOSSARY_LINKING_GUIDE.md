# Glossary Link Automation Guide

## Overview

This guide explains how to automatically add glossary links throughout the Robot Framework RFCP Syllabus documentation. The automation tool identifies glossary terms in documentation files and creates hyperlinks to the interactive glossary page.

## What This Tool Does

The glossary linker automatically transforms terms into clickable links:

**Before:**
```markdown
The Variable Number of Positional Arguments is marked with a single asterisk.
```

**After:**
```markdown
The [Variable Number of Positional Arguments](../glossary#variable-number-of-positional-arguments) is marked with a single asterisk.
```

The tool:
- ✅ Links 80+ glossary terms automatically
- ✅ Uses relative paths (works in both local dev and production)
- ✅ Preserves code blocks and headings
- ✅ Only links terms in body content (keeps navigation clean)
- ✅ Handles term aliases (e.g., "kwargs" → "Free Named Argument")

## Prerequisites

- Python 3.7 or higher
- Git
- Node.js and npm (for testing)
- Write access to the repository

## Installation

### 1. Locate the Tool

The glossary linker tool is located in the repository at:
```
tools/glossary_linker.py
```

If you're setting this up for the first time, the tool should already be in the repository. If not, contact the repository maintainers.

### 2. Verify Python Installation

```bash
python3 --version
```

You should see Python 3.7 or higher.

## Usage Instructions

### Step 1: Navigate to Repository Root

```bash
cd /path/to/robotframework-RFCP-syllabus
```

### Step 2: Create a Feature Branch

Always work in a feature branch:

```bash
git checkout -b feature/update-glossary-links
```

### Step 3: Run in Test Mode (DRY RUN)

**IMPORTANT: Always run in dry-run mode first!**

```bash
python3 tools/glossary_linker.py website/docs --dry-run
```

This shows you what would be changed without modifying any files.

**Review the output:**
- Check the number of files that will be modified
- Verify which terms will be linked
- Ensure no unexpected changes

Example output:
```
Processing: website/docs
Dry run: True
Relative paths: True

============================================================
SUMMARY
============================================================
Total files: 45
Modified: 28
Terms linked: 234

============================================================
DETAILS
============================================================

chapter-02/keyword_interface.md
  Terms: 15
    - Variable Number of Positional Arguments: 5x
    - Named-Only Argument: 3x
    - Free Named Argument: 2x
```

### Step 4: Apply Changes

Once you're satisfied with the dry-run output:

```bash
python3 tools/glossary_linker.py website/docs
```

This will:
- Modify markdown files in `website/docs/`
- Add glossary links to terms in body content
- Preserve headings, code blocks, and frontmatter
- Create a statistics file: `stats.json`

### Step 5: Review Changes

Use git to review what was changed:

```bash
# See all changed files
git status

# View specific changes
git diff website/docs/chapter-02/keyword_interface.md

# View summary of changes
git diff --stat website/docs/
```

**What to check:**
- ✅ Links use relative paths: `../glossary#term`
- ✅ Headings are NOT linked: `## 2.5 Keyword Interface` (clean)
- ✅ Body content IS linked: `The [Keyword Interface](../glossary#...)...`
- ✅ Code blocks are unchanged

### Step 6: Test Locally

Build and run the documentation locally:

```bash
cd website
npm install  # First time only
npm start
```

This opens the documentation at `http://localhost:3000`

**Test the links:**
1. Navigate to Chapter 2, Section 2.5
2. Click on a glossary term (e.g., "Variable Number of Positional Arguments")
3. Verify you're taken to the glossary page
4. Verify the correct term is highlighted
5. Test 3-5 different links across different chapters

**Check navigation:**
1. Look at the left sidebar - terms should NOT be linked
2. Look at Previous/Next buttons - terms should NOT be linked
3. Both should show clean text without `[...]` brackets

### Step 7: Build for Production

Test the production build:

```bash
npm run build
npm run serve
```

Navigate to `http://localhost:3000` and verify links work in the production build.

### Step 8: Commit Changes

```bash
cd ..  # Back to repository root

# Stage all changes
git add website/docs/

# Commit with descriptive message
git commit -m "Add glossary links to documentation

- Automatically linked 80+ glossary terms
- Links use relative paths for local dev compatibility
- Covers argument types, variables, control structures, core concepts
- Tested locally and in production build
- All links verified working correctly"
```

### Step 9: Push and Create Pull Request

```bash
# Push your branch
git push origin feature/update-glossary-links
```

Then create a pull request on GitHub with the following information:

**PR Title:** Add glossary links to documentation

**PR Description:**
```markdown
## Summary
Automatically added glossary links throughout the documentation using the glossary linker tool.

## Changes
- Linked 80+ glossary terms across ~28 files
- Terms include: argument types, variables, control structures, core RF concepts
- Links use relative paths (works in both local dev and production)

## Testing
- [x] Ran in dry-run mode and reviewed output
- [x] Tested locally with `npm start`
- [x] Verified glossary links work correctly
- [x] Checked sidebar and navigation are clean (no links)
- [x] Tested production build with `npm run build`
- [x] Reviewed git diff for all changed files

## Statistics
- Total files processed: [X]
- Files modified: [X]
- Terms linked: [X] occurrences

## Screenshots
[Optional: Add screenshots showing working links]
```

## Understanding the Tool

### How It Works

The tool processes markdown files in several steps:

1. **Extracts frontmatter** - YAML metadata at the top of files
2. **Identifies sections** - Separates headings, code blocks, and content
3. **Applies patterns** - Matches glossary terms in content only
4. **Creates links** - Generates relative links to glossary
5. **Preserves structure** - Keeps headings and code blocks unchanged

### What Gets Linked

The tool links these types of terms:

**Argument Types:**
- Mandatory Argument, Optional Argument
- Positional Argument, Named Argument
- Embedded Argument
- Positional or Named Argument
- Variable Number of Positional Arguments (*args, *varargs)
- Named-Only Argument
- Free Named Argument (kwargs, **kwargs)

**Variables:**
- Variable, Scalar Variable, List Variable
- Variable Scope
- Global Variable, Suite Variable, Local Variable
- Built-In Variables

**Control Structures:**
- Control Structure
- FOR Loop, WHILE Loop

**Core Concepts:**
- Keyword, User Keyword, Keyword Library
- Suite, Test Case, Task
- Resource File
- Keyword Interface, Argument Interface

And 50+ more terms...

### What Gets Excluded

The tool does NOT link terms in:

- ❌ Markdown headings (`#`, `##`, `###`, etc.)
- ❌ YAML frontmatter (`---...---`)
- ❌ Code blocks (` ``` ` or `` ` ``)
- ❌ Existing links
- ❌ HTML `<code>` tags

This ensures:
- Sidebar navigation stays clean
- Previous/Next navigation stays clean
- Code examples remain unchanged

### Link Format

Links are generated as relative paths:

| File Location | Generated Link |
|--------------|----------------|
| `docs/overview.md` | `./glossary#term` |
| `docs/chapter-02/page.md` | `../glossary#term` |
| `docs/chapter-02/sub/page.md` | `../../glossary#term` |

This ensures links work in:
- ✅ Local development (`npm start`)
- ✅ Production builds
- ✅ Deployed sites

## Troubleshooting

### Issue: Terms Not Being Linked

**Possible causes:**
1. Term is in a heading
2. Term is in a code block
3. Term is already linked
4. Term is not in the glossary term list

**Solution:**
- Verify the term exists in `GLOSSARY_DATA` in the script
- Check that it's in body content, not a heading
- Ensure it's not in a `` ``` `` code block

### Issue: Links Show in Sidebar

**Symptom:** Sidebar shows `[Keyword Interface](...)` instead of clean text

**Cause:** Terms were linked in headings

**Solution:** This shouldn't happen with the current tool. If it does:
1. Revert changes: `git checkout website/docs/`
2. Ensure you're using the latest version of the tool
3. Re-run the tool

### Issue: Links Don't Work Locally

**Symptom:** Clicking links shows "Page Not Found"

**Cause:** Using absolute paths instead of relative paths

**Solution:** The current tool uses relative paths by default. Verify links in the markdown look like:
- ✅ `../glossary#term` (relative - correct)
- ❌ `/robotframework-RFCP-syllabus/docs/glossary#term` (absolute - incorrect)

### Issue: Code Examples Have Links

**Symptom:** Links appear inside code blocks

**Cause:** Code block not properly detected

**Solution:**
1. Ensure code blocks use proper markdown (` ``` `)
2. Check for unclosed code blocks
3. Report the issue if it persists

## Updating the Tool

### When to Update

Update the glossary linker when:
- New glossary terms are added
- Term definitions change
- Aliases need to be updated

### How to Update

Edit `tools/glossary_linker.py` and modify the `GLOSSARY_DATA` list:

```python
GLOSSARY_DATA = [
    {
        'term': 'New Term Name',
        'definition': 'Brief definition',
        'abbreviation': 'NTN',  # Optional
        'aliases': ['Alternative Name', 'Another Alias']  # Optional
    },
    # ... existing terms ...
]
```

Then commit the updated tool:

```bash
git add tools/glossary_linker.py
git commit -m "Update glossary linker with new terms"
```

### Testing Updates

After updating the tool:

1. Run on a single file first:
   ```bash
   python3 tools/glossary_linker.py website/docs/chapter-02 --dry-run
   ```

2. Verify the new terms are detected

3. Apply to full documentation:
   ```bash
   python3 tools/glossary_linker.py website/docs
   ```

## Maintenance

### Regular Updates

Run the glossary linker periodically:
- After adding new documentation chapters
- After updating existing content
- Quarterly maintenance runs

### Re-running the Tool

The tool is **idempotent** - running it multiple times on the same content will:
- ✅ Not create duplicate links
- ✅ Not modify existing links
- ✅ Only add new links where needed

You can safely re-run it:

```bash
python3 tools/glossary_linker.py website/docs
```

### Version Control

The tool itself should be version controlled:
- Keep `tools/glossary_linker.py` in the repository
- Document any updates in commit messages
- Tag releases if making significant changes

## Best Practices

### Do's ✅

- Always run in `--dry-run` mode first
- Review changes before committing
- Test locally with `npm start`
- Test production build
- Update term list when adding new glossary entries
- Document any issues or improvements

### Don'ts ❌

- Don't skip the dry-run step
- Don't commit without testing
- Don't manually add glossary links (use the tool)
- Don't modify the tool without testing
- Don't run on uncommitted changes without backup

## Command Reference

```bash
# Dry run (preview changes)
python3 tools/glossary_linker.py website/docs --dry-run

# Apply changes
python3 tools/glossary_linker.py website/docs

# Save statistics
python3 tools/glossary_linker.py website/docs --output stats.json

# Help
python3 tools/glossary_linker.py --help
```

## Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review the tool's inline documentation
3. Check recent commits for similar issues
4. Open an issue in the repository with:
   - What you tried to do
   - What happened
   - Error messages or unexpected output
   - Your Python version

## Contributing

### Reporting Issues

If you find a problem:

1. Document the issue with examples
2. Include the command you ran
3. Provide sample markdown that shows the problem
4. Open an issue with this information

### Suggesting Improvements

Improvements welcome:
- Better term detection
- Additional glossary terms
- Performance optimizations
- Better error messages

Submit improvements via pull request.

## License

This tool is part of the Robot Framework RFCP Syllabus project and follows the same license.

## Credits

Maintained by the Robot Framework Foundation and contributors.

---

**Last Updated:** February 2026

**Tool Version:** 3.0 (Final)

**Compatible With:** Robot Framework RFCP Syllabus v2024+
