"""Share card, 1200x630: a truck of boxes between two houses, and the title."""
import pathlib
from PIL import Image, ImageDraw, ImageFont

out = pathlib.Path(__file__).resolve().parent.parent / "docs" / "card.jpg"
W, H = 1200, 630
INK, SKY, SUN, PINK, TEAL, BOX, TAPE, GRASS, WHITE = (32, 36, 42), (223, 241, 247), (246, 182, 35), (216, 70, 125), (18, 122, 112), (201, 138, 75), (243, 210, 122), (143, 207, 122), (255, 255, 255)
img = Image.new("RGB", (W, H), SKY)
d = ImageDraw.Draw(img)
d.ellipse([1050, 40, 1130, 120], fill=SUN)
d.rectangle([0, 520, W, H], fill=GRASS)
d.rectangle([0, 520, W, 536], fill=(106, 111, 120))

def house(x, roof, door):
    d.polygon([(x, 380), (x + 110, 300), (x + 220, 380)], fill=roof, outline=INK, width=6)
    d.rectangle([x + 22, 380, x + 198, 520], fill=WHITE, outline=INK, width=6)
    d.rectangle([x + 88, 440, x + 132, 520], fill=door, outline=INK, width=5)

house(40, PINK, BOX)
house(940, TEAL, SUN)

tx, ty = 330, 400
d.rounded_rectangle([tx, ty, tx + 260, ty + 110], 10, fill=WHITE, outline=INK, width=6)
for bx, bw, bh in ((tx + 16, 70, 70), (tx + 96, 72, 86), (tx + 178, 66, 64)):
    d.rectangle([bx, ty + 100 - bh, bx + bw, ty + 100], fill=BOX, outline=INK, width=4)
    d.rectangle([bx + bw // 2 - 8, ty + 100 - bh, bx + bw // 2 + 8, ty + 100], fill=TAPE)
d.polygon([(tx + 260, ty + 30), (tx + 330, ty + 30), (tx + 368, ty + 72), (tx + 368, ty + 110), (tx + 260, ty + 110)], fill=SUN, outline=INK, width=6)
d.rectangle([tx + 278, ty + 44, tx + 318, ty + 78], fill=SKY, outline=INK, width=4)
for wx in (tx + 60, tx + 300):
    d.ellipse([wx - 28, ty + 92, wx + 28, ty + 148], fill=INK)
    d.ellipse([wx - 10, ty + 110, wx + 10, ty + 130], fill=(204, 204, 204))

F = "/System/Library/Fonts/Supplemental/"
big = ImageFont.truetype(F + "Georgia Bold.ttf", 100)
th = ImageFont.truetype(F + "Tahoma Bold.ttf", 64)
small = ImageFont.truetype(F + "Courier New Bold.ttf", 28)
thsmall = ImageFont.truetype(F + "Tahoma.ttf", 30)
d.text((60, 40), "Moving Day", font=big, fill=INK)
d.text((64, 150), "วันย้ายบ้าน", font=th, fill=PINK)
d.text((440, 172), "Take your chats, memories and", font=small, fill=INK)
d.text((440, 208), "settings from one AI to another.", font=small, fill=INK)
d.text((440, 248), "ขนแชทและความจำไป AI ตัวใหม่", font=thsmall, fill=TEAL)
d.text((64, 572), "nanobotco.github.io/moving-day", font=small, fill=INK)
img.save(out, quality=88)
print(out)
