# Contributing

Thanks for helping us improve the RFCP syllabus! The notes below explain how to bootstrap the tooling, run Docusaurus locally, and keep the docs consistent.

## 1. Install prerequisites
- Node.js 20+ (needed for Docusaurus and Playwright)
- Python 3.11+ (the repo bootstrap script creates a virtual environment for you)
- npm (ships with Node)

## 2. Project setup
1. From the repository root, bootstrap both the Python and JavaScript toolchains:
   ```bash
   python bootstrap.py
   ```
   The script upgrades `pip`, installs `pre-commit`, and asks whether you want to pull in the optional PDF toolchain (Robot Framework + Browser batteries from `requirements.txt`, plus Chromium via `rfbrowser install chromium`). Answer "y" only if you plan to regenerate the PDF. Regardless of that choice, the script installs the pre-commit hook and then runs `npm install` inside `website/` so Docusaurus has its dependencies.
2. Start Docusaurus in development mode while you edit:
   ```bash
   cd website  # if not already there
   npm run start
   ```

## 3. Quality checks before committing
- `pre-commit` automatically runs `python tools/gen_numbering.py` on every commit. If headings, learning-objective numbering, or internal links change the hook updates the files, prints a diff, and blocks the commit until you stage the fixes.
- All fenced code blocks must stay within 100 characters per line. Run `npm run build` in the `website/` directory to check code block line lengths (or let CI run it).
- Docusaurus validates internal links during builds. Run `npm run build` before submitting a PR to catch broken anchors or missing pages early.

## 4. Generating the syllabus PDF
To rebuild the syllabus PDF from the Robot Framework assets, run the Robot Framework suite from the repo root:

1. Activate the created virtual environment so local commands use the same interpreters as the hooks:
   - macOS/Linux: `source .venv/bin/activate`
   - Windows (PowerShell): `.venv\Scripts\Activate.ps1`

2. Run the suite to generate the PDF:
    ```bash
    robot -d results tools/gen_pdf.robot
    ```
The PDF and execution logs land inside `results/`.

Following the steps above keeps your local environment consistent with CI and ensures contributions land cleanly. Happy writing!
