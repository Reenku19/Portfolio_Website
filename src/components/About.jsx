import React from "react";
import AboutImage from "../assets/reenku.png";

export const About = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img
                        src={AboutImage}
                        alt=""
                        className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0"
                    />
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            Passionate cloud practitioner with 0.5+ years of experience in Amazon
                            Web Services. Skilled in Amazon EC2, Infrastructure as code, automation,
                            and migration. Dedicated to delivering scalable, reliable,
                            and cost-effective cloud solutions and committed to staying up-to-date
                            with the latest   cloud technologies and industry trends.

                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    Docker
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    Github
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    Terraform
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-5/12"
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="mt-12 flex justify-between text-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                                        0.5+
                                    </h3>
                                    <p>Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                                        10+
                                    </h3>
                                    <p>Projects Completed</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;