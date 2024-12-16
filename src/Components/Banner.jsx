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
            <div className="absolute top-0 mx-8 w-full h-full z-1 flex items-center justify-start">
                <div className="text-customGold text-animation text-[200px] font-tight leading-tight text-start schnyder">
                    <p className="transforma ps-48">TRANSFORMA</p>
                    <p className="tu-amor text-customWhite ps-20">
                        TU AMOR
                    </p>
                    <p className="text-customWhite">EN ARTE </p>
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
