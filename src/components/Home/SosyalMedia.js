import React, { useState, useEffect } from "react";
import SocialData from "../../Data/SocialData";


import Facebook from "../../Data/Facebook.png";
import WhatsApp from "../../Data/whatsapp.png";
import Instagram from "../../Data/instgram.png";
import Mail from "../../Data/mail.png";
const SosyalMedia = (props) => {




    return (
        <div>
            <div className="text-style-3 centered" style={{ fontSize: 30 ,paddingTop:50}}>
                <div>
                    Bizi Sosyal Medyada Takip Edin
                </div>

            </div>
            <div style={{ backgroundColor: '', width: '100%', height: '20vh' }} className="centered">
                <div className="centered" style={{ padding: 10 }} >
                    <div >
                        <a href={SocialData.Facebook} > <img src={Facebook} className="sosyal-media" /></a>
                    </div>
                    <div >
                        <a href={SocialData.WhatsappIcon} > <img src={WhatsApp} className="sosyal-media" /></a>
                    </div>
                    <div >
                        <a href={SocialData.instaLink} >   <img src={Instagram} className="sosyal-media" /></a>
                    </div>
                    <div >
                        <a href={SocialData.emailLink} >  <img src={Mail} className="sosyal-media" /> </a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SosyalMedia;