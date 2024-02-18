import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';

const MobileNavbar = ({ isOpen, handleClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-full bg-white z-30 transform ${
                isOpen ? '' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <button className="absolute top-0 right-0 m-8" onClick={handleClose}>
                <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L11.414 12l2.293 2.293a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 12 6.293 9.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <ul className="flex flex-col justify-center items-center h-full bg-[#75d3f2] space-y-8">
                <li>
                    <a href="#">Mission</a>
                </li>
                <li>
                    <a href="#">Platform</a>
                </li>
                <li>
                    <a href="#">Contribute</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header>
                <nav
                    id="header_"
                    className="fixed top-0 left-0 z-20 w-full bg-[#75d3f2]"
                >
                    <div className="container mx-auto px-6 md:px-12 lg:px-6">
                        <div className="flex items-center justify-between py-4">
                            <a href="#" aria-label="logo" className={'flex items-center'}>
                                <img
                                    src="/assetes/banners/boy.png"
                                    className="w-12 rounded-full animate-spin-slow"
                                    alt="animated website"
                                    width={144}
                                    height={48}
                                />
                                <h2 className={'ms-2 text-md mt-4 font-semibold'}>
                                    Animated <br />
                                    <span className={'ms-4'}>Website</span>
                                </h2>
                            </a>
                            <button
                                aria-label="hamburger"
                                id="hamburger"
                                className="block lg:hidden"
                                onClick={toggleNavbar}
                            >
                                <div className="hamburger">
                                    <RxHamburgerMenu />
                                </div>
                            </button>
                            <div id="navbar" className="hidden lg:flex lg:items-center">
                                <ul className="flex space-x-6 text-black font-medium">
                                    <li>
                                        <a href="#">Mission</a>
                                    </li>
                                    <li>
                                        <a href="#">Platform</a>
                                    </li>
                                    <li>
                                        <a href="#">Contribute</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <MobileNavbar isOpen={isOpen} handleClose={closeNavbar} />
            </header>
            <div className="wrapper z-20">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>

            <div className="relative h-screen">
                <img
                    className="absolute inset-0 w-full h-full animate-pulse-slow transform  transition duration-500"
                    src="/assetes/screens/screen1.png"
                    alt="hero background image"
                />
                <div className="relative container mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 pt-40 text-center space-y-4 md:mb-20 md:pt-44 lg:w-8/12 lg:mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} // Initial state (before animation), y: -20 means moving 20 pixels upwards
                            animate={{ opacity: 1, y: 0 }}   // Animation state, y: 0 means no vertical movement (position remains the same)
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-black text-center text-3xl font-bold sm:text-4xl md:text-5xl animate__animated animate__fadeInDown headingEffect">
                                Uniting Voices, Ideas, and <br /> Dreams for a Brighter Tomorrow!
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial state (before animation), y: -20 means moving 20 pixels upwards
                            animate={{ opacity: 1, y: 0 }}   // Animation state, y: 0 means no vertical movement (position remains the same)
                            transition={{ duration: 0.8 }}
                        >
                        <p>#ForwardFartherFaster</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} // Initial state (before animation), y: -20 means moving 20 pixels upwards
                            animate={{ opacity: 1, x: 0 }}   // Animation state, y: 0 means no vertical movement (position remains the same)
                            transition={{ duration: 0.8 }}
                        >
                        <Button
                            style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                            }}
                            className="rounded-full bg-[#ffffca] buttonEffect text-bold text-black transform hover:scale-110 transition duration-300 shadow-2xl">
                            Explore Now
                        </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
