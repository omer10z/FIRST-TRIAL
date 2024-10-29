import React from 'react';
import blackimg from "../assets/black.avif";
import personimg from "../assets/person.avif";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="relative bg-[#353535] min-h-[130vh] flex flex-col justify-center items-center p-8 -mt-8">
      <h1 className='text-2xl font-poppins text-center mb-6' style={{ color: '#c3c3c3' }}>Testimonial</h1>

      <div className="flex flex-col items-center mb-[2rem]">
        <p className='text-white font-bold font-poppins text-6xl text-center'>What Our Customer Says</p>
        <div className="flex mt-20 ml-16 ">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-[#C3BBAF]  text-3xl mx-1" />
          ))}
        </div>
      </div>

      <p className='text-white text-2xl font-bold text-right mb-2 mr-10 ml-[29rem] '>We’ve used web design agency for the last five</p>
      <p className='text-white text-2xl font-bold text-right mb-2 mr-1 ml-[29rem]'>years. We can't understand how we've been living</p>
      <p className='text-white text-2xl font-bold text-right mb-2 mr-1 ml-[31rem]'>without web design agency. I am so pleased with this</p>
      <p className='text-white text-2xl font-bold text-center mb-2 mr-0 ml-[29rem]'>product. Absolutely wonderful! You won't regret it.</p>
      <p className='text-white text-2xl font-bold text-center mb-2 ml-[7.5rem]'>It's really wonderful.</p>
      
      <img 
        src={blackimg} 
        alt="" 
        className='absolute rounded-3xl w-[360px] h-[59vh] mr-[48rem] top-[60%] transform -translate-y-1/2' 
      />
      <img 
        src={personimg} 
        alt="" 
        className='absolute rounded-3xl w-[350px] h-[45.5vh] mr-[43rem] top-[59%] transform -translate-y-1/2' 
      />
      <h1 className='text-white font-bold text-2xl text-center ml-11 mt-4'>Jackob Daniel</h1>
      <p className='text-white text-lg font-thin text-center ml-[7rem] mt-2'>Co-Founder & CEO at Initecch</p>
      <div className="flex mt-6 ml-2">
        <IoChevronBackCircleOutline className="text-white text-6xl  cursor-pointer" />
        <IoChevronForwardCircleSharp className="text-[#c4bbaf] text-6xl mx-4 cursor-pointer" />
      </div>
    </div>
  );
}

export default Testimonial;
