
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {


    return (
        <div className='main-page-top-menu'>
            <div style={{ width: 800 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/doorPage" className='text-style-3' style={{ textDecoration: 'none' }}>Kapı</Link>
                    <div className='seperator-style'>|</div>
                    <Link to="/bedRoomsPage" className='text-style-3' style={{ textDecoration: 'none' }}>Yatak odası</Link>
                    <div className='seperator-style'>|</div>
                    <Link to="/cloakroom" className='text-style-3' style={{ textDecoration: 'none' }}>Vestiyer</Link>
                    <div className='seperator-style'>|</div>
                    <Link className='text-style-3' style={{ textDecoration: 'none' }}>Banyo</Link>
                    <div className='seperator-style'>|</div>
                    <Link to="/kitchenPage" className='text-style-3' style={{ textDecoration: 'none' }}>Mutfak</Link>
                </div>
            </div>
        </div>

    );
};

export default TopMenu;
