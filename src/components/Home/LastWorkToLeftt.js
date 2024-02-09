import React, { useState } from 'react';

const PhotoSlider = (props) => {
    
    const [lastWork, setLastWork] = useState(props?.lastWorks);

const photos = lastWork.map((obj) => obj.imgUrl);
    return (
        <div className="photo-slider-container">
            <div className="photo-slider-to-left">
                {photos.map((photo, index) => (
                    <div key={index} className="photo-slider-item">
                        <img
                            src={photo}
                            alt={`photo-${index + 1}`}
                            style={{ }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;
