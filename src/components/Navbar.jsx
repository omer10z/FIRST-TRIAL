import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10" style={{ backgroundColor: '#353535', color: 'white' }}>
      <div className="text-2xl font-bold ml-[7rem]">DESIGN HAVEN</div>
      <nav className="space-x-8 font-sans">
        <a href="#home" className="hover:text-gray-300 text-sm">Home</a>
        <a href="#about" className="hover:text-gray-300 text-sm  ">About</a>
        <a href="#blog" className="hover:text-gray-300 text-sm">Blog</a>
        <a href="#services" className="hover:text-gray-300 text-sm">Services</a>
        <a href="#project" className="hover:text-gray-300 text-sm">Project</a>
      </nav>
      <a href="#contact" className="border border-gray-300 px-6 py-4 mr-24 rounded-full hover:bg-gray-300 hover:text-gray-900 transition ml-20">
        Contact Us
      </a>
    </header>
  );
};

export default Navbar;
