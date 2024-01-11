import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from './firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection } from 'firebase/firestore';

const Admin = () => {
    const [txtDoors, setTxtDoors] = useState("");
    const [imgDoors, setImgDoors] = useState("");
    const [txtYatakOdası, setTxtYatakOdası] = useState("");
    const [imgYatakOdası, setImgYatakOdası] = useState("");
    const [data, setData] = useState([]);
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




    const handleClick = async () => {
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

    const handleAddYatakOdası = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'bedrooms');
            await addDoc(valRef, { txtval: txtYatakOdası, imgUrl: imgYatakOdası });
            alert('Data added to "yatak odası" collection successfully');
        } catch (error) {
            console.error("Error adding data to 'yatak odası' collection:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);
        }
    };

    const getData = async () => {
        setLoading(true);

        try {
            const valRef = collection(txtDB, 'doors');
            const dataDB = await getDocs(valRef);
            const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
            setData(alldata);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error as needed
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    
        return (
        <div className="center-container">
            <div className="form-section">
                <div className='text-style'>kapı</div>
                <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
 
                <input className="input-field" onChange={(e) => setTxtDoors(e.target.value)} /><br />
                <input className="file-input" type='file' onChange={(e) => handleUpload(e, setImgDoors)} /><br />
                <button className="action-button" onClick={handleClick} disabled={loading}>Add</button>
                </div>
            </div>

            <div className="form-section">
                <div className='text-style'>yatak odaları</div>
                <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                <input className="input-field" onChange={(e) => setTxtYatakOdası(e.target.value)} /><br />
                <input className="file-input" type='file' onChange={(e) => handleUpload(e, setImgYatakOdası)} /><br />
                <button className="action-button" onClick={handleAddYatakOdası} disabled={loading}>Add"</button>
                </div>
            </div>
        </div>

      );
}; 
    
export default Admin; 
