import React, { useState } from 'react';
import photo1 from '../../Data/1st.webp';
import photo2 from '../../Data/2nd.webp';
import photo3 from '../../Data/3rd.webp';
import photo4 from '../../Data/4th.webp';
const PhotoSlider = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const photos = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo1,
        photo2,
        photo3,
        photo2,
        photo3,
        photo4,
        photo1,
        photo2,
        photo3,
    ];

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

    const visiblePhotos = photos.slice(currentPhotoIndex, currentPhotoIndex + 5);

    return (
        <div style={{paddingTop:100}}>
            <div className="photo-slider-container">
                
                    <div className="photo-slider" style={{ transform: `translateX(-${currentPhotoIndex}%)`}}>
                   
                        {visiblePhotos.map((photo, index) => (
                            <div>sss
                            <img
                                key={index}
                                src={photo}
                                alt={`Photo ${currentPhotoIndex + index + 1}`}
                            />
                            </div>
                        ))}
                    </div>
                
            </div>
            <h1>{`Photo ${currentPhotoIndex + 1} to ${currentPhotoIndex + 5}`}</h1>
            <div>
                <button onClick={navigateToPrevPhoto} disabled={currentPhotoIndex === 0}>
                    Previous
                </button>
                <button onClick={navigateToNextPhoto} disabled={currentPhotoIndex === maxIndex}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PhotoSlider;
