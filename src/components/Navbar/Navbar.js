import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import HSlogo from "../../Data/newlogo.png";
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useMediaQuery from '@mui/material/useMediaQuery';  // Import the useMediaQuery hook from Material-UI
import MIRADEKOR from "../../Data/miradekor.svg";
import MapIcon from "../Map/map";


import WhatsAppIcon from '../WhatsApp/whatsApp';

import './navbar.css';

import { themeActions } from "../../store/theme";

import ColorModal from "./ColorModal";
import Routes from "./Routes";

import PersonalData from "../../Data/PersonalData";
import { Height } from "@mui/icons-material";

const Navbar = () => {

    const isMobile = useMediaQuery('(max-width: 800px)');  // Use the useMediaQuery hook to check the screen size


    const menuRef = useRef();
    const dispatch = useDispatch();
    const activeNavRoute = useLocation();

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const changeColor = (newColor) => {
        dispatch(themeActions.changeThemeColor(newColor));
    }

    const mode = useSelector(state => state.mode);
    const bgColor = useSelector(state => state.theme.backgroundColor);
    const activeColor = useSelector(state => state.theme.color);

    // const [mode, setMode] = useState("light");
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [iswhatsapp, setIswhatsapp] = useState(false);
    const [isColorModalShown, setColorModalShown] = useState(false);


    function handleModeChange() {

        const lightModeBtn = document.getElementById("lightModeBtn")
        const darkModeBtn = document.getElementById("darkModeBtn")
        if (mode === 'light') {
            lightModeBtn.style.display = "none";
            darkModeBtn.style.display = "block";
            darkModeBtn.style.color = "black";
        }
        else {
            lightModeBtn.style.display = "block";
            darkModeBtn.style.display = "none";
            lightModeBtn.style.color = "white";
        }
        dispatch(themeActions.toggleMode());
    }

    function handleColorSelector() {
        setColorModalShown(prev => !prev);
    }
    function handleDropDown() {
        setIsDropDownVisible((prevState) => !prevState);
    }


    let systemTheme = 'light';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        systemTheme = 'dark';
    }

    useEffect(() => {
        if (systemTheme === 'dark') {
            handleModeChange();
        }
    }, [systemTheme]);

    useEffect(() => {
        handleDropDown();
        menuRef.current.checked = false;
        setIsDropDownVisible(false);



    }, [activeNavRoute])

    const handleLogoClick = () => {
        // Only navigate if not on a mobile device
        setIsDropDownVisible(true);
    };

    return (
        <div className="main" >
            <div className="navbar" style={{ backgroundColor: bgColor }}>
                <div className="row " style={{ paddingLeft: '2%', backgroundColor: '', height: '100%', width: '100%' }}>

                    <Link to="/home" onClick={handleLogoClick} className="logoContainer col-md-4 col-8" style={{ height: '100%', textDecoration: 'none', backgroundColor: '' }}>
                        <img src={HSlogo} alt="degree" className="mira-logo" />
                        <img src={MIRADEKOR} alt="Image 1" className="mira-text-logo" />
                    </Link>
                    <div className="navsContainer col-md-7 col-4 " style={{ color: nonThemeColor, backgroundColor: '', height: '100%', paddingBottom: 25 }}>
                        <Routes />
                    </div>
                    <div className="col-md-1 centered" style={{ backgroundColor: '' }}>

                        {!isMobile && (
                            <div className="centered">
                                <WhatsAppIcon phoneNumber="+905530173042" />
                                {/*<div style={{ cursor: 'pointer' }}>
                                    <MapIcon />
                                </div>*/}
                            </div>
                        )}

                    </div>
                </div>
                <div className="selectTheme">
                    {/*<div className="selectMode" onClick={handleModeChange}>
                        <div id="lightModeBtn" style={{ color: "white" }}><LightModeIcon /></div>
                        <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                    </div>*/}

                    { /*<div className="colorSelector" onClick={handleColorSelector} style={{ backgroundColor: activeColor }}>
                        {
                            isColorModalShown && <ColorModal selectColor={changeColor} onConfirm={handleColorSelector} />
                        }
                    </div>*/}

                    <input type="checkbox" onClick={handleDropDown} ref={menuRef} id="burger-toggle" />
                    <label htmlFor="burger-toggle" className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </div>
            </div>
            {isDropDownVisible && <div className="mob-nav" style={{ color: nonThemeColor }}>
                <Routes />
                {isMobile && <div className="centered" style={{ marginLeft: '50%' }}>
                    <WhatsAppIcon phoneNumber="+905530173042" />
                    <div style={{ cursor: 'pointer', width: '50px', height: '50px' }}>
                        <MapIcon />
                    </div>

                </div>}
            </div>}
        </div>
    )
}

export default Navbar;