import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { EyeOutlined } from '@ant-design/icons';

import DeletingDoor from './Deleting/DeletingDoors';
import DeletingBedroom from './Deleting/DeletingBedrooms';
import DeletingKitchen from './Deleting/DeletingKitchens';
import DeletingLastWorkOfMira from './Deleting/DeletingLastWorkOfMira';

import ModalPhoto from '../Home/ModalPhoto'; // Make sure the path is correct
const Deleting = () => {



    return (
        <div className='text-style-3 delete-container'>
            <DeletingLastWorkOfMira />
            <DeletingKitchen />
            <DeletingBedroom />
            <DeletingDoor />

        </div>
    );
};

export default Deleting;