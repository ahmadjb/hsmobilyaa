import React, { useState, useEffect } from 'react';
import Adding from './adding';
import Deleting from './deleting';
import Editing from './editing';

const Adminn = () => {


    return (
        <div className="center-container">
        <Editing />
        <Deleting />
        <Adding />

        </div>

    );
};

export default Adminn; 
