import React, { useState, useEffect, useRef } from 'react';
import { imgDB, txtDB } from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { CaretRightFilled, CaretDownFilled } from '@ant-design/icons';
import { Button, message } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';

const Addingbedroom = () => {

    const [txtYatakOdası, setTxtYatakOdası] = useState("");
    const [imgYatakOdası, setImgYatakOdası] = useState("");
    const [data, setData] = useState([]);
    const [openMenu, setOpenMenu] = useState(false); // Set the desired ID
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

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




    const handleAddYatakOdası = async () => {

        if (txtYatakOdası === "" || imgYatakOdası === "") {
            message.error('Please fill the text or the photo.');
        } else {


            try {
                setLoading(true);
                const valRef = collection(txtDB, 'bedrooms');
                await addDoc(valRef, { txtval: txtYatakOdası, imgUrl: imgYatakOdası });
                alert('Data added to "yatak odası" collection successfully');

            } catch (error) {
                console.error("Error adding data to 'yatak odası' collection:", error);
                // Handle the error as needed
            } finally {
                setLoading(false);
            }
            setImgYatakOdası("");
            setTxtYatakOdası("");


        }
    };


    const openmenuToSowPage = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };

    return (
        <div className='text-admin-1 ' style={{ paddingTop: 30 }}>

            <div onClick={openmenuToSowPage} className='row admin-arrow'>
                <div className='col-md-7 col-11' style={{ marginTop: 7 }}>
                    Yatak odasi & Gardrops ekleme sayfası
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
                    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                        <input placeholder='Resmin açıklamasını girin' className="input-field" onChange={(e) => setTxtYatakOdası(e.target.value)} /><br />
                        <div style={{ display: 'flex', paddingTop: 10 }}>
                            <input
                                className="file-input"
                                type="file"
                                onChange={(e) => handleUpload(e, setImgYatakOdası)}
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                            />
                            <Button onClick={() => fileInputRef.current.click()}>
                                <div>Resim Ekle</div>
                            </Button>
                            {imgYatakOdası && <div style={{ color: 'green', paddingLeft: '5%' }}>Seçildi</div>}
                            {imgYatakOdası && <CheckCircleFilled style={{ color: 'green', marginLeft: '8px' }} />}
                            {!imgYatakOdası && <div style={{ color: 'red', fontSize: 20, paddingLeft: '5%' }}>Seçilmedi</div>}
                            {!imgYatakOdası && <CloseCircleFilled style={{ color: 'red', marginLeft: '8px' }} />}
                        </div>


                        <button className="action-button" onClick={handleAddYatakOdası} disabled={loading}>
                            {(loading) ? (
                                <LoadingOutlined />
                            ) : (
                                "Ekle"
                            )}
                        </button>
                    </div>
                </div>
            ) : ""}
        </div>


    );
};

export default Addingbedroom; 
