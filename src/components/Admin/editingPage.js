// Editing.js
import React, { useState, useEffect } from 'react';
import EditingDoors from './Editing/EditingDoors';
import EditingBedrooms from './Editing/EditingBedrooms';
import EditingKitchen from './Editing/EditingKitchen';
import EditingLastWorkOfMira from './Editing/EditingLastWorkOfMira';


const Editing = () => {
    return (
        <div className='text-style-3 delete-container'>
        <EditingLastWorkOfMira />
        <EditingKitchen />
        <EditingBedrooms />
        <EditingDoors />
        </div>
    );
};

export default Editing;

