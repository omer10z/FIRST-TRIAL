import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between  items-center py-6 px-10 " style={{ backgroundColor: '#474746', color: 'white' }}>
      <div className="text-[28px] text-[#FFFFFF]   mb-2 font-poppins  font-semibold ml-[7rem]">DESIGN HAVEN</div>
      <nav className="space-x-8  mb-2 ml-10 font-poppins">
        <a href="#home" className="text-[#FFFFFF] text-lg">Home</a>
        <a href="#about" className="text-[#FFFFFF] text-lg  ">About</a>
        <a href="#blog" className="text-[#FFFFFF] text-lg">Blog</a>
        <a href="#services" className="text-[#FFFFFF] text-lg">Services</a>
        <a href="#project" className="text-[#FFFFFF] text-lg">Project</a>
      </nav>
      <a href="#contact" className="border border-gray-300 px-8 mt-4 py-4 mr-24 mb-4 font-poppins rounded-full hover:bg-gray-300 hover:text-gray-900 transition ml-20">
        Contact Us
      </a>
    </header>
  );
};

export default Navbar;
