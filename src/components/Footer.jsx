import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Reenku</h3>
            <p className="text-gray-400">
              AWS Cloud Practitioner based in India, specializing in Cloud-Based Solutions.
            </p>
          </div>
         
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Reenku. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.instagram.com/reenku_13801?igsh=bDJqdHNpZWlybjd5" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/reenku-choudhary" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Reenku19" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
