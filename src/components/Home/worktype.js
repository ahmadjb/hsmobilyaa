import React, { useState, useEffect } from 'react';
import photo1 from '../../Data/md.png';
import photo2 from '../../Data/2nd.webp';
import photo3 from '../../Data/3rd.webp';
import photo4 from '../../Data/4th.webp';
const Workcard = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const isMobile = window.innerWidth;

    const [googleDrivePhotos, setGoogleDrivePhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual Google API key
                const apiKey = 'AIzaSyDFtPXqUjoqLNfudVHyGL-IDpATIqSh4Jw';
                const folderId = '1jiGiH8rrbV4btrq_IxYCT432AXB9GOzY'; // Replace with the ID of your Google Drive folder

                // Fetch the list of files in the folder
                const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`);
                const data = await response.json();

                // Extract download URLs for each image file
                const photos = data.files
                    .filter((file) => file.mimeType.startsWith('image/'))
                    .map((file) => `https://drive.google.com/uc?id=${file.id}`);

                setGoogleDrivePhotos(photos);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchPhotos();
    }, []);



    console.log(isMobile);
    console.log(googleDrivePhotos);
    const photos = googleDrivePhotos;

    const maxIndex = photos.length - 5;

    const navigateToNextPhoto = () => {
        if (currentPhotoIndex < maxIndex) {
            setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
        }
    };

    const navigateToPrevPhoto = () => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
        }
    };

    const visiblePhotos = photos.slice(currentPhotoIndex, currentPhotoIndex + (isMobile > 800 ? 5 : 1));

    return (
        <div style={{ padding: 30, paddingTop: 100 }}>
            <div className="photo-slider-container-new">
                <div className='text-style'>

                    Yatak Odaları</div>

                <div className="photo-slider-new " style={{ transform: `translateX(-${currentPhotoIndex}%)` }}>


                    {visiblePhotos.map((photo, index) => (
                        <div className='photo-new-container'>
                            <div>
                                <img
                                    className='photo-new '
                                    key={index}
                                    src={photo}
                                    alt={`Photo ${currentPhotoIndex + index + 1}`}
                                />
                                ssss
                            </div>
                        </div>


                    ))}


                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                    <button className='cool-button' onClick={navigateToPrevPhoto} disabled={currentPhotoIndex === 0}>
                        Previous
                    </button>
                    <button className='cool-button' onClick={navigateToNextPhoto} disabled={currentPhotoIndex === maxIndex}>
                        Next
                    </button>
                </div>

            </div>
            <h1>{`Photo ${currentPhotoIndex + 1} to ${currentPhotoIndex + 5}`}</h1>

        </div>
    );
};

export default Workcard;
