
import { imgDB, txtDB } from '../Admin/firebaseConfig';
import ModalPhoto from '../Home/ModalPhoto'; // Make sure the path is correct
import React, { useState, useEffect } from 'react';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';

import WhatsAppIcon from '../WhatsApp/whatsappInfo';

const Kitchen = () => {


  const [kitchen, setKitchen] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getDataKitchen = async () => {
    const valRef = collection(txtDB, 'kitchen');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setKitchen(alldata);

  }
  useEffect(() => {
    getDataKitchen();
  }, []);
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const renderImages = () => {
    return kitchen.map((kitchen, index) => (
      <div key={index} className="col-lg-3" style={{paddingBottom:40}}>
        {index % 4 === 0 && <div className="row">{/* Start a new row after every 4th item */}</div>}
        
        <div className='photo-new-container'>
          <div className='card-container-a'>
            <div className='centered' style={{ height: '90%', backgroundColor: '', maxHeight: '90%' }}>
              {kitchen.imgUrl && <img className='photo-new-a' src={kitchen.imgUrl} alt={kitchen.txtval} />}
            </div>
            <div className='card-footer-a'>
              <div className='row'>
                <div className='col-md-8 col-8'>
                  <div className='photo-explanation-a'>{kitchen.txtval}</div>
                </div>
                <div className='col-md-4 col-4'>
                  <div className='centered'>
                    <div className="overlay">
                      <span className="eye-icon" onClick={() => openImageModal(kitchen.imgUrl)}>
                        <EyeOutlined />
                      </span>
                    </div>
                    <div style={{ zIndex: 9 }}>
                      <WhatsAppIcon phoneNumber="+905530173042" imageUrl={kitchen.imgUrl} text={kitchen.txtval} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
        selectedImage && (
            <ModalPhoto imageUrl={selectedImage} onClose={closeImageModal} />
        )
    }
        
        {index % 4 === 3 && <div className="w-100"></div>} {/* Add a new row after every 4th item */}
      </div>
    ));
  };
  



  return (
    <div style={{ paddingTop: 10 }}>
      <div style={{ paddingTop: 25 }}></div>
      <div className='main-page-top-menu'>
        <div style={{ width: 800 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className='text-style-3' style={{ textDecoration: '' }}>Kapı </div>
            <div className='text-style-3'>Yatak odaları</div>
            <div className='text-style-3'>Vestiyer</div>
            <div className='text-style-3'>Koltuk</div>
            <Link className='text-style-3' style={{ textDecoration: '' }}>Mutfak </Link>
          </div>
        </div>
      </div>
      <div className='main-contianer'>
        <div style={{ paddingBottom: 60 }}></div>
        <div className='text-style'>Mutfaklar sayfası</div>
        <div style={{ paddingBottom: 30 }}></div>

        <div style={{ fontSize: 20 }} >{kitchen.length} sonuç gösteriliyor. En yeniye göre sıralandı</div>
        <div style={{ paddingTop: 20 }}>
          <div className="row" >
            {renderImages()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;