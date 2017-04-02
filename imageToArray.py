from PIL import Image, ImageDraw
from glob import glob
import json
image = Image.open("nerfDart.png")

tiles = []

palette = ["#FFFFFF", "#E4E4E4", "#888888", "#222222", "#FFA7D1", "#E50000", "#E59500", "#A06A42", "#E5D900", "#94E044", "#02BE01", "#00D3DD", "#0083C7", "#0000EA", "#CF6EE4", "#820080"]

print(image.mode)
for x in range(image.width)[::-1]:
    for y in range(image.height):
        color=-1
        pixel = image.getpixel((x,y))
        if pixel != (255,255,255,0):
            print(x,y,pixel)
        if pixel == (255,255,255,255):
            print("white")
            color=0
        elif pixel == (0,0,234,255):
            print("blue")
            color = 13
        elif pixel == (229, 149, 0,255):
            print("orange")
            color = 6
        if color != -1:
            tiles.append([x,y,color])
print(tiles)
print(len(tiles))
output = "var tiles="+json.dumps(tiles)+";"
with open('nerfDart.js', 'w') as outfile:
    outfile.write(output)
