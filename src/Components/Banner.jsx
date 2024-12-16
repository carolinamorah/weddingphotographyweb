import React from "react";
import "./components.css";
import Footer from "./Footer";

const Banner = () => {
    return (
        <div className="banner">
            <div className="video-container">
                <video
                    className="background-video"
                    src="https://res.cloudinary.com/dt2nddbma/video/upload/v1734300195/video-banner_hrrf8c.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/novios.webp"
                ></video>
                <div className="overlay"></div>
            </div>
            <div className="absolute top-0 left-10 w-full h-full z-1 flex items-center justify-start">
                <div className="text-customGold text-animation text-9xl font-tight leading-tight text-start schnyder">
                    <p className="block ms-52">EL ARTE</p>
                    <p className="block text-customWhite">
                        <span className='linea'></span> DE NARRAR
                    </p>
                    <p className="block text-customWhite">HISTORIAS </p>
                </div>
            </div>
            {/* Footer como parte del banner */}
            <div className="footer-overlay">
                <Footer />
            </div>
        </div>
    );
};

export default Banner;
