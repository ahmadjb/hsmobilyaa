// Editing.js
import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from '../firebaseConfig';
import { collection, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CaretRightFilled, CaretDownFilled } from '@ant-design/icons';

const EditingDoors = () => {

    const [data, setData] = useState([]);
    const [txtKitchen, setTxKitchen] = useState("");
    const [imgKitchen, setImgKitchen] = useState("");
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(""); // Set the desired ID
    const [openMenu, setOpenMenu] = useState(false); // Set the desired ID


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

    const handleUpload = async (e, setImage) => {
        const imgs = ref(imgDB, `Imgs/${v4()}`);

        setLoading(true);

        try {
            const snapshot = await uploadBytes(imgs, e.target.files[0]);
            const url = await getDownloadURL(snapshot.ref);
            setImage(url);
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
                    const valRef = doc(collection(txtDB, 'bedrooms'), editingId);
                    const docSnap = await getDoc(valRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setTxKitchen(data.txtval);
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
        setLoading(true);

        try {
            if (id) {
                const valRef = collection(txtDB, 'bedrooms');
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

                alert(`Data with ID ${id} updated successfully in 'doors' collection`);
                setEditingId(""); // Reset the editing state
            }
        } catch (error) {
            console.error("Error updating data:", error);
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
                <div className='col-md-5 col-9' style={{ marginTop: 7 }}>
                    Yatak Odaları düzenleme sayfası
                </div>
                <div className='col-md-4 col-3'>
                    {openMenu ? (
                        <CaretDownFilled style={{ marginTop: 10 }} />
                    ) : (
                        <CaretRightFilled style={{ marginTop: 10 }} />
                    )}
                </div>
            </div>


            {openMenu ? (
                <div className='text-style-2 inner-container'>

                    <div className='text-style-3 red-text' style={{ color: '#dca534' }}>Gerekli verileri doldurun ve ardından ilgili öğe için düzenle butona tıklayın</div>
                    <div className='items-container'>
                        {loading ? (
                            <p className='loading-message'>Yükleniyor...</p>
                        ) : (
                            data.map((item, index) => (

                                <div className={`row mb-4${index !== data.length - 1 ? ' separator-line' : ''}`} key={item.id}>
                                    {/* For medium and larger screens, use Bootstrap's grid system */}
                                    <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '' }}>
                                        <img className="item-image" src={item.imgUrl} />
                                    </div>
                                    <div className="col-md-8 mb-4" style={{ backgroundColor: '' }}>
                                        <div className="text-style-3 item-text " style={{ backgroundColor: '' }}>
                                            {item.txtval}
                                        </div>
                                        <div className="delete-button-container row">
                                            <div className="col-md-4 mb-12 d-flex justify-content-center align-items-center">
                                                <input
                                                    className="input-field"
                                                    onChange={(e) => setTxKitchen(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-12 d-flex justify-content-center align-items-center">
                                                <input className="file-input" style={{ fontSize: 20 }} type='file' onChange={(e) => handleUpload(e, setImgKitchen)} />
                                            </div>
                                            <div className="col-md-4 mb-12 d-flex justify-content-center align-items-center">
                                                <button
                                                    className="action-button edit-button"
                                                    onClick={() => handleUpdate(item.id)}
                                                    disabled={loading}
                                                >Düzenle
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

        </div>
    );
};

export default EditingDoors;

