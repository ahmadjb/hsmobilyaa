import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { useSelector } from "react-redux";
import { autoTypeData } from "../../Data/PersonalData";
import Workcard from "./lastWorks";
import Worktype from "./worktype";
import photo1 from '../../Data/1st.webp';
import photo2 from '../../Data/2nd.webp';
import photo3 from '../../Data/3rd.webp';
import photo4 from '../../Data/4th.webp';

function Home(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);

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
        const photos = [photo1, photo2, photo3, photo4];

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

        const transitionStyle = {
            transition: 'left 0.5s ease-in-out',
            left: `-${currentPhotoIndex * 100}%`, // Adjust based on the width of your images
            position: 'relative',
            width: '100%',
            display: 'flex',
        };

        const arrowContainerStyleLeft = {
            position: 'relative',
            left: '2%',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1,
        };
        const arrowContainerStyleRight = {
            position: 'absolute',
            top: '45%',
            left: '98%',
            
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1,
        };

        return (
            <div>
                <div style={{ borderColor: 'red', borderRadius: 10, borderStyle: 'solid', borderWidth: 2 }}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
                        <div style={arrowContainerStyleLeft}>
                            <LeftArrow onClick={navigateToPrevPhoto} />
                        </div>
                        <div style={transitionStyle}>
                            {photos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    style={{ flex: '0 0 100%' }}
                                />
                            ))}
                        </div>
                        <div style={arrowContainerStyleRight}>
                            <RightArrow onClick={navigateToNextPhoto} />
                        </div>
                    </div>
                </div>

                <Workcard />
                <Worktype />
            </div>

        );
    };

    return (
        <main>
            <div className="photo-carousel-container">
                <PhotoCarousel />
            </div>

            {/* Additional content */}

        </main>
    )
}

export default Home;
