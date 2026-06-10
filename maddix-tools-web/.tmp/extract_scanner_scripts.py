import re
from pathlib import Path

INPUT_HTML = Path("sourse/Sccaner Ip & Domin - v1.1(beta) (2).html")
OUT_DIR = Path("maddix-tools-web/.tmp/scanner")


def extract_scripts(html_text: str):
    # Extract full <script>...</script> blocks (non-greedy)
    return re.findall(r"<script[\s\S]*?</script>", html_text, flags=re.IGNORECASE)


def main():
    raw = INPUT_HTML.read_text(encoding="utf-8", errors="ignore")
    scripts = extract_scripts(raw)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for i, s in enumerate(scripts):
        (OUT_DIR / f"scanner-script-{i}.html").write_text(s, encoding="utf-8")

    print(f"SCRIPT_COUNT={len(scripts)}")
    print(f"WROTE_DIR={OUT_DIR}")


if __name__ == "__main__":
    main()

