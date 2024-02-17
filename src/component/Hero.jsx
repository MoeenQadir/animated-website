import React from 'react';
import {Button} from "@material-tailwind/react";
import { motion } from 'framer-motion';

const Hero = () => {
    return (<>
        <div className="relative h-auto lg:h-screen ">
            <img
                className="absolute inset-0 w-full h-full animate-pulse-slow transform hover:scale-110 transition duration-500"
                src="/assetes/screens/screen2.png"
                alt="hero background image"
            />
            <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                <div className="text-center space-y-4 lg:w-11/12 lg:mx-auto">
                    <>
                        <div className="container w-full m-auto lg:px-6 md:px-12">
                            <div className="relative lg:flex lg:items-center lg:gap-4">
                                <div
                                    className="text-center lg:text-left lg:mt-12 lg:mt-0 w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                    <h1 className="text-white font-bold animate__animated animate__fadeInDown headingEffect text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white transition-transform transform hover:scale-105 duration-300"
                                        style={{"box-shadow": "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"}}
                                        data-aos="fade-right"
                                        data-aos-offset="75"
                                        data-aos-easing="ease-in-sine">
                                        Our Mission
                                    </h1>
                                    <p className="mt-8 text-white dark:text-gray-300 transition-all duration-300"
                                       data-aos="fade-right"
                                       data-aos-offset="100"
                                       data-aos-easing="ease-in-sine">
                                        At the heart of the #ForwardFartherFaster initiative lies a mission that
                                        transcends age, background, and boundaries. As Jimmi embarks on his 11th
                                        year, his vision propels us towards a world where every individual,
                                        irrespective of their unique journey, actively contributes to shaping a
                                        future bathed in hope, innovation, and inclusivity.
                                        Our mission is anchored in the belief that the power to transform the world
                                        lies within the collective experiences and ideas of humanity. Jimmi
                                        envisions a future where the vibrant tapestry of diverse stories forms the
                                        foundation for building a society that is not just technologically advanced
                                        but also compassionate and forward-thinking.
                                    </p>
                                    <Button
                                        className="rounded-full buttonEffect mb-8 lg:mb-0 mt-12 bg-[#ffffca] text-bold text-black transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl"
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                        }}
                                        data-aos="fade-right"
                                        data-aos-offset="120"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        Join Now
                                    </Button>
                                </div>
                                <div className="w-full lg:w-5/12 lg:-mr-16">
                                    <img
                                        className="w-60 lg:96 mx-auto animate-pulse lg:dImg lg:transition-all duration-300 transform lg:hover:scale-125 lg:hover:-rotate-12"
                                        src="/assetes/banners/banner-img.png"
                                        alt="project illustration"
                                    />
                                </div>
                            </div>
                        </div>
                    </>

                </div>
            </div>
        </div>
    </>);
};

export default Hero;
