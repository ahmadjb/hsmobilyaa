import React, { useState } from 'react';

import photo1 from '../../Data/newp1.jpeg';
import photo2 from '../../Data/newp2.jpg';
import photo3 from '../../Data/newp5.webp';
import photo4 from '../../Data/4th.webp';

const PhotoSlider = (props) => {
    const [lastWork, setLastWork] = useState(props?.lastWorks);
    
    const photos = lastWork.map((obj) => obj.imgUrl);

    return (
        <div className="photo-slider-container">
            <div className="photo-slider-to-right">
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
