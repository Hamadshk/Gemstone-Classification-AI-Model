from PIL import Image
import numpy as np

def preprocess_image(image_path, target_size=(128, 128)):
    # Load the image using PIL
    image = Image.open(image_path)
    
    # Check if the image has an alpha channel (4 channels)
    if image.mode == 'RGBA':
        # Convert the image to RGB (3 channels)
        image = image.convert('RGB')
    
    # Resize the image to the model's input size
    image = image.resize(target_size)
    
    # Convert the image to a numpy array
    image_array = np.array(image)
    
    # Normalize the pixel values to be in the range [0, 1]
    image_array = image_array / 255.0
    
    # Add an extra dimension to the array to match the model's input shape
    image_array = np.expand_dims(image_array, axis=0)
    
    return image_array
