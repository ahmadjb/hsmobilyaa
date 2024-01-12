
import { imgDB, txtDB } from '../Admin/firebaseConfig';
import React, { useState, useEffect } from 'react';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Doors = () => {


  const [doors, setDoors] = useState([]);

  const getDataDoors = async () => {
    const valRef = collection(txtDB, 'doors');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setDoors(alldata);

  }
  useEffect(() => {
    getDataDoors();
  }, []);

  const renderImages = () => {
    return doors.map((door, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-12 mb-3">
        {/* Adjust the classes as per your styling needs */}
        <img src={door.imgUrl} style={{maxWidth:'100%'}} alt={`Door ${index}`} className="page-of-images" />
      </div>
    ));
  };



  return (
    <div style={{paddingTop:10}}>
      <div className='main-page-top-menu'>
        <div style={{ width: 800 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/home" className='text-style-3' style={{ textDecoration: 'none' }}>Mutfak</Link>
            <div className='text-style-3'>Yatak odaları</div>
            <div className='text-style-3'>Vestiyer</div>
            <div className='text-style-3'>Koltuk</div>
            <div className='text-style-3'>Kapı</div>
          </div>
        </div>
      </div>
      <div className='main-contianer'>
      <div style={{paddingBottom:60}}></div>
      <div className='text-style'>Mutfaklar</div>
      <div style={{paddingBottom:30}}></div>
      
      <div style={{fontSize:20}} >{doors.length} sonuç gösteriliyor. En yeniye göre sıralandı</div>
      <div style={{ paddingTop: 20}}>
        <div className="row">
          {renderImages()}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Doors;
