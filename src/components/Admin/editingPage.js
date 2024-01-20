// Editing.js
import React, { useState, useEffect } from 'react';
import EditingDoors from './Editing/EditingDoors';
import EditingBedrooms from './Editing/EditingBedrooms';
import EditingKitchen from './Editing/EditingKitchen';


const Editing = () => {
    return (
        <div className='text-style-3 delete-container'>
        <EditingKitchen />
        <EditingBedrooms />
        <EditingDoors />
        </div>
    );
};

export default Editing;

