import React, { useState, useEffect } from "react";
import styles from "./project.module.css";
import MainPhoto from "../../Data/aboutUs.png";
import SocialData from "../../Data/SocialData";
import SosyalMedia from "../Home/SosyalMedia";
import ScrollButtons from "../Home/ScrollButtons";
import photo1 from '../../Data/new mutfak.webp';
import photo2 from '../../Data/yatakodası.jpg';
import photo3 from '../../Data/vistiyer.jpg';
import photo4 from '../../Data/kultuk.jpg';
import photo5 from '../../Data/la5.jpg';

import Facebook from "../../Data/Facebook.png";
import WhatsApp from "../../Data/whatsapp.png";
import Instagram from "../../Data/instgram.png";
import Mail from "../../Data/mail.png";
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
        const Mira = "MD Dekorasyon"; // Your text here

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
            <div >
                <div className="centered" style={{ backgroundColor: '' }}>
                    <div className="welcom-text">
                        MD Dekorasyon'a Hoş Geldiniz
                    </div>
                </div>
                <div className="padding-l">
                    <div >
                        <div className="aboutus-s" >
                            Hakkımızda:
                        </div>
                        <div className="text-aboutus-s">
                            Tutkumuzla Hayalinizdeki Evleri Şekillendiriyoruz.
                        </div>
                    </div>
                    <div className="text-aboutus-s">
                        MD Dekorasyon'a hoş geldiniz, burada zanaatı yaratıcılıkla birleştirerek yaşam alanlarınızı benzersiz tarzınızın bir ifadesine dönüştürüyoruz.
                    </div>
                    <div className="text-aboutus-s">
                        "Mobilya ve dekorasyon" dünyasında öncü olarak, ev tasarımının sanatını yeniden tanımlayan bir dizi hizmet sunmaktan gurur duyuyoruz.
                    </div>
                    <div className="aboutus-s">
                        Ev tadilatı dekorasyonu:
                    </div>
                    <div className="text-aboutus-s">
                        iyi düzenlenmiş ve güzel dekore edilmiş bir evin, uyumlu bir yaşam için temel olduğuna inanıyoruz.<br/> Uzman ekibimiz, kişiliğinizi yansıtmakla kalmayıp aynı zamanda işlevselliği optimize eden yaşam alanları yaratmada mükemmel bir beceriye sahiptir.
                    </div>
                    <div className="aboutus-s">
                        Anahtar Teslim İşlemleri:
                    </div>
                    <div className="text-aboutus-s">
                        Hayalinizdeki evinizi gerçeğe dönüştürmenin kolaylığını bizimle yaşayın. <br/>Kapsamlı anahtar teslim çözümlerimizle her detayı yönetiyor, sorunsuz ve stres-free bir dönüşüm sunuyoruz.<br/> Sadece eski evinizin anahtarını bize verin, size yeni evinizin anahtarını vererek sizi sürprizlerle şaşırtacağız!
                    </div>

                    <div className="aboutus-s">
                        Mutfak:
                    </div>
                    <div className="text-aboutus-s">
                        Her evin kalbi özenli bir dikkat gerektirir.<br/> Mutfak tasarımlarımız, işlevselliği estetikle buluşturarak mutfak alanınızın yaratıcılık ve verimlilik merkezi olmasını sağlar.
                    </div>
                    <div className="aboutus-s">
                        Kapı:                </div>
                    <div className="text-aboutus-s">
                        Kapılar sadece girişler değildir; evinizin kişiliğini belirlerler.<br/> Kapılarımızın her biri, yaşam alanlarınızın karakterini artırmak için özenle tasarlanmıştır.
                    </div>

                    <div className="aboutus-s">
                        Vestiyer:
                    </div>
                    <div className="text-aboutus-s">
                        Zarafet, düzenli bir gardırop ile başlar. Özel tasarlanmış vestiyer çözümlerimiz,<br/> yaşam tarzınıza uygun depolama çözümleri sunarak pratiklikle şıklığı bir araya getirir.
                    </div>

                    <div className="aboutus-s">
                        Giyinme Odası:
                    </div>
                    <div className="text-aboutus-s">
                        Kişisel tarzınıza uygun bir giyinme odasının lüksüne kapılın.<br/> Giyinme odası çözümlerimiz, fonksiyonellik ve ihtişamı mükemmel bir şekilde birleştirir.
                    </div>
                    <div className="aboutus-s">
                        Banyo:
                    </div>
                    <div className="text-aboutus-s">
                        Kişisel sığınaklarınızı, dinlenmeyi ve estetiği öncelikleyen banyo tasarımlarımızla canlandırın.<br/> Modern minimalizmden zamansız klasiklere kadar, günlük ritüelleriniz için mükemmel ambiyansı keşfedin.
                    </div>

                    <div className="centered text-aboutus-s padding-50" >
                    sadece evleri donatmıyoruz; deneyimler düzenliyoruz. Kalitemize, yeniliğimize ve müşteri memnuniyetimize olan bağlılığımız bizi farklı kılıyor. Bu yolculuğa birlikte çıkalım, benzersiz hikayenizi anlatan mekanlar şekillendirelim.
                    </div>




                </div>
                <SosyalMedia />
                <ScrollButtons />



            </div>
        </React.Fragment>
    );
};

export default AboutUs;