import React from 'react';
import {Button} from "@material-tailwind/react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
const Contributers = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="absolute mt-28 inset-0 w-full h-screen"
                    src="/assetes/screens/screen4.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 text-center space-y-4 md:mb-20 lg:w-11/12 lg:mx-auto">
                        <>
                            <div className="lg:pt-32 md:pt-12 container w-full m-auto lg:px-6 md:px-12">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="relative lg:flex lg:items-center lg:gap-4">
                                        <div className="text-center lg:text-left lg:mt-12 lg:mt-0 w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                            <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
                                                How To Contribute
                                            </h1>
                                            <p className="mt-8 text-white dark:text-gray-300">
                                                At #ForwardFartherFaster, we believe that everyone's journey, ideas, and dreams are integral to shaping a brighter future. Your personal narrative is a valuable thread in the rich tapestry of human experience. Share your story with us on our platform, where every unique perspective contributes to the collective narrative of hope and progress. Your participation is what propels this initiative forward. Whether you choose to share a personal story, spread the word, engage with the community
                                                Together, we can illuminate the path to a future filled with hope, kindness, and innovation.
                                            </p>
                                            <Button  className="rounded-full mt-12 bg-[#ffffca] text-bold text-black">
                                                Get Started
                                            </Button>
                                        </div>
                                        <div className="overflow-hidden w-full lg:w-5/12 lg:-mr-16">
                                            <div className="w-[32rem]">
                                                <Timeline>
                                                    <TimelineItem>
                                                        <TimelineConnector />
                                                        <TimelineHeader>
                                                            <TimelineIcon className="p-4 bg-gradient-to-r from-[#c849ef] to-[#fb6ee1]">
                                                            </TimelineIcon>
                                                            <Typography variant="h5" color="white">
                                                                10%
                                                            </Typography>
                                                        </TimelineHeader>
                                                        <TimelineBody className="pb-8">
                                                            <Typography color="gary" className="font-normal text-white">
                                                                Spread the Word
                                                            </Typography>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineConnector />
                                                        <TimelineHeader>
                                                            <TimelineIcon className="p-4 border-2 border-white ">
                                                            </TimelineIcon>
                                                            <Typography variant="h5" color="white">
                                                                50%
                                                            </Typography>
                                                        </TimelineHeader>
                                                        <TimelineBody className="pb-8">
                                                            <Typography color="gary" className="font-normal text-white">
                                                                Engage with the Community
                                                            </Typography>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineHeader>
                                                            <TimelineIcon className="p-4 border-2 border-white ">
                                                            </TimelineIcon>
                                                            <Typography variant="h5" color="white">
                                                                100%
                                                            </Typography>
                                                        </TimelineHeader>
                                                        <TimelineBody>
                                                            <Typography color="gary" className="font-normal text-white">
                                                                Support the Mission
                                                            </Typography>
                                                        </TimelineBody>
                                                    </TimelineItem>
                                                </Timeline>
                                            </div>
                                        </div>
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

export default Contributers;