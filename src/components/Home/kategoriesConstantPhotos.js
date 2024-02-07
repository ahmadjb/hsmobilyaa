import React, { useState, useEffect } from 'react';

import Kapı from "../../Data/PhotoKategories/kapı.png";
import Dekor1 from "../../Data/PhotoKategories/dekor1.png";
import Dekor3 from "../../Data/PhotoKategories/dekor3.png";
import Dolap from "../../Data/PhotoKategories/dolap.png";
import Vistiyer1 from "../../Data/PhotoKategories/vistiyer.png";
import Vistiyer2 from "../../Data/PhotoKategories/vistiyer2.png";
import Kapı1 from "../../Data/PhotoKategories/kapı.png";
import Banyo from "../../Data/PhotoKategories/banyo.png";
import Mutfak from "../../Data/PhotoKategories/Mutfak1.png";
const kategorPhoto = (props) => {


    return (
        <div style={{ paddingTop: 20 }}>


            {/*1-2 */}
            <div className="centered" style={{}}>
                <div className="" style={{ width: '95%' }}>
                    <div className="row">
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Kapı} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Dekor1} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        {/* Add more col-md-6 divs with images as needed */}
                    </div>
                </div>
            </div>
            {/*3-4 */}
            <div className="centered" style={{}}>
                <div className="" style={{ width: '95%' }}>
                    <div className="row">
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Dekor3} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Dolap} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        {/* Add more col-md-6 divs with images as needed */}
                    </div>
                </div>
            </div>

            {/*5-6 */}
            <div className="centered" style={{}}>
                <div className="" style={{ width: '95%' }}>
                    <div className="row">
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Vistiyer1} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Vistiyer2} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        {/* Add more col-md-6 divs with images as needed */}
                    </div>
                </div>
            </div>


            {/*7-8 */}
            <div className="centered" style={{}}>
                <div className="" style={{ width: '95%' }}>
                    <div className="row">
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Kapı1} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Banyo} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        {/* Add more col-md-6 divs with images as needed */}
                    </div>
                </div>
            </div>
            {/*9-10 */}
            <div className="centered" style={{}}>
                <div className="" style={{ width: '95%' }}>
                    <div className="row">
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Dolap} alt="Image 1" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        <div className="centered col-md-6 md-12" style={{ backgroundColor: '', paddingTop: 10 }}>
                            <img src={Dekor1} alt="Image 2" style={{ maxWidth: '100%', height: 'auto', borderRadius: 15, paddingTop: 5, paddingBottom: 5 }} />
                        </div>
                        {/* Add more col-md-6 divs with images as needed */}
                    </div>
                </div>
            </div>


        </div>

    );
};

export default kategorPhoto;
