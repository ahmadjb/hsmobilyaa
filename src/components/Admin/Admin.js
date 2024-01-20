import React, { useState, useEffect } from 'react';
import AuthenticationNumber from './authenticationNumber';
import Adding from './addingPage';
import Deleting from './deletingPage';
import Editing from './editingPage';
import EditPhoto from '../../Data/editPhoto.png';

const Admin = () => {

    const [add, setAdding] = useState(false);
    const [del, setDel] = useState(false);
    const [edit, setEdit] = useState(false);
    const [openAdminPage, setOpenAdminPage] = useState(false);
    const [adminPhoto, setAdminPhoto] = useState(true);



    const handleAdding = () => {
        setAdding(true);
        setDel(false);
        setEdit(false);
        setAdminPhoto(false);
    };
    const handleDelete = () => {
        setAdding(false);
        setDel(true);
        setEdit(false);
        setAdminPhoto(false);
    };
    const handleEdit = () => {
        setAdding(false);
        setDel(false);
        setEdit(true);
        setAdminPhoto(false);
    };


    const handleChildData = (data) => {
        setOpenAdminPage(data);
    };
    console.log("openAdminPage");
    console.log(openAdminPage);

    return (
        <div className="center-container">
            <div style={{ paddingTop: 40 }}></div>

            {!openAdminPage ? (
                <div style={{ padding: "7%" }}>
                    <AuthenticationNumber sendDataToParent={handleChildData} />
                </div>
            ) : (
                <>
                    <div className='admin-text-1'>
                        Mira Decor'un yönetim sayfasına hoş geldiniz.
                    </div>
                    <div className='admin-text-2'>Lütfen işinizle ilgili butona tıklayın</div>

                    <div className='row mob-button' style={{ backgroundColor: '', width: '60%' }}>
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
                    {adminPhoto && (
                        <div> <img  style={{marginTop:'-15%'}} src={EditPhoto} alt="Image 1" className='admin-photo' /></div>
                    )}

                </>
            )}
        </div>
    );
};

export default Admin;