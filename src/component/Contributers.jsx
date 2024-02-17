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
import {
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

const Contributers = () => {
    return (
        <>
            <div className="relative bg-[#18153a] h-auto lg:h-screen">
                <img
                    className="absolute w-full h-auto animate-pulse-slow transform hover:scale-105 transition duration-500"
                    src="/assetes/screens/screen4.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-4 text-center space-y-4 md:mb-8 lg:w-11/12 lg:mx-auto">
                        <div className=" container w-full m-auto lg:px-6 md:px-12">
                            <div className="relative lg:flex lg:items-center lg:gap-4">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="text-center lg:text-left w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white transition-transform animate__animated animate__fadeInDown headingEffect transform hover:scale-105">
                                            How To Contribute
                                        </h1>
                                        <p className="lg:mt-8 mt-2 text-white dark:text-gray-300 transition-all duration-300 animate__animated animate__fadeInDown headingEffect">
                                            At #ForwardFartherFaster, we believe that everyone's journey, ideas, and dreams are integral to shaping a brighter future. Your personal narrative is a valuable thread in the rich tapestry of human experience. Share your story with us on our platform, where every unique perspective contributes to the collective narrative of hope and progress. Your participation is what propels this initiative forward. Whether you choose to share a personal story, spread the word, engage with the community
                                            Together, we can illuminate the path to a future filled with hope, kindness, and innovation.
                                        </p>
                                        <Button  className="rounded-full mt-12 bg-[#ffffca] animate__animated animate__fadeInDown headingEffect buttonEffect transform hover:scale-110 transition duration-300 shadow-2xl text-bold text-black">
                                            Get Started
                                        </Button>
                                    </div>
                                    <div className="overflow-hidden w-full lg:w-5/12 lg:-mr-16">
                                        <div className="w-[32rem]">
                                            <Timeline>
                                                <TimelineItem>
                                                    <TimelineConnector />
                                                    <TimelineHeader>
                                                        <TimelineIcon className="p-4 bg-gradient-to-r from-[#c849ef] to-[#fb6ee1] transition-all duration-300 transform hover:scale-105">
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
                                                        <TimelineIcon className="p-4 border-2 border-white transition-all duration-300 transform hover:scale-105">
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
                                                        <TimelineIcon className="p-4 border-2 border-white transition-all duration-300 transform hover:scale-105">
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
                    </div>
                    <h1 className="text-white buttonEffect transform hover:scale-110 transition duration-300 shadow-2xl animate__fadeInDown w-full text-center mt-8 lg:mb-32 pt-8 lg:pt-0 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
                        How To Join
                    </h1>
                    <div className={"relative z-10 flex flex-col lg:flex-row py-2 container mx-auto lg:justify-center mx-auto"}>
                        <div className={"w-full lg:w-3/12 flex justify-center"}>
                            <Card className="mt-6 w-72 h-80 mx-auto lg:mx-0 animate-pulse-slow transform hover:scale-105 transition duration-500 text-center glossy-card text-white relative transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                  style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                  }}>
                                <CardBody className={"my-auto"}>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Share Your Story
                                    </Typography>
                                    <Typography>
                                        Contribute to the collective narrative by sharing your journey, ideas, and dreams on our interactive platform.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className={"w-full lg:w-6/12 flex items-center justify-center relative"}>
                            <Card className="mt-6 w-full mx-5 glossy-card text-white text-center relative transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                  style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                  }}>
                                <CardBody>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Spread the Word
                                    </Typography>
                                    <Typography>
                                        Help us grow by spreading awareness about #ForwardFartherFaster. Share our initiative on your social networks, and let others know about our mission
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                            <img src="/assetes/arrows/down-arrow.png" className="z-10 absolute -bottom-8 left-20 transform -translate-x-1/2 hidden lg:inline" alt="arrow" />
                        </div>
                        <div className={"w-full lg:w-3/12 flex justify-center"}>
                            <Card className="mt-6 w-72 h-80 text-center mx-auto lg:mx-0 glossy-card text-white relative transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                  style={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                  }}>
                                <CardBody className={"my-auto"}>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Share Your StoryEngage with the Community
                                    </Typography>
                                    <Typography>
                                        Dive into discussions, provide valuable feedback, and collaborate with like-minded individuals in our vibrant community.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                            <img src="/assetes/arrows/up-arrow.png" className="absolute -top-2 -right-28 transform -translate-x-1/2 hidden lg:inline" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contributers;
