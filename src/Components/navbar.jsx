import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 text-customWhite px-8 py-4 flex justify-between items-center z-10">
                <div className="text-xl font-bold">Juan C. Oyarzún Liendo</div>
                <div className="flex space-x-4 text-customNav">
                    <a href="#home" className="hover:text-customGold">
                        Home
                    </a>
                    <a href="#portfolio" className="hover:text-customGold">
                        Portafolio
                    </a>
                    <a href="#about" className="hover:text-customGold">
                        Sobre mi
                    </a>
                    <a href="#faq" className="hover:text-customGold">
                        FAQ
                    </a>
                    <a href="#contact" className="hover:text-customGold">
                        Contacto
                    </a>
                </div>
            </nav>

            {/* Video Banner */}
            <section id="home" className="relative w-full h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="https://res.cloudinary.com/dt2nddbma/video/upload/v1733796164/video-banner_hrrf8c.mp4" type="video/mp4" />
                    Tu navegador no soporta videos en HTML5.
                </video>
                {/* Overlay para mejor visibilidad */}
                <div className="absolute top-0 left-10 w-full h-full bg-black bg-opacity-30 flex items-center justify-start">
                    <h1 className="text-customGold text-8xl font-regular leading-tight text-center">
                        <span className="block">Transforma</span>
                        <span className="block text-customWhite">Tu Amor</span>
                        <span className="block text-customWhite">En Arte. </span>
                    </h1>

                </div>
            </section>
        </div>
    )
}

export default Navbar
