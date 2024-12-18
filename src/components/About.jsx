import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-[90vh]  bg-[#f6f5f4]   flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
        <div className="lg:w-1/2 lg:mr-14 ">
          <h1 className="text-[18px] font-semibold font-poppins mb-2  text-[#544f4c]">About Us</h1>

          <p className="text-4xl font-bold text-[#252220] font-poppins leading-snug ">
            <span className="whitespace-nowrap ">We make our spaces as nuanced as</span><br />
            <span className="whitespace-nowrap  "> the lifestyles they reflect, no matter</span><br />
            <span className="whitespace-nowrap ">what season it may be.</span>
          </p>

          <div className="flex justify-start mt-6 space-x-20">
            <div className="text-center ">
              <p className="text-4xl text-[#252220] font-bold font-poppins">450+</p>
              <p className="text-[14px] text-[#252220]  mt-1 mr-2 font-poppins">Our experts</p>
            </div>
            <div className="text-center ">
              <p className="text-4xl text-[#252220] font-bold font-poppins">500+</p>
              <p className="text-[14px] text-[#252220] mt-1 font-poppins ml-2">projects done</p>
            </div>
            <div className="text-center ">
              <p className="text-4xl text-[#252220] font-poppins font-bold">4.5</p>
              <p className="text-[14px] text-[#252220]  mt-1 font-poppins ml-4 ">Out of 5.00</p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-[#c4bbaf] text-[#322f2e] font-bold font-poppins rounded-full py-4 px-8  hover:bg-gray-400 transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:w-1/2 w-52 mt-6  lg:mt-0 lg:ml-9">
          <img
            src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-european-style-simple-home-decoration-festival-image_2250013.jpg"
            alt="Decorative"
            className="w-[500px] h-[400px] -mr-24 ml-16 object-fill rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
