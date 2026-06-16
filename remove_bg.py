from PIL import Image

def remove_bg(input_path, output_path, is_black_bg=True):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            if is_black_bg:
                # Remove black background
                if item[0] < 20 and item[1] < 20 and item[2] < 20:
                    newData.append((item[0], item[1], item[2], 0))
                else:
                    newData.append(item)
            else:
                # Remove white background
                if item[0] > 240 and item[1] > 240 and item[2] > 240:
                    newData.append((255, 255, 255, 0))
                else:
                    newData.append(item)
                    
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process both images
remove_bg("d:/Project/metapashuweb/public/cattle-realistic-3d.png", "d:/Project/metapashuweb/public/cattle-realistic-3d.png", True)
remove_bg("d:/Project/metapashuweb/public/cattle-side-profile.png", "d:/Project/metapashuweb/public/cattle-side-profile.png", False)
