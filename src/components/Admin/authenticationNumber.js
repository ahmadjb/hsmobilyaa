import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtbInput from 'otp-input-react';
import { CgSpinner } from 'react-icons/cg';
import { Phone } from "@mui/icons-material";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast from "react-hot-toast";
import { signInWithPhoneNumber } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import { Toaster } from 'react-hot-toast';
import { auth } from './firebaseConfig'




const App = ({ sendDataToParent }) => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOPT, setShowOPT] = useState(false);
    const [login, setLogin] = useState(true);

    const handleClick = () => {
        // Call the function passed from the parent
        if (ph == "905530173042" || ph == "") {
            toast.success("Doğru, lütfen şifrenizi giriniz");
            setShowOPT(true);
        }
        else {
            toast.error("Bu telefon numarası yöneticiye ait değil, tekrar deneyin lütfen!!");
        }

    };

    const verifyPassword = () => {
        // Call the function passed from the parent
        if (password == "123456" || password == ""  ) {
            setShowOPT(false);
            setLogin(false);
            sendDataToParent(login);


        }
        else {
            toast.error("Şifre yanlış, lütfen tekrar deneyin");

        }

    };



    {/*const onSignup = async () => {
    try {
        setLoading(true);
        console.log("Auth Object:", auth);

        const phoneNumber = "+905530173042";
        console.log("Phone Number:", phoneNumber);

        const confirmationResult = await signInWithPhoneNumber( auth,phoneNumber);
        console.log("confirmationResult:", confirmationResult);
        setShowOPT(true);
    } catch (error) {
        console.error("Error sending OTP", error);
        toast.error("Error sending OTP");
    } finally {
        setLoading(false);
    }
};
*/}




    return (
        <section className=" flex items-center justify-center h-screen ">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                {
                    showOPT ?

                        <div className="container">
                            <h1 className="heading">
                                Mira'nın yönetici sayfasına<br /> hoş geldiniz
                            </h1>

                            <div className="lockIcon">
                                <BsFillShieldLockFill size={30} />
                            </div>

                            <label htmlFor="otp" className="label">
                                Şifrenizi giriniz
                            </label>

                            <div className="" >
                                <OtbInput
                                    value={password}
                                    onChange={setPassword}
                                    OTPLength={6}
                                    otpTypr="phoneNumber"
                                    disabled={false}
                                    autoFocus
                                    className="otbInput"
                                ></OtbInput>
                            </div>

                            <button onClick={verifyPassword} className="verifyButton">
                                {loading && <CgSpinner size={30} className="spinner animate-spin" />}
                                <span>Şifreyi doğrula</span>
                            </button>
                            <div>
                                Note: you can enter from "1-6" as a password to see the admin page, then you can do any test you want, there is no problem. </div>
                        </div>
                        :
                        <div className="container">
                            <h1 className="heading">
                                Mira'nın yönetici sayfasına<br /> hoş geldiniz
                            </h1>

                            <div className="lockIcon">
                                <BsTelephoneFill size={30} />
                            </div>

                            <label htmlFor="" className="label">
                                Telefon numaranızı giriniz
                            </label>

                            <PhoneInput
                                country={"in"}
                                value={ph}
                                onChange={setPh} />

                            <button onClick={handleClick} className="verifyButton">
                                {loading && <CgSpinner size={30} className="spinner animate-spin" />}
                                <span>Numaramı doğrula</span>
                            </button>
                            <div>
                                Note: you can click on the button of "Numaramı doğrula" without entering any number to pass this step(temporary).
                            </div>
                        </div>
                }

            </div>


        </section>
    );
};

export default App;
