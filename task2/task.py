import pytesseract as p
from PIL import Image
a=Image.open("task2/pic.png")
content=p.image_to_string(a)
result=eval(content)
print(result)