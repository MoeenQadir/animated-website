import React from 'react';
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import {BsInstagram} from "react-icons/bs";
import {FaDiscord, FaTwitter} from "react-icons/fa";

const Privacy = () => {
    return (
        <>
            <div className="relative bg-[#181539] lg:bg-none">
                <img
                    className="absolute inset-0 w-full lg:h-screen h-auto"
                    style={{"height":"auto"}}
                    src="/assetes/screens/screen5.png"
                    alt="hero background image"
                />
                <div className="relative mx-auto">
                    <div className="mb-12 text-center space-y-4 md:mb-20 md:pt-72 lg:w-11/12 lg:mx-auto">
                            <Button  className="rounded-full my-16 bg-[#ffffca] text-bold text-black">
                                Join the Movement
                            </Button>
                            <div className={"w-full flex justify-center"}>
                                <div className={"w-full lg:w-11/12 flex items-center "}>
                                    <div className={"w-full lg:w-10/12 mx-auto flex items-center justify-center"}>
                                        <Card className="mt-6 w-full mx-4 lg:px-0 glossy-card text-white text-center relative">
                                            <CardBody>
                                                <Typography variant="h5" color="white" className="mb-2">
                                                    Data Privacy
                                                </Typography>
                                                <Typography>
                                                    We are committed to transparency regarding the handling of your data. Our data privacy practices align with relevant regulations, ensuring that your trust is well-placed. By participating in #ForwardFartherFaster, you can be confident that your valuable contributions are handled responsibly, empowering you to share and engage in a secure and protected digital environment.
                                                </Typography>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={"w-full text-center"}>
                    <h3 className={"text-white text-2xl md:text-3xl lg:mt-32 lg:text-4xl font-bold"}>Share Your Story</h3>
                        <h5 className={"text-white mt-6"}>Type your story below and be a catalyst for change. Your words matter, and your voice makes a <br/> difference. Together, let's create a future filled with shared dreams and collective progress</h5>
                    </div>
                    <div className={"container mx-auto"}>
                        <h3 className={"text-white ms-4 md:ms-8 lg:ms-64 text-2xl md:text-3xl lg:mt-32 mt-16 lg:text-4xl font-bold"}>Describe yourself</h3>
                        <div className={"lg:w-9/12 w-11/12 mx-auto flex justify-center flex-col items-center"}>
                            <textarea className="resize-x text-card mt-6 h-96 w-full lg:w-10/12 p-5 text-white shadow-md" placeholder={"Tell us about yourself here...."}></textarea>
                            <div className={"flex justify-end w-full me-4 lg:me-44  text-white mt-4"}>
                                <p>Minimum 1024 Characters</p>
                            </div>
                            <div className={"flex justify-center mt-8"}>
                                <Button  className="rounded-full mt-6 bg-[#ffffca] text-bold text-black">
                                    Submit NOW
                                </Button>
                            </div>
                        </div>
                       <footer className={"lg:mt-40 mt-20 text-white w-full flex flex-col items-center justify-center"}>
                           <h3>Terms of Service</h3>
                           <div className={"flex space-x-4"}>
                               <span className={"h-8 w-8 rounded-full mt-8 flex justify-center items-center border-2 border-white"}><BsInstagram /></span>
                               <span className={"h-8 w-8 rounded-full mt-8 flex justify-center items-center border-2 border-white"}><FaTwitter className={"text-white"}/></span>
                               <span className={"h-8 w-8 rounded-full mt-8 flex justify-center items-center border-2 border-white"}><FaDiscord className={"text-white"}/></span>
                           </div>
                       </footer>
                    </div>
                    <hr className={"h-2 w-full mt-8"}/>
                    <div className={"w-full text-center text-white mt-4"}>Copyright by 2024</div>
                </div>
            </div>
        </>
    );
};

export default Privacy;