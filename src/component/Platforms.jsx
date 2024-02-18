import React from 'react';
import {Button} from "@material-tailwind/react";

const Platforms = () => {
    return (
        <>
            <div className="relative bg-[#1f1541] h-auto lg:h-screen">
                <img
                    className="absolute inset-0 w-full h-full animate-pulse-slow transform transition duration-500"
                    src="/assetes/screens/screen3.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="text-center space-y-4 lg:w-11/12 lg:mx-auto">
                        <>
                            <div className=" container w-full m-auto lg:px-6 md:px-12">
                                <div className="relative lg:flex lg:items-center lg:gap-4">

                                    <div className="w-full lg:w-5/12 lg:-mr-16">
                                        <img
                                            className="w-60 lg:80 z-20 mx-auto py-4 lg:py-0 animate-pulse pt-16 lg:0 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                                            src="/assetes/banners/boy.png"
                                            alt="project illustration"
                                        />
                                        <div className="ball py-6">
                                        </div>
                                    </div>
                                    <div className="text-center lg:text-left  w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                        <h1 className="text-white py-4 lg:py-0 animate__animated animate__fadeInDown headingEffect font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
                                            Our Platform
                                        </h1>
                                        <p className="mt-8 text-white dark:text-gray-300 animate__animated animate__fadeInDown headingEffect">
                                            Designed to be more than just a website, this platform serves as a dynamic space where individuals from all corners of the globe come together to share personal stories.
                                        </p>
                                        <ul className="list-disc font-semibold text-white space-y-4 mt-4 ms-10">
                                            <li className={"animate__animated animate__fadeInDown headingEffect"}>Sharing Personal Stories and Experiences</li>
                                            <li className={"animate__animated animate__fadeInDown headingEffect"}>Discussing Visions for a Better Future, Especially through AI and Technology</li>
                                            <li className={"animate__animated animate__fadeInDown headingEffect"}>Offering Unfiltered Expressions and Thoughts</li>
                                        </ul>

                                        <Button  className="rounded-full my-12 lg:my-0 animate-pulse buttonEffect bg-[#ffffca] text-bold text-black"
                                                 style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                                 }}
                                        >
                                            Join Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Platforms;