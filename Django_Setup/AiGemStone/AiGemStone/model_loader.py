import tensorflow as tf

# Path to your trained model file
model_path = r'/home/hamad/Desktop/Django_Setup/AiGemStone/AiGemStone/ai_project.h5'

# Load the model
model = tf.keras.models.load_model(model_path)
