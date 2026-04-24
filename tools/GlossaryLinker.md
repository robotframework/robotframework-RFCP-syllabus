# Glossary Linker - Complete Guide

Automated tool for adding glossary links throughout the Robot Framework RFCP Syllabus documentation.

## 📚 Overview

This toolkit consists of two scripts that work together:

1. **`extract_from_json.py`** - Extracts glossary terms from `glossary.json`
2. **`glossary_linker.py`** - Links those terms throughout the documentation

## ✨ Features

- ✅ **Case-insensitive matching** - "variable files" links to "Variable File"
- ✅ **Plural/singular support** - "keywords" links to "Keyword"
- ✅ **Test|Task notation** - "Test|Task Setup" links correctly
- ✅ **Smart exclusions** - Skips headings, code blocks, LO blocks
- ✅ **Preserves casing** - Original text casing maintained in links
- ✅ **Relative paths** - Works with Docusaurus navigation

## 🚀 Complete Workflow

Follow these steps whenever the glossary is updated or you want to refresh links:

### Step 1: Extract Terms from Glossary

```bash
# Navigate to repository
cd ~/Desktop/robotframework-RFCP-syllabus

# Extract all terms from the glossary JSON file
python3 tools/extract_from_json.py website/static/glossary/glossary.json
```

**Output:**
```
Found 79 glossary terms:

  1. Acceptance Testing
  2. Adaptation Layer
  3. Atomic Element
  ...

======================================================================
PYTHON CODE TO ADD TO glossary_linker.py:
======================================================================

GLOSSARY_DATA = [
    {"term": "Acceptance Testing", "abbreviation": None},
    {"term": "Adaptation Layer", "abbreviation": None},
    ...
]
```

### Step 2: Update glossary_linker.py

```bash
# Open the linker script
code tools/glossary_linker.py

# OR use your preferred editor
nano tools/glossary_linker.py
vim tools/glossary_linker.py
```

**Manual steps:**
1. Scroll to the bottom of the file
2. Find the `GLOSSARY_DATA = [` section
3. **Replace the entire array** with the output from Step 1
4. Save the file (Cmd+S or :wq)

### Step 3: Test with Dry Run

```bash
# Preview what will change WITHOUT modifying files
python3 tools/glossary_linker.py website/docs --dry-run
```

**Expected output:**
```
Processing: website/docs
Dry run: True
Processed 31 files
Modified 0 files
Total terms linked: 189
⚠️  DRY RUN - No files were modified
```

### Step 4: Apply the Links

```bash
# Actually modify the files and create links
python3 tools/glossary_linker.py website/docs
```

**Output:**
```
Processing: website/docs
Dry run: False
Processed 31 files
Modified 31 files
Total terms linked: 189
✅ Done!
```

### Step 5: Verify Changes

```bash
# Check what files were modified
git status

# See statistics of changes
git diff --stat

# Look for specific terms (e.g., "atomic element")
git diff website/docs/ | grep -i "atomic"

# View changes in a specific file
git diff website/docs/chapter-03/03_user_keyword.md | head -50
```

**What to look for:**
- ✅ Lowercase terms linked: `[variable files](../glossary#variable-file)`
- ✅ Plural terms linked: `[keywords](../glossary#keyword)`
- ✅ Original casing preserved in link text
- ✅ No links in headings (lines starting with `#`)
- ✅ No links in code blocks (between ` ``` `)

### Step 6: Test Locally in Browser

```bash
# Navigate to website directory
cd website

# Install dependencies (first time only)
npm install

# Start development server
npm start
```

**Browser opens to:** `http://localhost:3000`

**Test the links:**
1. Navigate to any chapter (e.g., Chapter 3 → User Keywords)
2. Look for blue linked terms
3. Click on a linked term (e.g., "variable files")
4. Should navigate to glossary page and scroll to that term
5. Press Ctrl+C in terminal to stop server when done

### Step 7: Commit Changes

```bash
# Go back to repository root
cd ..

# Stage all changes
git add tools/ website/docs/

# Commit with descriptive message
git commit -m "Update glossary links

- Extracted 79 terms from glossary.json
- Applied case-insensitive and plural matching
- Linked 189 terms across 31 documentation files"

# Push to your branch
git push origin glossary-links-final
```

### Step 8: Create Pull Request

1. Go to GitHub: `https://github.com/robotframework/robotframework-RFCP-syllabus`
2. Click "Pull requests" → "New pull request"
3. Select your branch: `glossary-links-final`
4. Add title: "Add automated glossary linking with case-insensitive matching"
5. Add description (see template below)
6. Create pull request

---

## 📝 Pull Request Description Template

```markdown
## Summary
Adds automated glossary linking throughout the documentation using a Python script.

## Changes
- Created `extract_from_json.py` to extract terms from `glossary.json`
- Created `glossary_linker.py` to automatically link glossary terms
- Linked 189 glossary terms across 31 documentation files

## Features
- ✅ Case-insensitive matching ("variable files" → "Variable File")
- ✅ Plural/singular support ("keywords" → "Keyword")
- ✅ Test|Task notation support
- ✅ Preserves original text casing in links
- ✅ Excludes headings, code blocks, LO blocks

## Testing
- [x] Dry-run completed successfully
- [x] Local build successful (`npm start`)
- [x] Links navigate correctly to glossary
- [x] No broken links detected

## Example Changes
- `variable files` → `[variable files](../glossary#variable-file)`
- `keywords` → `[keywords](../glossary#keyword)`
- `atomic element` → `[atomic element](../glossary#atomic-element)`
```

---

## 🔄 When to Run This Workflow

Run the complete workflow whenever:

- ✅ **New terms are added** to `glossary.json`
- ✅ **Terms are renamed** in the glossary
- ✅ **You sync with upstream** (`git pull upstream main`)
- ✅ **Before creating a PR** (ensures links are up-to-date)
- ✅ **After major glossary changes** (like PR #72 merge)

---

## 📋 Quick Reference Commands

### One-Time Setup
```bash
# Clone the repository (if not done)
git clone https://github.com/robotframework/robotframework-RFCP-syllabus.git
cd robotframework-RFCP-syllabus

# Install website dependencies
cd website
npm install
cd ..
```

### Regular Workflow
```bash
# 1. Extract terms
python3 tools/extract_from_json.py website/static/glossary/glossary.json

# 2. Update glossary_linker.py manually (copy GLOSSARY_DATA)

# 3. Test
python3 tools/glossary_linker.py website/docs --dry-run

# 4. Apply
python3 tools/glossary_linker.py website/docs

# 5. Verify
git diff website/docs/ | less

# 6. Test locally
cd website && npm start

# 7. Commit
git add tools/ website/docs/
git commit -m "Update glossary links"
git push origin <your-branch-name>
```

---

## 🔧 Script Details

### extract_from_json.py

**Purpose:** Reads `website/static/glossary/glossary.json` and generates Python code for `GLOSSARY_DATA`.

**Input:** JSON file with glossary terms
```json
[
  {
    "term": "Atomic Element",
    "aliases": [],
    "abbreviation": "",
    "definition": "..."
  }
]
```

**Output:** Python code ready to paste
```python
GLOSSARY_DATA = [
    {"term": "Atomic Element", "abbreviation": None},
    ...
]
```

**Also creates:** `glossary_terms_extracted.json` for reference

### glossary_linker.py

**Purpose:** Automatically adds glossary links to all markdown documentation files.

**Features:**
- Case-insensitive pattern matching with `re.IGNORECASE`
- Pluralization logic for common English patterns
- Regex patterns that avoid already-linked content
- Relative path generation for Docusaurus compatibility
- Section-based processing (headings, code, LO blocks, text)

**Linking logic:**
1. Splits each file into sections (frontmatter, headings, code, LO blocks, text)
2. Only processes "text" sections
3. Searches for each glossary term (case-insensitive)
4. Links first occurrence of each term per file
5. Preserves original text casing in the link

**Example transformations:**
```markdown
<!-- Before -->
We can use variable files to define keywords.

<!-- After -->
We can use [variable files](../glossary#variable-file) to define [keywords](../glossary#keyword).
```

---

## 🐛 Troubleshooting

### Issue: "Found 0 glossary terms"

**Cause:** Glossary file path is incorrect or file format changed

**Solution:**
```bash
# Verify the file exists
ls -la website/static/glossary/glossary.json

# Check the file format
head -20 website/static/glossary/glossary.json

# Use correct path
python3 tools/extract_from_json.py website/static/glossary/glossary.json
```

### Issue: "No such file or directory: tools/glossary_linker.py"

**Cause:** Running from wrong directory

**Solution:**
```bash
# Check current directory
pwd

# Navigate to repository root
cd ~/Desktop/robotframework-RFCP-syllabus

# Verify you're in the right place
ls tools/
# Should show: extract_from_json.py, glossary_linker.py, etc.
```

### Issue: Build fails with broken links

**Cause:** Term in GLOSSARY_DATA doesn't exist in actual glossary

**Solution:**
```bash
# Re-extract to get latest terms
python3 tools/extract_from_json.py website/static/glossary/glossary.json

# Update glossary_linker.py with new output
# Re-run the linker
```

### Issue: npm install fails

**Cause:** Node.js not installed or wrong version

**Solution:**
```bash
# Check Node.js version
node --version
# Should be v18 or higher

# Install Node.js if needed
brew install node

# Then retry
cd website
npm install
```

### Issue: Unwanted terms getting linked

**Cause:** False positives in pattern matching

**Solution:**
Edit `glossary_linker.py` to exclude specific terms:
```python
# Add to excluded terms
excluded_terms = ['Test', 'Task']  # Add problematic terms here
```

---

## 📊 Statistics

Current glossary coverage:
- **79 glossary terms** defined
- **31 documentation files** processed
- **189 links** created
- **100% case-insensitive** matching
- **Plural/singular** variations supported

---

## 🎯 Best Practices

1. **Always run dry-run first** - Preview changes before applying
2. **Test locally in browser** - Verify links work correctly
3. **Check git diff** - Review all changes before committing
4. **Update regularly** - Keep links in sync with glossary
5. **One term per file** - Script links each term only once per file (prevents clutter)

---

## 📚 Additional Resources

- **Glossary Table Component:** `website/src/components/Glossary/GlossaryTable.tsx`
- **Glossary Data Source:** `website/static/glossary/glossary.json`
- **Documentation Files:** `website/docs/chapter-*/`
- **Docusaurus Config:** `website/docusaurus.config.ts`

---

## 🔗 Related Documentation

- [Docusaurus Documentation](https://docusaurus.io/)
- [Robot Framework RFCP Syllabus](https://github.com/robotframework/robotframework-RFCP-syllabus)
- [PR #72 - Dynamic Glossary](https://github.com/robotframework/robotframework-RFCP-syllabus/pull/72)

---
