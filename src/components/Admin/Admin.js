import React, { useState, useEffect } from 'react';
import Adding from './adding';
import Deleting from './deleting';
import Editing from './editing';

const Admin = () => {

    const [add, setAdding] = useState(false);
    const [del, setDel] = useState(false);
    const [edit, setEdit] = useState(false);


    const handleAdding = () => {
       setAdding(true);
       setDel(false);
       setEdit(false);
    };
    const handleDelete = () => {
        setAdding(false);
        setDel(true);
        setEdit(false);
     };
     const handleEdit = () => {
        setAdding(false);
        setDel(false);
        setEdit(true);
     };
     
    


    return (
        <div className="center-container">
            <div style={{ paddingTop: 40 }}></div>
            <div className='admin-text-1'>
                Mira Decor'un yönetim sayfasına hoş geldiniz.
            </div>
            <div className='admin-text-2'>Lütfen işinizle ilgili butona tıklayın</div>

            <div className='row mob-button' style={{backgroundColor:'',width:'60%'}}>
                <div className='col-md-4 md-12'>
                    <button className='action-button adding-button' onClick={() => handleAdding()} >Öğe Ekleme</button>
                </div>

                <div className='col-md-4 md-12'>
                    <button className='action-button deleting-button' onClick={() => handleDelete()}>Öğe Silme</button>
                </div>

                <div className='col-md-4 md-12'>
                    <button className='action-button editing-button' onClick={() => handleEdit()}>Öğe Düzeltme</button>
                </div>
            </div>
            <div style={{ paddingTop: 40 }}></div>
           
            {add && (
                <Adding />
            )}
            {del && (
                <Deleting />
            )}
            {edit && (
                <Editing />
            )}
            
            
        </div>

    );
};

export default Admin;