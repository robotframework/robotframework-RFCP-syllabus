import platform
import subprocess
from pathlib import Path
from venv import EnvBuilder


class Colors:
    """ANSI color codes"""

    BLACK = "\033[0;30m"
    RED = "\033[0;31m"
    GREEN = "\033[0;32m"
    BROWN = "\033[0;33m"
    BLUE = "\033[0;34m"
    PURPLE = "\033[0;35m"
    CYAN = "\033[0;36m"
    LIGHT_GRAY = "\033[0;37m"
    DARK_GRAY = "\033[1;30m"
    LIGHT_RED = "\033[1;31m"
    LIGHT_GREEN = "\033[1;32m"
    YELLOW = "\033[1;33m"
    LIGHT_BLUE = "\033[1;34m"
    LIGHT_PURPLE = "\033[1;35m"
    LIGHT_CYAN = "\033[1;36m"
    LIGHT_WHITE = "\033[1;37m"
    BOLD = "\033[1m"
    FAINT = "\033[2m"
    ITALIC = "\033[3m"
    UNDERLINE = "\033[4m"
    BLINK = "\033[5m"
    NEGATIVE = "\033[7m"
    CROSSED = "\033[9m"
    END = "\033[0m"
    # cancel SGR codes if we don't write to a terminal
    if not __import__("sys").stdout.isatty():
        for _ in dir():
            if isinstance(_, str) and _[0] != "_":
                locals()[_] = ""
    elif __import__("platform").system() == "Windows":
        kernel32 = __import__("ctypes").windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
        del kernel32


venv_dir = Path() / ".venv"
requirements_file = Path("requirements.txt")
website_dir = Path("website")
if not platform.platform().startswith("Windows"):
    venv_bin = venv_dir / "bin"
    venv_python = venv_bin / "python"
    venv_pre_commit = venv_bin / "pre-commit"
else:
    venv_bin = venv_dir / "Scripts"
    venv_python = venv_bin / "python.exe"
    venv_pre_commit = venv_bin / "pre-commit.exe"

if not venv_dir.exists():
    print(f"Creating virtualenv in {venv_dir}")
    EnvBuilder(with_pip=True).create(venv_dir)

subprocess.run([venv_python, "-m", "pip", "install", "-U", "pip"], check=True)
subprocess.run([venv_python, "-m", "pip", "install", "-U", "pre-commit"], check=True)
install_pdf_tooling = False
if requirements_file.exists():
    answer = input(f"{Colors.GREEN}Install Robot Framework + browser batteries for PDF generation?{Colors.END} {Colors.YELLOW}[y/N]: {Colors.END}").strip().lower()
    install_pdf_tooling = answer in {"y", "yes"}
    if install_pdf_tooling:
        subprocess.run([venv_python, "-m", "pip", "install", "-r", str(requirements_file)], check=True)
        subprocess.run([venv_python, "-m", "Browser.entry", "install", "chromium", "--with-deps"], check=True)

subprocess.run([venv_pre_commit, "install"], check=True)

if website_dir.exists():
    npm_cmd = ["npm", "install"]
    print(f"Running {' '.join(npm_cmd)} in {website_dir}")
    subprocess.run(npm_cmd, cwd=website_dir, check=True)

activate_script = (
    "source .venv/bin/activate"
    if not platform.platform().startswith("Windows")
    else ".venv\\Scripts\\activate"
)

print(f"\n\nVirtualenv '{Colors.GREEN}{venv_dir}{Colors.END}' is ready and up-to-date.")
print(f"Run '{Colors.GREEN}{activate_script}{Colors.END}' to activate the virtualenv.")
