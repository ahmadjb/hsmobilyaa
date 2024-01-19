import React, { useState, useEffect } from 'react';
import { imgDB,txtDB } from './firebaseConfig'; 
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

const Addingdoors = () => {
    const [txtDoors, setTxtDoors] = useState("");
    const [imgDoors, setImgDoors] = useState("");
    const [loading, setLoading] = useState(false);

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


    return (
        <div className="center-container">
            <div className="form-section">
                <div className='text-style'>kapı</div>
                <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                    <input className="input-field" onChange={(e) => setTxtDoors(e.target.value)} /><br />
                    <input className="file-input" type='file' onChange={(e) => handleUpload(e, setImgDoors)} /><br />
                    <button className="action-button" onClick={handleAddDoors} disabled={loading}>Add</button>
                </div>
            </div>

        </div>

    );
};

export default Addingdoors; 
