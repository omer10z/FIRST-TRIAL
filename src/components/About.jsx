import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-[90vh] bg-[#f6f5f4] flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
        <div className="lg:w-1/2 mr-14">
        <h1 className="text-[18px] font-semibold mb-2  ml-[1.2] text-[#544f4c]">About Us</h1>

          <p className="text-3xl font-bold mr-8 text-[#322f2e]">
            We make our spaces as nuanced as <br />
            the lifestyles they reflect,no matter <br />
             what season it may be.<br />
          </p>

          <div className="flex justify-start mt-6 space-x-16">
            <div className="mx-2">
              <p className="text-3xl text-[#322f2e] font-bold -ml-[0.1rem]">450+</p>
              <p className="text-[14px]  text-[#322f2e] mt-2 -ml-[0.3rem]">Our experts</p>
            </div>
            <div >
              <p className="text-3xl text-[#322f2e] font-bold">500+</p>
              <p className="text-[14px] text-[#322f2e]  mt-2">projects done</p>
            </div>
            <div className="mx-4">
              <p className="text-3xl text-[#322f2e] font-bold">4.5</p>
              <p className="text-[14px] text-[#322f2e] -ml-2 mt-2">out of 5</p>
            </div>
          </div>

          
          <div className="mt-12">
            <button className="bg-[#c4bbaf] text-[#322f2e] font-bold rounded-full ml-4 py-4 px-8 hover:bg-gray-400 transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:w-1/2 w-56 mt-6 lg:mt-0 lg:ml-6 ">
          <img
            src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-european-style-simple-home-decoration-festival-image_2250013.jpg"
            alt=""
            className="w-[500px] h-[400px] object-fill ml-20 "
          />
        </div>
      </div> 
    </div>
  );
};

export default AboutUs;
