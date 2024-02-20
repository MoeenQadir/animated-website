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
            <div className="relative bg-[#18153a] lg:h-screen">
                <img
                    className="absolute w-full h-auto  bg-hero-image"
                    src="/assetes/screens/screen4.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-4 text-center space-y-4 md:mb-8 lg:w-11/12 lg:mx-auto">
                        <div className=" container w-full m-auto lg:px-6 md:px-12">
                            <div className="relative lg:flex lg:items-center lg:gap-4">
                                <div className="relative lg:flex lg:items-center lg:gap-4">
                                    <div className="text-center lg:text-left w-full sm:mx-auto lg:mr-auto lg:w-6/12"
                                         data-aos="fade-right"
                                         data-aos-offset="50"
                                         data-aos-easing="ease-in-sine">

                                        <h1 className="text-white py-8 lg:py-0 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white transition-transform animate__animated animate__fadeInDown headingEffect transform "
                                            data-aos="fade-right"
                                            data-aos-offset="70"
                                            data-aos-easing="ease-in-sine">
                                            How To Contribute
                                        </h1>

                                        <p className="lg:mt-8 mt-2 text-white dark:text-gray-300 transition-all duration-300 animate__animated animate__fadeInDown headingEffect"
                                           data-aos="fade-right"
                                           data-aos-offset="100"
                                           data-aos-easing="ease-in-sine">
                                            At #ForwardFartherFaster, we believe that everyone's journey, ideas, and
                                            dreams are integral to shaping a brighter future. Your personal narrative is
                                            a valuable thread in the rich tapestry of human experience. Share your story
                                            with us on our platform, where every unique perspective contributes to the
                                            collective narrative of hope and progress. Your participation is what
                                            propels this initiative forward. Whether you choose to share a personal
                                            story,
                                            spread the word, engage with the community
                                            Together, we can illuminate the path to a future filled with hope, kindness,
                                            and innovation.
                                        </p>
                                        <Button
                                            className="rounded-full hover:bg-gradient-to-r from-[#c849ef] to-[#fb6ee1] hover:text-white lg: my-10 lg:my-0 mt-20 lg:mt-12 bg-[#ffffca] animate__animated animate__fadeInDown headingEffect buttonEffect transform hover:scale-110 transition duration-300 shadow-2xl text-bold text-black"
                                            data-aos="fade-right"
                                            data-aos-offset="120"
                                            data-aos-easing="ease-in-sine">
                                            Get Started
                                        </Button>
                                    </div>
                                    <div className="overflow-hidden hidden md:block w-full lg:w-5/12 lg:-mr-16"
                                         data-aos="fade-up"
                                         data-aos-offset="50"
                                         data-aos-easing="ease-in-sine">
                                        <div className="w-[32rem]">
                                            <Timeline>
                                                <TimelineItem data-aos="fade-up"
                                                              data-aos-offset="50"
                                                              data-aos-easing="ease-in-sine">
                                                    <TimelineConnector/>
                                                    <TimelineHeader>
                                                        <TimelineIcon
                                                            className="p-4 bg-gradient-to-r from-[#c849ef] to-[#fb6ee1] transition-all duration-300 transform ">
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
                                                    <TimelineConnector/>
                                                    <TimelineHeader>
                                                        <TimelineIcon
                                                            className="p-4 border-2 border-white transition-all duration-300 transform ">
                                                        </TimelineIcon>
                                                        <Typography variant="h5" color="white"
                                                                    data-aos="fade-up"
                                                                    data-aos-offset="60"
                                                                    data-aos-easing="ease-in-sine">
                                                            50%
                                                        </Typography>
                                                    </TimelineHeader>
                                                    <TimelineBody className="pb-8">
                                                        <Typography color="gary" className="font-normal text-white"
                                                                    data-aos="fade-up"
                                                                    data-aos-offset="70"
                                                                    data-aos-easing="ease-in-sine">
                                                            Engage with the Community
                                                        </Typography>
                                                    </TimelineBody>
                                                </TimelineItem>
                                                <TimelineItem
                                                    data-aos="fade-up"
                                                    data-aos-offset="100"
                                                    data-aos-easing="ease-in-sine">
                                                    <TimelineHeader>
                                                        <TimelineIcon
                                                            className="p-4 border-2 border-white transition-all duration-300 transform ">
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
                    <h1 className="text-white lg:py-0 transform hover:scale-110 transition duration-300 animate__fadeInDown w-full text-center lg:mb-24 font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white"
                        data-aos="fade-down"
                        data-aos-offset="90"
                        data-aos-easing="ease-in-sine">
                        How To Join
                    </h1>
                    <div className={"relative z-10 flex flex-col lg:flex-row py-2 container mx-auto lg:justify-center mx-auto"}>
                        <div className={"w-full lg:w-3/12 flex justify-center"}>
                            <Card
                                className="mt-6 w-72 lg:h-80 h-64 mx-auto hover:scale-105 lg:mx-0 animate-pulse-slow transform  transition duration-500 text-center glossy-card text-white relative transition-all duration-300 transform  hover:shadow-lg"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                }}>
                                <CardBody className={"my-auto"}>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Share Your Story
                                    </Typography>
                                    <Typography>
                                        Contribute to the collective narrative by sharing your journey, ideas, and
                                        dreams on our interactive platform.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                        </div>
                        <img src="/assetes/arrows/mobile-arrow.png" className={"h-24 mx-auto w-4 lg:hidden"}
                             alt="mobile-arrow"/>
                        <div className={"w-full lg:w-6/12 flex items-center justify-center relative"}>
                            <Card
                                className="mt-6 hover:scale-105 w-full mx-5 glossy-card text-white animate-pulse text-center relative transition-all duration-300 transform  hover:shadow-lg"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                }}>
                                <CardBody>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Spread the Word
                                    </Typography>
                                    <Typography>
                                        Help us grow by spreading awareness about #ForwardFartherFaster. Share our
                                        initiative on your social networks, and let others know about our mission
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                            <img src="/assetes/arrows/down-arrow.png"
                                 className="z-10 absolute animate-pulse -bottom-8 left-20 transform -translate-x-1/2 hidden lg:inline"
                                 alt="arrow"/>
                        </div>
                        <img src="/assetes/arrows/mobile-arrow.png" className={"h-24 mx-auto w-4 lg:hidden"}
                             alt="mobile-arrow"/>
                        <div className={"w-full lg:w-3/12 flex justify-center"}>
                            <Card
                                className="mt-6 hover:scale-105 w-72 lg:h-80 h-72 text-center mx-auto lg:mx-0 glossy-card text-white relative transition-all duration-300 transform  hover:shadow-lg"
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                }}>
                                <CardBody className={"my-auto"}>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Share Your StoryEngage with the Community
                                    </Typography>
                                    <Typography>
                                        Dive into discussions, provide valuable feedback, and collaborate with
                                        like-minded individuals in our vibrant community.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <h3 className={"underline font-semibold"}>Discover</h3>
                                </CardFooter>
                            </Card>
                            <img src="/assetes/arrows/up-arrow.png"
                                 className="absolute -top-2 animate-pulse -right-28 transform -translate-x-1/2 hidden lg:inline"
                                 alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className={"hidden lg:block"}>
                    <section className="stage hidden lg:block relative z-20">
                        <figure className="ball-two bubble hidden lg:block">
                        </figure>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Contributers;
