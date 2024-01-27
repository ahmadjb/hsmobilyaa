


import { imgDB, txtDB } from '../Admin/firebaseConfig';
import ModalPhoto from '../Home/ModalPhoto'; // Make sure the path is correct
import React, { useState, useEffect } from 'react';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import  LastWorkPhoto  from '../../Data/lastworktext.svg';
import WhatsAppIcon from '../WhatsApp/whatsappInfo';

const LastWorkOfMira = () => {


    const [lastWorksOfMira, setLastWorksOfMira] = useState([]);
    const [lastWorkImage, setlastWorkImage] = useState(null);

    const getDataLastWorkOfMira = async () => {
        const valRef = collection(txtDB, 'lastWorks');
        const dataDB = await getDocs(valRef);
        const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
        setLastWorksOfMira(alldata);

    }
    useEffect(() => {
        getDataLastWorkOfMira();
    }, []);
    const openImageModal = (imageUrl) => {
        setlastWorkImage(imageUrl);
    };

    const closeImageModal = () => {
        setlastWorkImage(null);
    };
    const renderImages = () => {
        return lastWorksOfMira.map((kitchen, index) => (
            <div key={index} className="col-lg-3" style={{ paddingBottom: 40 }}>
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
                    lastWorkImage && (
                        <ModalPhoto imageUrl={lastWorkImage} onClose={closeImageModal} />
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
                        <div className='text-style-3' style={{ textDecoration: '' }}>Mutfak </div>
                    </div>
                </div>
            </div>
            <div className='main-contianer'>
                <div style={{ paddingBottom: 60 }}></div>
               <div   className='centered' > 
               <img className='last-works-text2' src={LastWorkPhoto} />
               </div>
                <div style={{ paddingBottom: 30 }}></div>

                <div className='admin-text-2'>Galereyi dolaşmaktan çekinmeyin ve Mira'nın sanatının arkasındaki zanaati keşfedin. Sizi etkileyen bir şey bulursanız, özelleştirme hakkında bilgi almak veya sipariş vermek için çekinmeyin.</div>

                <div style={{ fontSize: 20,paddingTop:30 }} >{lastWorksOfMira.length} sonuç gösteriliyor. En yeniye göre sıralandı</div>
                <div style={{ paddingTop: 20 }}>
                    <div className="row" >
                        {renderImages()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastWorkOfMira;









{/*import React, { Fragment } from "react";

import EducationImg from "../asset/kindpng_2158189.png";
import EducationData from "../../Data/EducationData";
import Certifications from "../Certifications/Certifications";
import Degree from "./Degree";
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const languagesDone=EducationData.codingStatus;
    return (
        <Fragment>
            <div className={classes.educationHeader}>
                <div className={classes.eduImg}>
                    <img src={EducationImg} alt="" srcset="" />
                </div>
                <div className={classes.educationCard}>
                    <h1 style={{color:uiColor}}>Education</h1>
                    <h2 style={{ color: nonThemeColor }}>Coding Statistics and Certifications</h2>
                    <div className={classes.codingInfo}>
                        {
                            languagesDone.map((item,index) =>
                                <div key={index} className={classes.progressBar}>
                                    <label htmlFor={item.name}>{item.name}</label>
                                    <progress id={item.name} value={item.percentDone} max="100"></progress>
                                    <h5>{item.percentDone}%</h5>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Degree />
            <Certifications />
            <div>2nd page</div>
        </Fragment>
    )
}
export default Education;*/}