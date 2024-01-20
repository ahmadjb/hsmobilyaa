import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from '../firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { CaretRightFilled, CaretDownFilled } from '@ant-design/icons';

const Addingdoors = () => {
    const [txtDoors, setTxtDoors] = useState("");
    const [imgDoors, setImgDoors] = useState("");
    const [loading, setLoading] = useState(false);
    const [openMenu, setOpenMenu] = useState(false); // Set the desired ID
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




    const handleAddDoors = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'doors');
            await addDoc(valRef, { txtval: txtDoors, imgUrl: imgDoors });
            alert('Data added to "doors" collection successfully');
        } catch (error) {
            console.error("Error adding data to 'doors' collection:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);
        }
    }

    const openmenuToSowPage = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu);
    };
  
    return (
        <div className='text-admin-1 ' style={{ paddingTop: 30 }}>


            <div onClick={openmenuToSowPage} className='row admin-arrow'>
                <div className='col-md-5 col-9' style={{ marginTop: 7 }}>
                    Kapı ekleme
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
                    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                        <input className="input-field" onChange={(e) => setTxtDoors(e.target.value)} /><br />
                        <input className="file-input" type='file' onChange={(e) => handleUpload(e, setImgDoors)} /><br />
                        <button className="action-button" onClick={handleAddDoors} disabled={loading}>Ekle</button>
                    </div>
                </div>
            ) : ""}
        </div>


    );
};

export default Addingdoors;