import React, { useState } from "react";
import "./components.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };


    return (
        <div>
            <nav className="navbar">
                {/* Izquierda */}
                <div className="navbar-section navbar-left schnyder customNav">
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                </div>

                {/* Centro */}
                <div className="navbar-center customNav schnyder">
                    <a href="#home" className="navbar-logo">
                        PIANA_STUDIO.
                    </a>
                </div>

                {/* Derecha */}
                <div className="navbar-section navbar-right customNav schnyder">
                    <a href="#faq">Faq</a>
                    <a href="#contact">Contact</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>

                {/* Menú Hamburguesa */}
                <button className="navbar-hamburger" onClick={toggleMenu}>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>

                {/* Menú desplegable */}
                {isMenuOpen && (
                    <div className="navbar-menu schnyder customNav">
                        <a href="#home" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </a>
                        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                            Portfolio
                        </a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>
                            About
                        </a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)}>
                            Faq
                        </a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Instagram
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;



