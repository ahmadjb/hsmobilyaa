// ModalPhoto.jsx
import React from 'react';

const ModalPhoto = ({ imageUrl, onClose }) => {
    return (
        <div className='backOf-model'>
        <div className="modal-photo">
            <div className="modal-photo-content">
                <img src={imageUrl} alt="Selected Image" />
                <button className='close-button' onClick={onClose}>Kapat</button>
            </div>
        </div>
        </div>
    );
};

export default ModalPhoto;
