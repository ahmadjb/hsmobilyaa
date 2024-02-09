import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '../WhatsApp/whatsappInfo';
import ModalPhoto from './ModalPhoto'; // Make sure the path is correct
import { RightOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
const Workcard = (props) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  

    const [cloakroom, setCloakroom] = useState(props.cloakroom);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth);
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const photosPerPage = isMobile > 800 ? 5 : 1;
    
const maxIndex = Math.max(0, cloakroom?.length - photosPerPage);

const navigateToNextPhoto = () => {
    const newCurrentIndex = Math.min(currentPhotoIndex + 1, maxIndex);
    setCurrentPhotoIndex(newCurrentIndex);
};

const navigateToPrevPhoto = () => {
    const newCurrentIndex = Math.max(currentPhotoIndex - 1, 0);
    setCurrentPhotoIndex(newCurrentIndex);
};


    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const visiblePhotos = cloakroom.slice(currentPhotoIndex, currentPhotoIndex + (isMobile > 800 ? 5 : 1));

    return (
        <div style={{ paddingTop: 20 }}>
            <div className="photo-slider-container-new">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='text-style'>
                        Vistiyer
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
                            <div className='card-container-a'>
                                <div className='centered' style={{ height: '90%', backgroundColor: '', maxHeight: '90%' }}>
                                    {item.imgUrl && <img className='photo-new-a' src={item.imgUrl} alt={item.txtval} />}
                                </div>
                                <div className='card-footer-a'>
                                    <div className='row'>
                                        <div className='col-md-8 col-8'>
                                            <div className='photo-explanation-a'>{item.txtval}</div>
                                        </div>
                                        <div className='col-md-4 col-4'>
                                            <div className='centered'>
                                                <div className="overlay">
                                                    <span className="eye-icon" onClick={() => openImageModal(item.imgUrl)}>
                                                        <EyeOutlined />
                                                    </span>
                                                </div>
                                                <div style={{ zIndex: 9 }}>
                                                    <WhatsAppIcon phoneNumber="+905530173042" imageUrl={item.imgUrl} text={item.txtval} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
