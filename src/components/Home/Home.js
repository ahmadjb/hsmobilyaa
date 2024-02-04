
import { imgDB, txtDB } from '../Admin/firebaseConfig';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../WhatsApp/whatsApp';
import ScrollButtons from './ScrollButtons';
import TopMenu from '../Top menu/TopMenu';
import SimplePhoto from '../../Data/simplePhoto.png';
import SosyalMedia from './SosyalMedia';
import WiatingHand from '../../Data/wiatingHand.gif';



import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { useSelector } from "react-redux";
import { autoTypeData } from "../../Data/PersonalData";
import Workcard from "./lastWorks";
import Bedrooms from "./Bedroom";
import Kitchen from './Kitchen';
import Doors from "./Doors"
import photo1 from '../../Data/MainPh1.png';
import photo2 from '../../Data/MiraMutfagi.png';
import photo3 from '../../Data/MainPh2.png';
import photo5 from '../../Data/mutfak1.png';
import photo6 from '../../Data/mutfak2.png';

import photoo1 from '../../Data/new mutfak.webp';
import photoo2 from '../../Data/yatakodası.jpg';
import photoo3 from '../../Data/vistiyer.jpg';
import photoo4 from '../../Data/kultuk.jpg';
import photoo5 from '../../Data/la5.jpg';
import LastWorksPhoto from '../../Data/lastwork.svg';
import LastWorkToLeft from "./LastWorkToLeftt";
import LastWorkToRight from "./LastWorkToRight";
import { Height, Padding, PaddingTwoTone } from "@mui/icons-material";

function Home(props) {
  const nonThemeColor = useSelector(state => state.nonThemeColor);
  const uiColor = useSelector(state => state.uiColor);
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [mainPhoto, setMainPhoto] = useState(isMobile < 800 ? '18.5vh' : '64vh');
  const [bedroomsUrl, setBedroomsUrl] = useState([]);
  const [bedroomsNames, setBedroomsNames] = useState([]);
  const [doorsUrl, setDoorsUrl] = useState([]);
  const [doorsNames, setDoorsNames] = useState([]);

  const [dataLoaded1, setDataLoaded1] = useState(false);
  const [dataLoaded2, setDataLoaded2] = useState(false);
  const [dataLoaded3, setDataLoaded3] = useState(false);
  const [dataLoaded4, setDataLoaded4] = useState(false);


  const [doors, setDoors] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [kitchens, setKitchens] = useState([]);
  const [lastWorks, setLastWorks] = useState([]);



  const getDataLastWorkOfMira = async () => {
    const valRef = collection(txtDB, 'lastWorks');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setLastWorks(alldata);
    setDataLoaded1(true);


  }
  const getDataDoors = async () => {
    const valRef = collection(txtDB, 'doors');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setDoors(alldata);
    setDataLoaded2(true);


  }

  const getDataBedRooms = async () => {
    const valRef = collection(txtDB, 'bedrooms');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setBedrooms(alldata);
    setDataLoaded3(true);


  }

  const getDataKitchen = async () => {
    const valRef = collection(txtDB, 'kitchen');
    const dataDB = await getDocs(valRef);
    const alldata = dataDB.docs.map(val => ({ ...val.data(), id: val.id }));
    setKitchens(alldata);
    setDataLoaded4(true);


  }

  useEffect(() => {
    getDataKitchen();
    getDataBedRooms();
    getDataDoors();
    getDataLastWorkOfMira();


  }, []);








  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setIsMobile(newWidth);
      setMainPhoto(newWidth < 800 ? '19vh' : '55vh');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  function handleTyper() {
    let textItems = autoTypeData;
    var autoTyper = document.getElementById('typer');
    new Typewriter(autoTyper, {
      strings: textItems,
      autoStart: true,
      pauseFor: 1000,
      loop: true,
    });
  }

  useEffect(() => {
    handleTyper();
  }, []);

  const PhotoCarousel = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const photos = [photo1, photo2, photo3,photo5,photo6];

    useEffect(() => {
      // Set up an interval to automatically navigate every 3 seconds
      const intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, [photos]);

    const navigateToNextPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const navigateToPrevPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const photoSliderStyle = {
      transform: `translateX(-${currentPhotoIndex * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
      display: 'flex',
      width: `${photos.length * 100}%`,
      backgroundColor: 'gray',
    };

    return (
      <div className="photo-carousel-container">
        <div style={{ paddingTop: 25 }}></div>
        <TopMenu />
        <div style={{ paddingTop: 20 }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="left-arrow">
            <LeftArrow onClick={navigateToPrevPhoto} />
          </div>
          <div style={{ borderColor: 'white', borderRadius: 20, borderStyle: 'solid', borderWidth: 3, overflow: 'hidden', width: '92%', height: mainPhoto }}>
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
              <div className="" style={photoSliderStyle}>
                {photos.map((photo, index) => (
                  <img key={index} className="photo" src={photo} alt={`photo-${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="right-arrow">
            <RightArrow onClick={navigateToNextPhoto} />
          </div>
        </div>
        <div className="photo-container">
          <div>
            <img src={photoo1} alt="Image 1" className="constant-photo" />
            <div className="photo-text text-style-container" >
              <div className="text-style-2a">Mutfak</div>
            </div>
          </div>
          <div>
            <img src={photoo2} alt="Image 2" className="constant-photo" />
            <div className="photo-text text-style-container">
              <div className="text-style-2a">Yatak odaları</div>
            </div>
          </div>
          <div>
            <img src={photoo3} alt="Image 3" className="constant-photo" />
            <div className="photo-text text-style-container">
              <div className="text-style-2a">Vestiyer</div>
            </div>
          </div>
          <div >
            <img src={photoo4} alt="Image 4" className="constant-photo" />
            <div className="photo-text text-style-container" >
              <div className="text-style-2a">Koltuk</div>
            </div>
          </div>
          <div >
            <img src={photoo5} alt="Image 5" className="constant-photo" />
            <div className="photo-text text-style-container" >
              <div className="text-style-2a">Kapı</div>
            </div>
          </div>
        </div>
        <div className="container-last-works"></div>
        <div className="last-works" >
          <div>
            <img className="mira-last-work" src={LastWorksPhoto} />
          </div>
        </div>

        <LastWorkToLeft lastWorks={lastWorks} />
        <Kitchen kitchen={kitchens} />
        <Bedrooms bedrooms={bedrooms} />
        <Doors doors={doors} />

        <div className='centered' style={{ paddingTop: 50, paddingBottom: 50 }}>
          <img src={SimplePhoto} style={{ width: '90%' }} />
        </div>

        <SosyalMedia />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 60, paddingTop: 30 }}> Geliştirilmekte</div>

      </div>
    );
  };

  return (
    <main>
      {dataLoaded1 && dataLoaded2 && dataLoaded3 && dataLoaded4 ? (
        <div className="">
          <PhotoCarousel />
          <ScrollButtons />
        </div>
      ) : (
        <div className='centered' style={{height:"50vh"}}>
          <img src={WiatingHand} alt="Waiting Hand" />
        </div>
      )}
    </main>

  );

}

export default Home;
