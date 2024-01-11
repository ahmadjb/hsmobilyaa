import React, { useState, useEffect } from 'react';
import ModalPhoto from './ModalPhoto'; // Make sure the path is correct
import { RightOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
import photo1 from '../../Data/md.png';
import photo2 from '../../Data/2nd.webp';
import photo3 from '../../Data/3rd.webp';
import photo4 from '../../Data/4th.webp';
const Workcard = (props) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const isMobile = window.innerWidth;

    const [bedrooms, setBedrooms] = useState(props.bedrooms);
    const [selectedImage, setSelectedImage] = useState(null);



    const maxIndex = bedrooms.length - 5;

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

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const visiblePhotos = bedrooms.slice(currentPhotoIndex, currentPhotoIndex + (isMobile > 800 ? 5 : 1));

    return (
        <div style={{ paddingTop: 50 }}>
            <div className="photo-slider-container-new">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='text-style'>
                        Yatak Odaları
                    </div>
                </div>
                <div className="photo-slider-new " >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <button className='cool-button' onClick={navigateToPrevPhoto} disabled={currentPhotoIndex === 0}>
                            <LeftOutlined />
                        </button>
                    </div>
                    {visiblePhotos.map((item, index) => (

                        <div className='photo-new-container' key={index}>
                            <div className='card-container'>
                                {item.imgUrl && <img className='photo-new ' src={item.imgUrl} alt={item.txtval} />}

                                <div className="overlay">

                                    <span className="eye-icon" onClick={() => openImageModal(item.imgUrl)}>
                                        <EyeOutlined />
                                    </span>
                                </div>

                                <div style={{ backgroundColor: '', width: '100%', paddingLeft: 20 }}>
                                    <div className='photo-explenation'> {item.txtval}</div>
                                </div>
                            </div>


                        </div>

                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <button className='cool-button' onClick={navigateToNextPhoto} disabled={currentPhotoIndex === maxIndex}>
                            <RightOutlined />
                        </button>
                    </div>
                </div>

            </div>
            {/* Use ModalPhoto component for displaying the selected image */}
            {selectedImage && (
                <ModalPhoto imageUrl={selectedImage} onClose={closeImageModal} />
            )}
        </div>
    );

};

export default Workcard;
