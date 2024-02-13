import React from 'react';
import {Button} from "@material-tailwind/react";

const Hero = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="absolute mt-48 inset-0 w-full h-screen"
                    src="/assetes/screens/screen2.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 pt-40 text-center space-y-4 md:mb-20 md:pt-56 lg:w-11/12 lg:mx-auto">
                        <>
                            <div className="lg:pt-32 md:pt-12 container w-full m-auto lg:px-6 md:px-12">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="text-center lg:text-left lg:mt-12 lg:mt-0 w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
                                            Our Mission
                                        </h1>
                                        <p className="mt-8 text-white dark:text-gray-300">
                                            At the heart of the #ForwardFartherFaster initiative lies a mission that transcends age, background, and boundaries. As Jimmi embarks on his 11th year, his vision propels us towards a world where every individual, irrespective of their unique journey, actively contributes to shaping a future bathed in hope, innovation, and inclusivity.
                                            Our mission is anchored in the belief that the power to transform the world lies within the collective experiences and ideas of humanity. Jimmi envisions a future where the vibrant tapestry of diverse stories forms the foundation for building a society that is not just technologically advanced but also compassionate and forward-thinking.
                                        </p>
                                        <Button  className="rounded-full mb-8 lg:mb-0 mt-12 bg-[#ffffca] text-bold text-black">
                                            Join Now
                                        </Button>
                                    </div>
                                    <div className="overflow-hidden w-full lg:w-5/12 lg:-mr-16">
                                        <img
                                            className="w-60 lg:80 mx-auto"
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
        </>
    );
};

export default Hero;