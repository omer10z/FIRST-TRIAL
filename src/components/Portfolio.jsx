import React from 'react';
import { MdArrowForward } from "react-icons/md";    
import { IoChevronForwardCircleSharp, IoChevronBackCircleOutline } from "react-icons/io5";
import studyimg from "../assets/Study.png";
import livingimg from "../assets/Living.png";
import interiorimg from "../assets/interiordesign.png";

const Portfolio = () => {
  return (
    <div className='bg-[#f8f7f6] w-full'>
      <h1 className="mt-20 pt-20 mb-6 h-[18vh] space-x-6 font-poppins ml-32 pl-2 text-[18px] text-[#544F4C]">Our Portfolio</h1>
      <div className="ml-[8.4rem] flex flex-col items-start -mt-6">
        <div className="flex items-center justify-between w-full pr-10"> 
          <p className="text-6xl font-poppins font-bold text-[#43403e]">Bring Homey Touches To</p>
          <div className="flex  space-x-4 mr-[5rem] -mb-[3.2rem]"> 
            <IoChevronBackCircleOutline className=" text-black text-7xl  cursor-pointer"  />
            <IoChevronForwardCircleSharp className="text-[#c4bbaf] text-7xl mx-4 cursor-pointer "  />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-6xl font-poppins font-bold text-[#43403e]">Every Part Of Your House</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ml-32 mr-20">
        <div className="relative">
          <div className="relative">
            <img src={studyimg} alt="Study Room" className="w-[400px] h-auto" />
            <button
              className="absolute bottom-4 left-4  bg-[#FFFFFF52] backdrop-blur-xl border border-[#bbb9bc] text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center"
            >
              <span>Learn More</span>
              <MdArrowForward className="mt-2 ml-4 -rotate-45 text-black" size={30} />
            </button>
          </div>
          <h1 className="mt-4 text-2xl font-bold font-poppins">Study Room</h1>
          <p className="text-gray-500 font-poppins">A calm and serene environment for productivity.</p>
          <p className="text-gray-500 font-poppins">Create your perfect study space with our designs.</p>
        </div>
        <div className="relative">
          <div className="relative">
            <img src={livingimg} alt="Living Room" className="w-[400px] h-auto" />
            <button
              className="absolute bottom-5 left-2 bg-[#FFFFFF52] backdrop-blur-xl border border-[#bbb9bc] text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center"
            >
              <span>Learn More</span>
              <MdArrowForward className="mt-2 ml-4 -rotate-45 text-black" size={30} />
            </button>
          </div>
          <h1 className="mt-4 text-3xl ml-2 font-bold font-poppins">Living Room</h1>
          <p className="text-gray-500 ml-2 font-poppins">Comfort meets style in your living room.</p>
          <p className="text-gray-500 ml-2 font-poppins">Discover cozy and elegant living space designs.</p>
        </div>
        <div className="relative">
          <div className="relative">
            <img src={interiorimg} alt="Interior Design" className="w-[400px] h-auto" />
            <button
              className="absolute bottom-5 left-2 bg-[#FFFFFF52] backdrop-blur-xl border border-[#bbb9bc] text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center"
            >
              <span>Learn More</span>
              <MdArrowForward className="mt-2 ml-4 -rotate-45 text-black" size={30} />
            </button>
          </div>
          <h1 className="mt-4 ml-2 text-3xl font-bold font-poppins">Interior Design</h1>
          <p className="text-gray-500 ml-2 font-poppins">Transform your space with timeless interior design.</p>
          <p className="text-gray-500 ml-2 font-poppins">We offer modern and classic designs for any room.</p>
        </div>
      </div>
      <div className="flex justify-center mt-24 mb-10">
        <button className="border-2 border-black bg-[#a09185] mb-10 text-black font-semibold rounded-full py-2 px-6 hover:bg-gray-400 transition duration-200">
          Visit Our Portfolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
