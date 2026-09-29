"""Puts tools/prompts.js and tools/data.js into docs/index.html between the DATA markers."""
import pathlib, re
here = pathlib.Path(__file__).resolve().parent
page = here.parent / "docs" / "index.html"
data = (here / "prompts.js").read_text() + (here / "data.js").read_text()
s = page.read_text()
s = re.sub(r"/\*DATA\*/|/\*DATA-START\*/.*?/\*DATA-END\*/", lambda m: "/*DATA-START*/\n" + data + "/*DATA-END*/", s, count=1, flags=re.S)
page.write_text(s)
print(page)
