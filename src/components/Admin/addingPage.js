import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from './firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import Addingdoor from './Adding/AddingDoors';
import Addingbedroom from './Adding/AddingBedrooms';
import AddingKitchen from './Adding/AddingKitchens';

const Adding = () => {

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






    return (
        <div className="text-style-3 delete-container">
            
            <AddingKitchen />
            <Addingbedroom />
            <Addingdoor />
        </div>

    );
};

export default Adding; 
