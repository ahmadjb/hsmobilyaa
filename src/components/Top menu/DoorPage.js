
import { imgDB, txtDB } from '../Admin/firebaseConfig';
import ModalPhoto from '../Home/ModalPhoto'; // Make sure the path is correct
import React, { useState, useEffect } from 'react';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';

import WhatsAppIcon from '../WhatsApp/whatsappInfo';

const Doors = () => {


  const [doors, setDoors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getDataDoors = async () => {
    const valRef = collection(txtDB, 'doors');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setDoors(alldata);

  }
  useEffect(() => {
    getDataDoors();
  }, []);
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const renderImages = () => {
    return doors.map((door, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-12 mb-3 centered" style={{ backgroundColor: '', padding: 5 }}>
        {/* Adjust the classes as per your styling needs */}
        <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 35, backgroundColor: 'rgba(48, 34, 124, 0.144)', width: '97%', height: '100%', borderRadius: 10 }}>
          <div className='row' style={{ backgroundColor: '', width: '100%' }}>
            <div className='col-6' style={{ display: 'flex', justifyContent: 'flex-start' }}>

              <div>
                <div className="" style={{ marginBottom: '' }}>
                  <span className="eye-icon" onClick={() => openImageModal(door.imgUrl)}>
                    <EyeOutlined />
                  </span>
                </div>
              </div>
            </div>
            <div className='col-6' style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className='eye-icon' style={{ paddingLeft: 30 }}>
                <WhatsAppIcon phoneNumber="+905530173042" imageUrl={door.imgUrl} text={door.txtval} />
              </div>
            </div>
          </div>
          <div className='centered' style={{ height: '100%', backgroundColor: '' }}>
            <img src={door.imgUrl} style={{ maxWidth: '100%', backgroundColor: '', borderRadius: 10 }} alt={`Door ${index}`} className="page-of-images" />
          </div>
          <div className='text-style-2' style={{ backgroundColor: '', width: '90%' }}>{door.txtval}</div>
        </div>
        {
          selectedImage && (
            <ModalPhoto imageUrl={selectedImage} onClose={closeImageModal} />
          )
        }
      </div>

    ));
  };



  return (
    <div style={{ paddingTop: 10 }}>
      <div style={{ paddingTop: 25 }}></div>
      <div className='main-page-top-menu'>
        <div style={{ width: 800 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link className='text-style-3' style={{ textDecoration: '' }}>Kapı </Link>
            <div className='text-style-3'>Yatak odaları</div>
            <div className='text-style-3'>Vestiyer</div>
            <div className='text-style-3'>Koltuk</div>
            <div className='text-style-3'>Mutfak</div>
          </div>
        </div>
      </div>
      <div className='main-contianer'>
        <div style={{ paddingBottom: 60 }}></div>
        <div className='text-style'>Kapılar sayfası</div>
        <div style={{ paddingBottom: 30 }}></div>

        <div style={{ fontSize: 20 }} >{doors.length} sonuç gösteriliyor. En yeniye göre sıralandı</div>
        <div style={{ paddingTop: 20 }}>
          <div className="row" >
            {renderImages()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doors;
