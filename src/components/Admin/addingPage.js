import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from './firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import Addingdoor from './Adding/AddingDoors';
import Addingbedroom from './Adding/AddingBedrooms';
import AddingKitchen from './Adding/AddingKitchens';
import LastWorkOfMira from './Adding/AddingLastWorkOfMira';

const Adding = () => {



    return (
        <div className="text-style-3 delete-container">
            <LastWorkOfMira />
            <AddingKitchen />
            <Addingbedroom />
            <Addingdoor />
        </div>

    );
};

export default Adding; 
