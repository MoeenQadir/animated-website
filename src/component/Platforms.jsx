import React from 'react';
import {Button} from "@material-tailwind/react";

const Platforms = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="absolute inset-0 w-full h-screen"
                    src="/assetes/screens/screen3.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 text-center space-y-4 md:mb-20 lg:w-11/12 lg:mx-auto">
                        <>
                            <div className="lg:pt-32 md:pt-12 container w-full m-auto lg:px-6 md:px-12">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="overflow-hidden w-full lg:w-5/12 lg:-mr-16">
                                        <img
                                            className="w-80 mx-auto"
                                            src="/assetes/banners/boy.png"
                                            alt="project illustration"
                                        />
                                    </div>
                                    <div className="text-center lg:text-left  lg:mt-12 lg:mt-0 w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
                                            Our Platform
                                        </h1>
                                        <p className="mt-8 text-white dark:text-gray-300">
                                            Designed to be more than just a website, this platform serves as a dynamic space where individuals from all corners of the globe come together to share personal stories.
                                        </p>
                                        <ul className="list-disc font-semibold text-white space-y-4 mt-4 ms-10">
                                            <li>Sharing Personal Stories and Experiences</li>
                                            <li>Discussing Visions for a Better Future, Especially through AI and Technology</li>
                                            <li>Offering Unfiltered Expressions and Thoughts</li>
                                        </ul>

                                        <Button  className="rounded-full mt-6 bg-[#ffffca] text-bold text-black">
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