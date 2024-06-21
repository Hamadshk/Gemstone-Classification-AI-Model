import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './imageUploader.css'
const ImageUploader = (setGems) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            // Handle file upload
            const file = acceptedFiles[0];
            const formData = new FormData();
            formData.append('image', file);

            // Create an object URL for the uploaded image
          

            // Send the image to the backend
            fetch('http://localhost:8000/upload-single/', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    const imageURL = URL.createObjectURL(file);
                   setGems.setGems(gems => [...gems, { url: imageURL, prediction: data }]);

                    // Handle the response from the server
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                });
        },
    });

    return (
      
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag and drop an image here, or click to select an image.</p>

            {/* Display the uploaded image if available */}
        </div>



    );
}

export default ImageUploader;
