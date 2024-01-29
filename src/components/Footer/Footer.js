import {React,useState} from "react";

import PersonalData from "../../Data/PersonalData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";
import { useSelector } from "react-redux";
import classes from '../About Me/aboutMe.module.css'
import SocialLinks from "../SocialLinks/SocialLinks";
import Qrcode from '../../Data/Mira Dekor.svg';
import HSlogo from "../../Data/newlogo.png";
import MIRADEKOR from "../../Data/miradekor.svg";
function Footer() {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    let currentYear = new Date().getFullYear();
   

    return (
        <footer className="footer" style={{ color: nonThemeColor, backgroundColor: 'rgba(48, 34, 124, 0.144)' }}>

            <div>
                <div className="row" style={{width:'100%'}}>
                    <div className="col-md-4 col-12 " style={{ backgroundColor: '', paddingTop: 20 }}>
                        <div className="row" style={{ display: 'flex' }}>
                            <div className="col-md-6 col-6 centered" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <img src={HSlogo} alt="Image 1" className="footer-mira-logo"  />
                            </div>
                            <div className="col-md-6 col-6" >
                            
                            <img src={MIRADEKOR} alt="Image 1" className="" style={{width:'70%',paddingTop:40,marginRight:10}} />

                            </div> 
                        </div>
                        <div className="text-style-3 centered" style={{ paddingTop: 20 }}> Bize buradan da ulaşabilirsiniz </div>
                        <div className="centered">

                            <div style={{paddingTop:20}}>
                            <SocialLinks className={classes.links} />
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-4 col-12 centered footer-list" >
                        <div className="col-md-6 col-6 footer-list">
                            <h4>Kategorilerimiz</h4>
                            <ul>
                                <li>Kapı</li>
                                <li>Yatak odaları</li>
                                <li>Vestiyer</li>
                                <li>Koltuk</li>
                                <li>Mutfak</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-6">
                            <h4>Önemli Bağlantılar</h4>
                            <ul>
                                <li>Hakkımızda</li>
                                <li>Ana Sayfa</li>
                                <li>Harita</li>
                                <li>Adres</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 centered row" style={{ backgroundColor: '' }}>
                        <div>
                            <div className="centered text-style-3" style={{}}>Bize her yerden ulaşabilirsiniz</div>
                            <div className="centered">
                                <img src={Qrcode} alt="Image 1" className="" style={{ width: '30%', borderRadius: 10,paddingTop:5 }} /></div>
                        </div>
                    </div>
                </div>
               
                <div className="centered">
                    <CopyrightIcon />
                    &nbsp;{currentYear}
                    &nbsp;Coded By&nbsp; {PersonalData.firstName}&nbsp;{PersonalData.lastName}
                </div>

            </div>

        </footer>
    )
}
export default Footer;