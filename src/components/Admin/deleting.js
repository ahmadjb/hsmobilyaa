import React, { useState, useEffect } from 'react';
import { txtDB } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { EyeOutlined } from '@ant-design/icons';

import ModalPhoto from '../Home/ModalPhoto'; // Make sure the path is correct

const Deleting = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'doors'); // Change 'doors' to your collection name
            const dataDB = await getDocs(valRef);
            const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
            setData(alldata);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'doors'); // Change 'doors' to your collection name
            await deleteDoc(doc(valRef, id));
            alert(`Data with ID ${id} deleted successfully from 'doors' collection`);
            fetchData(); // Refresh the data after deletion
        } catch (error) {
            console.error("Error deleting data:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='text-style-3 delete-container'>
            Kapılar Silme Sayfası
            <div className='text-style-2 inner-container'>

                <div className='text-style-3 red-text' style={{ color: 'red' }}> İlgili öğeyi silmek için lütfen sil düğmesine tıklayınız:</div>
                <div className='items-container'>
                    {loading ? (
                        <p className='loading-message'>Loading...</p>
                    ) : (
                        data.map((item,index) => (
                           
                            <div className={`row mb-4${index !== data.length - 1 ? ' separator-line' : ''}`} key={item.id}>
                                {/* For medium and larger screens, use Bootstrap's grid system */}
                                <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
                                    <img className="item-image" src={item.imgUrl} />
                                </div>
                                <div className="col-md-8 mb-4">
                                    <div className="text-style-3 item-text " style={{backgroundColor:''}}>{item.txtval}</div>
                                    <div className="delete-button-container ">
                                        <div>
                                            <span className="eye-icon-2" onClick={() => openImageModal(item.imgUrl)}>
                                                <EyeOutlined />
                                            </span>
                                        </div>
                                        <button className="delete-button" onClick={() => handleDelete(item.id)} disabled={loading}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    )}
                </div>
            </div>
            {selectedImage && (
                <ModalPhoto imageUrl={selectedImage} onClose={closeImageModal} />
            )}
        </div>
    );
};

export default Deleting;