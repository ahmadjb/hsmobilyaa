import React, { useState, useEffect } from 'react';
import { txtDB } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { EyeOutlined } from '@ant-design/icons';
import { CaretRightFilled, CaretDownFilled } from '@ant-design/icons';

import ModalPhoto from '../../Home/ModalPhoto';// Make sure the path is correct

const DeletingKitchen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [openMenu, setOpenMenu] = useState(false); // Set the desired ID

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'bedrooms'); // Change 'doors' to your collection name
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
            const valRef = collection(txtDB, 'bedrooms'); // Change 'doors' to your collection name
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
    const openmenuToSowPage = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };


    return (
        <div className='text-admin-1 ' style={{ paddingTop: 30 }}>

            <div onClick={openmenuToSowPage} className='row admin-arrow'>
                <div className='col-md-7 col-11' style={{ marginTop: 7 }}>
                    Yatak Odaları & Gardrops Silme Sayfası
                </div>
                <div className='col-md-4 col-1'>
                    {openMenu ? (
                        <CaretDownFilled style={{ marginTop: 10 }} />
                    ) : (
                        <CaretRightFilled style={{ marginTop: 10 }} />
                    )}
                </div>
            </div>
            {openMenu ? (
                <div className='text-style-2 inner-container'>

                    <div className='text-style-3 red-text' style={{ color: 'red' }}> İlgili öğeyi silmek için lütfen sil düğmesine tıklayınız,   ( -- {data.length}-- ) öğemiz var </div>
                    <div className='items-container'>
                        {loading ? (
                            <p className='loading-message'>Yükleniyor...</p>
                        ) : (
                            data.map((item, index) => (

                                <div className={`row mb-4${index !== data.length - 1 ? ' separator-line' : ''}`} key={item.id}>
                                    {/* For medium and larger screens, use Bootstrap's grid system */}
                                    <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
                                        <div>
                                            <div>
                                                <img className="item-image" src={item.imgUrl} />
                                            </div>
                                            <div className='centered' style={{fontSize:15}}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 mb-4">
                                        <div className="text-style-3 item-text " style={{ backgroundColor: '' }}>{item.txtval}</div>
                                        <div className="delete-button-container ">
                                            <div>
                                                <span className="eye-icon-2" onClick={() => openImageModal(item.imgUrl)}>
                                                    <EyeOutlined />
                                                </span>
                                            </div>
                                            <button className="delete-button" onClick={() => handleDelete(item.id)} disabled={loading}>
                                                Sil
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : ""}
            {selectedImage && (
                <ModalPhoto imageUrl={selectedImage} onClose={closeImageModal} />
            )}

        </div>
    );
};

export default DeletingKitchen;