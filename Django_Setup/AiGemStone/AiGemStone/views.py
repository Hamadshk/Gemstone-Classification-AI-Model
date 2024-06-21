# from django.http import JsonResponse, HttpResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.core.files.storage import default_storage

# @csrf_exempt
# def upload_single(request):
#     # Ensure the request is a POST request
#     if request.method == 'POST':
#         # Check if the request contains files
#         if 'image' in request.FILES:
#             # Retrieve the image file from the request
#             image_file = request.FILES['image']
            
#             # Logging file details for debugging
#             print(f"Received file: {image_file}")
#             print(f"File name: {image_file.name}")
#             print(f"File size: {image_file.size} bytes")
#             print(f"File content type: {image_file.content_type}")
            
#             # Define a storage path within your media storage (e.g., 'uploaded_images/')
#             storage_path = 'uploaded_images/'
            
#             # Save the image using Django's default storage
#             file_path = default_storage.save(storage_path + image_file.name, image_file)
            
#             # Return a JSON response with the file path and success message
#             return JsonResponse({
#                 'message': 'Image uploaded successfully.',
#                 'file_path': file_path,
#             }, status=200)
#         else:
#             # If no image file is found in the request, return a bad request response
#             return JsonResponse({
#                 'message': 'No image file found in the request.',
#             }, status=400)
    
#     # If the request method is not POST, return a method not allowed response
#     return JsonResponse({
#         'message': 'Method not allowed. Please use POST.',
#     }, status=405)

# def home(request):
#     return HttpResponse("Welcome to the AI Gemstone Detection Application!")


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .model_loader import model  # Import the model from the separate module
from .preprocess_image import preprocess_image  # A utility function to preprocess images
from django.core.files.storage import default_storage
import numpy as np
from django.conf import settings
from os.path import join


@csrf_exempt
def upload_single(request):
    if request.method == 'POST':
        if 'image' in request.FILES:
            # Retrieve the image file
            image_file = request.FILES['image']
            # Save the image to the storage and get the path
            default_storage.save('uploaded_images/' + image_file.name, image_file)
            file_path = settings.MEDIA_ROOT +r"/uploaded_images/"+ image_file.name
            
            # Preprocess the image  
            processed_image = preprocess_image(file_path)
            
            # Use the model to predict the gem
            prediction = model.predict(processed_image)
            
            # Determine the class of the gem based on the prediction
            gem_class = np.argmax(prediction)  # This returns the class index with the highest probability
            
            gem_class = int(gem_class)+1
            # Return the prediction result as a response
            return JsonResponse({
                'message': 'Prediction successful.',
                'gem_class': gem_class,
                'probability': prediction.tolist(),
            }, status=200)
        
        return JsonResponse({'message': 'No image file found in the request.'}, status=400)
    
    return JsonResponse({'message': 'Method not allowed. Please use POST.'}, status=405)


def home(arg):
    return JsonResponse({"message":"hello"}, status = 200)