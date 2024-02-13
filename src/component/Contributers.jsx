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
            <div className="relative">
                <img
                    className="absolute lg:mt-28 inset-0 w-full h-screen"
                    src="/assetes/screens/screen4.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-4 text-center space-y-4 md:mb-8 lg:w-11/12 lg:mx-auto">
                            <div className="lg:pt-6 md:pt-4 container w-full m-auto lg:px-6 md:px-12">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="relative lg:flex lg:items-center lg:gap-4">
                                        <div className="text-center lg:text-left lg:mt-12 lg:mt-0 w-full sm:mx-auto lg:mr-auto lg:w-6/12">
                                            <h1 className="text-white pt-8 lg:pt-0 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
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
                    </div>
                    <div className={"relative flex flex-col md:flex-row container mx-auto lg:space-x-8 lg:justify-evenly mx-auto"}>
                        <div className={"w-full lg:w-3/12"}>
                            <Card className="mt-6 w-80 h-72  text-center glossy-card text-white relative">
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
                        <div className={"w-full lg:w-6/12 flex items-center relative"}>
                            <div className={"w-full lg:w-10/12 mx-auto flex items-center justify-center"}>
                                <Card className="mt-6 w-full glossy-card text-white text-center relative">
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
                                <img src="/assetes/arrows/down-arrow.png" className="z-10 absolute -bottom-16 left-12 transform -translate-x-1/2 hidden lg:inline" alt="arrow" />
                            </div>
                        </div>
                        <div className={"w-full lg:w-3/12"}>
                            <Card className="mt-6 w-80 h-72 text-center glossy-card text-white relative">
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
                            <img src="/assetes/arrows/up-arrow.png" className="absolute -top-6 -right-36 transform -translate-x-1/2 hidden lg:inline" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contributers;