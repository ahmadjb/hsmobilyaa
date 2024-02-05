// Editing.js
import React, { useState, useEffect, useRef } from 'react';
import { imgDB, txtDB } from '../firebaseConfig';
import { collection, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CaretRightFilled, CaretDownFilled } from '@ant-design/icons';

import { CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';


import { EyeOutlined } from '@ant-design/icons';
import ModalPhoto from '../../Home/ModalPhoto';// Make sure the path is correct


const EditingKitchen = () => {

    const [data, setData] = useState([]);
    const [txtKitchen, setTxtKitchen] = useState("");
    const [imgKitchen, setImgKitchen] = useState("");
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(""); // Set the desired ID
    const [openMenu, setOpenMenu] = useState(false); // Set the desired ID
    const fileInputRef = useRef(null);

    const [indexLoop, setIndexLoop] = useState(""); // Set the desired ID
    const [slash, setSlash] = useState(false); // Set the desired ID
    const [eyeClicked, setEyeClicked] = useState(false); // Set the desired ID

    const openImageModal = (imageUrl) => {
        setImgKitchen(imageUrl);
        setEyeClicked(true);
    };

    const closeImageModal = () => {
        setImgKitchen(null);
        setEyeClicked(false);
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'kitchen'); // Change 'doors' to your collection name
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

    const handleUpload = async (e, setImage) => {
        const imgs = ref(imgDB, `Imgs/${v4()}`);



        try {
            setSlash(true);
            const snapshot = await uploadBytes(imgs, e.target.files[0]);
            const url = await getDownloadURL(snapshot.ref);
            setImage(url);
            setSlash(false);
        } catch (error) {
            console.error("Error uploading image:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);

        }

    };
    useEffect(() => {

        // Fetch the existing data for editing when editingId changes
        const fetchDataForEditing = async () => {
            setLoading(true);
            try {
                if (editingId) {
                    const valRef = doc(collection(txtDB, 'kitchen'), editingId);
                    const docSnap = await getDoc(valRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setTxtKitchen(data.txtval);
                        setImgKitchen(data.imgUrl);
                    }
                }
            } catch (error) {
                console.error("Error fetching data for editing:", error);
                // Handle the error as needed
            } finally {
                setLoading(false);
            }
        };

        fetchDataForEditing();
    }, [editingId]);


    const handleUpdate = async (id) => {

        if (txtKitchen === "" && imgKitchen === "") {
            message.error('Please fill the text or the photo.');
        } else {

            try {
                setLoading(true);
                if (id) {
                    const valRef = collection(txtDB, 'kitchen');
                    const updateData = {};

                    if (txtKitchen !== "") {
                        updateData.txtval = txtKitchen;
                    }

                    if (imgKitchen !== "") {
                        updateData.imgUrl = imgKitchen;
                    }

                    await updateDoc(doc(valRef, id), updateData);

                    // Update local state after successful update
                    setData((prevData) => {
                        const updatedData = prevData.map(item => {
                            if (item.id === id) {
                                return {
                                    ...item,
                                    txtval: updateData.txtval || item.txtval,
                                    imgUrl: updateData.imgUrl || item.imgUrl,
                                };
                            }
                            return item;
                        });
                        return updatedData;
                    });

                    alert(`Data with ID ${id} updated successfully in 'kitchen' collection`);
                    setEditingId(""); // Reset the editing state
                }

            } catch (error) {
                console.error("Error updating data:", error);
                // Handle the error as needed
            } finally {
                setLoading(false);
                setIndexLoop("");
                setImgKitchen("");
                setTxtKitchen("");
                setImgKitchen("");
            }
        }
    };


    const openmenuToSowPage = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };



    return (


        <div className='text-admin-1' style={{ paddingTop: 30 }}>

            <div onClick={openmenuToSowPage} className='row admin-arrow'>
                <div className='col-md-7 col-11' style={{ marginTop: 7 }}>
                    Mutfaklar düzenleme sayfası
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

                    <div className='text-style-3 red-text' style={{ color: '#dca534' }}>Gerekli verileri doldurun ve ardından ilgili öğe için düzenle butona tıklayın,   ( -- {data.length}-- ) öğemiz var</div>
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
                                            <div className='centered' style={{ fontSize: 15 }}>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 mb-4" style={{ backgroundColor: '' }}>
                                        <div className='row'>
                                            <div className="col-md-10 col-10 text-style-3 item-text " style={{ backgroundColor: '' }}>
                                                {item.txtval}
                                            </div>
                                            <div className='col-md-2 col-2'>
                                                <div>
                                                    <span className="eye-icon-2" onClick={() => openImageModal(item.imgUrl)}>
                                                        <EyeOutlined />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="delete-button-container row">
                                            <div className="col-md-6 mb-12 d-flex justify-content-center align-items-center">
                                                <input
                                                    className="input-field"
                                                    onChange={(e) => setTxtKitchen(e.target.value)}
                                                    placeholder='Resmin yeni açıklamasını girin'
                                                />
                                            </div>
                                            <div className="col-md-6 mb-12 d-flex justify-content-center align-items-center">

                                                <div style={{ display: 'flex', paddingTop: 10 }}>
                                                    <input
                                                        className="file-input"
                                                        type="file"
                                                        onChange={(e) => handleUpload(e, setImgKitchen)}
                                                        style={{ display: 'none' }}
                                                        ref={fileInputRef}
                                                    />
                                                    <Button
                                                        onClick={() => {
                                                            setIndexLoop(index);
                                                            fileInputRef.current.click();
                                                        }}
                                                        className='small-btn-1'
                                                    >
                                                        <div className='small-text-1 centered'>Resim Ekle</div>
                                                    </Button>

                                                    {((index === indexLoop) && imgKitchen) ? (
                                                        <>
                                                            <div className='small-green-text centered'>Seçildi</div>
                                                            <CheckCircleFilled style={{ color: 'green', marginLeft: '3px' }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className='small-red-text centered'>Seçilmedi</div>
                                                            <CloseCircleFilled style={{ color: 'red', marginLeft: '3px' }} />
                                                        </>
                                                    )}
                                                </div>

                                            </div>
                                            <div className="col-md-12 mb-12 d-flex justify-content-center align-items-center">
                                                <button
                                                    className="action-button edit-button"
                                                    onClick={() => handleUpdate(item.id)}
                                                    disabled={index === indexLoop ? slash : false}
                                                >
                                                    {((index === indexLoop) && slash) ? (
                                                        <LoadingOutlined />
                                                    ) : (
                                                        "Düzenle"
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : ""}
            {imgKitchen && eyeClicked && (
                <ModalPhoto imageUrl={imgKitchen} onClose={closeImageModal} />
            )}
        </div>
    );
};

export default EditingKitchen;

