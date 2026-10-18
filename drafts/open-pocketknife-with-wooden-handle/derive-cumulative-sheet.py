from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path
src=Image.open('drafts/open-pocketknife-with-wooden-handle/single-master-source.png').convert('RGB')
master=src.crop((518,517,1018,1017))
finish=src.crop((1028,517,1528,1017))
# Clone untouched paper from the same raster master, then remove later pencil layers.
blank=Image.new('RGB',(500,500))
for y in range(500):
    sy=20+(y%140)
    blank.paste(master.crop((0,sy,500,sy+1)),(0,y))
def erase(im, regions):
    mask=Image.new('L',(500,500),0)
    d=ImageDraw.Draw(mask)
    for box in regions: d.rectangle(box,fill=255)
    return Image.composite(blank,im,mask.filter(ImageFilter.GaussianBlur(3)))
blade=[(296,169,495,268)]
inside=[(49,185,253,241)]
shadow=[(25,247,495,277)]
pivot=[(254,195,286,233)]
def restore_rivets(im):
    mask=Image.new('L',(500,500),0)
    d=ImageDraw.Draw(mask)
    for x in (60,195): d.ellipse((x-13,205-13,x+13,205+13),fill=255)
    return Image.composite(master,im,mask.filter(ImageFilter.GaussianBlur(2)))
frame1=erase(master,blade+inside+shadow+pivot)
frame2=restore_rivets(erase(master,blade+inside+shadow))
frame3=restore_rivets(erase(master,inside+shadow))
frames=[frame1,frame2,frame3,master,finish]
canvas=Image.new('RGB',(1536,1024),(255,255,255))
for i,im in enumerate(frames):
    x=[10,518,1028][i%3]; y=[10,517][i//3]
    canvas.paste(im,(x,y))
out=Path('drafts/open-pocketknife-with-wooden-handle/open-pocketknife-with-wooden-handle-contact-sheet.png')
canvas.save(out)
print(out)
