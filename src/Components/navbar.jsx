import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 text-customWhite px-16 py-4 flex justify-between items-center z-10">
                <div className="text-2xl font-normal schnyder">Juan C. Oyarzún</div>
                <div className="flex space-x-4 text-customWhite schnyder font-tight">
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
                <div className="absolute top-0 left-10 w-full h-full flex items-center justify-start">
                    <div className="text-customGold text-9xl font-tight leading-tight text-start schnyder">
                        <p className="block ms-52">TRANSFORMA</p>
                        <p className="block text-customWhite">
                            <span className='linea'></span> TU AMOR
                        </p>
                        <p className="block text-customWhite">EN ARTE </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Navbar
