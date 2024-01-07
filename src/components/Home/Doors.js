import React, { useState, useEffect } from 'react';
import ModalPhoto from './ModalPhoto'; // Make sure the path is correct
import {EyeOutlined } from '@ant-design/icons'; 
import {RightOutlined} from '@ant-design/icons';
import {LeftOutlined} from '@ant-design/icons'; 

const Workcard = (props) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const isMobile = window.innerWidth;

    const [doors, setDoors] = useState(props.doorsUrl);
    const [doorsNames, setDoorsNames] = useState([props.doorsNames]);
    const [selectedImage, setSelectedImage] = useState(null);

    const photos = doors;
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

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };
    
    return (
        <div style={{ paddingTop: 50 }}>
        <div className="photo-slider-container-new">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='text-style'>
                Kapılar
            </div>
            </div>
            <div className="photo-slider-new " >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginLeft:10}}>
                    <button className='cool-button' onClick={navigateToPrevPhoto} disabled={currentPhotoIndex === 0}>
                        <LeftOutlined />
                    </button>
                </div>
                {visiblePhotos.map((photo, index) => (
                    <div className='photo-new-container' key={index}>
                        <div>
                            <img
                                className='photo-new '
                                src={photo}
                                alt={`Photo ${currentPhotoIndex + index + 1}`}
                            />
                            <div className="overlay">
                                <span className="eye-icon" onClick={() => openImageModal(photo)}>
                                <EyeOutlined />
                                </span>
                            </div>
                            <div className='photo-explenation'> {doorsNames[0][currentPhotoIndex + index + 1]}</div>
                        </div>
                    </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginRight:10}}>
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
