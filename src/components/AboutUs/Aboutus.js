import React, { useState, useEffect } from "react";
import styles from "./project.module.css";
import MainPhoto from "../../Data/aboutUs.png";

import photo1 from '../../Data/new mutfak.webp';
import photo2 from '../../Data/yatakodası.jpg';
import photo3 from '../../Data/vistiyer.jpg';
import photo4 from '../../Data/kultuk.jpg';
import photo5 from '../../Data/la5.jpg';

const AboutUs = (props) => {
    const [text, setText] = useState("");
    const [mira, setMira] = useState("");
    const photos = [photo1, photo2, photo3, photo4, photo5];
    const [currentImage, setCurrentImage] = useState(-1);



    const [isMobile, setIsMobile] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth);
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const [mainPhoto, setMainPhoto] = useState(isMobile < 800 ? '18.5vh' : '64vh');
    const percentage = isMobile < 800 ? 5000 : 11000; // represents 50%
    const separators = percentage / 100;

    useEffect(() => {
        const textToDisplay = "Mobilya ve dekorasyonda 20 yılı aşkın deneyim."; // Your text here
        const Mira = "MIRA DEKOR"; // Your text here

        const delay = 100; // Delay between each letter in milliseconds

        // Function to display text letter by letter
        const displayMira = async () => {
            for (let i = 0; i < Mira.length; i++) {
                setMira((prevText) => prevText + Mira[i]);
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
            displayText();
            // After displaying text, start showing photos
        };


        const displayText = async () => {
            for (let i = 0; i < textToDisplay.length; i++) {
                setText((prevText) => prevText + textToDisplay[i]);
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
            // After displaying text, start showing photos

            displayPhotos();
        };

        // Function to display photos one by one with a delay
        const displayPhotos = async () => {
            for (let i = 0; i < photos.length; i++) {
                setCurrentImage(i);
                await new Promise((resolve) => setTimeout(resolve, 400));
            }
        };

        // Display text when the component mounts
        displayMira();


    }, []);

    return (
        <React.Fragment>
            <div style={{ position: 'relative', paddingTop: 28 }}>
                <img src={MainPhoto} style={{ width: '100%' }} alt="MainPhoto" />
                <div className="overlayMira">
                    {mira}
                </div>
                <div className="overlayText">
                    {text}
                </div>
                <div className={styles.smallPhotoContainer}>
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            className={`styles.photo imageAboutUs`}
                            alt={`photo-${index + 1}`}
                            style={{

                                transform: `translate(-50%, -50%) translateX(${index * separators}px)`,

                                opacity: index <= currentImage ? 1 : 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutUs;