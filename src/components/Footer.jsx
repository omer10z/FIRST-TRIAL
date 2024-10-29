import React from "react";
import { BiChevronDownSquare } from "react-icons/bi";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bg-[#353535] min-h-[50vh] flex flex-col justify-start items-center p-8 mt-10">
      <div className="flex flex-wrap justify-between w-full max-w-[1218px]">
        {/* Brand Section */}
        <div className="flex flex-col w-1/4 mt-10">
          <h1 className="text-white font-poppins font-bold text-xl text-left mt-5">
            DESIGN HAVEN
          </h1>
          <p className="text-gray-200 text-[12px] font-poppins mt-4 mr-8 font-light ">
            An interior agency plays a crucial role in<br />
            transforming interior spaces into functional,<br />
            aesthetically pleasing, and personalized<br />
            environments.
          </p>
        </div>

        {/* About Us Section */}
        <div className="w-1/4 mt-14 ">
          <h2 className="text-white font-bold font-poppins text-lg ml-10 ">About Us</h2>
          <div className="mt-4">
            <a
              href="#our-history"
              className="text-white text-sm  font-poppins font-medium block mb-6 ml-10"
            >
              Our History
            </a>
            <a
              href="#why-us"
              className="text-white text-sm font-poppins font-medium block mb-4 ml-10"
            >
              Why Us
            </a>
            <a
              href="#our-users"
              className="text-white text-sm font-poppins font-medium block mb-4 ml-10"
            >
              Our Users
            </a>
            <a
              href="#our-values"
              className="text-white text-sm font-poppins font-medium block mb-4 ml-10"
            >
              Our Values
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-1/4 mt-14">
          <h2 className="text-white font-bold font-poppins text-lg text-left">Quick Links</h2>
          <div className="mt-4">
            <a
              href="Home"
              className="text-white text-sm font-medium font-poppins block mb-6"
            >
              Home
            </a>
            <a
              href="#About-us"
              className="text-white text-sm font-medium font-poppins block mb-4"
            >
              About Us
            </a>
            <a
              href="Products"
              className="text-white text-sm font-medium font-poppins block mb-4"
            >
              Products
            </a>
            <a
              href="Blogs"
              className="text-white text-sm font-medium font-poppins block mb-4"
            >
              Blogs
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="w-1/4 mt-14">
          <h2 className="text-white font-poppins font-bold text-lg text-left">
            Newsletter Signup
          </h2>
          <p className="text-gray-200 text-sm font-poppins font-light text-left mt-4">
            Subscribe to our newsletter to receive
          </p>
          <p className="text-gray-200 text-sm font-poppins font-light text-left">
            updates on the latest news!
          </p>
          <div className="mt-6 flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md font-poppins focus:outline-none"
              style={{
                border: "1px solid #fff",
                borderRight: "none",
                color: "#000",
                backgroundColor: "#353535",
                width: "80%",
              }}
            />
            <span
              className="bg-[#353535] p-2 rounded-r-md"
              style={{ border: "1px solid #fff" }}
            >
              <BiChevronDownSquare className="text-2xl" />
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full flex justify-center">
        <hr className="my-8 border-t border-white max-w-[1250px] w-full" />
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-between items-center w-full max-w-[1218px] mb-2">
        <div className="flex space-x-4 mb-[2.1rem]">
          <a href="#" className="text-[#c4bbaf] text-6xl">
            <TiSocialLinkedinCircular />
          </a>
          <a href="#" className="text-[#c4bbaf] text-6xl">
            <TiSocialTwitterCircular />
          </a>
          <a href="#" className="text-[#c4bbaf]  text-5xl mt-1">
            <FaFacebook />
          </a>
          <a href="#" className="text-[#c4bbaf] text-6xl">
            <TiSocialInstagramCircular />
          </a>
        </div>
        <p className="text-[#c4bbaf] font-semibold font-poppins  text-sm m mb-20">
          ©️ 2024 Design Haven, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
