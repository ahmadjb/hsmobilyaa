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

    return (
        <div className="photo-slider-container">
            <div className="photo-slider-to-left">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-slider-item">
                        <img
                            src={photo}
                            alt={`photo-${index + 1}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;
