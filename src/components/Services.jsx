import React from 'react';

const Services = () => {
  return (
    <div className='bg-white mt-[26rem] min-h-[40vh] space-y-4 relative'>
      <h1 className='text-xl text-[#544f4c] font-semibold mb-1 ml-[9.4rem] pt-10 font-poppins'>Our Services</h1>
      <p className='text-6xl font-bold  ml-36 text-[#252220] -mb-20 font-poppins'>Providing Signature</p>
      <p className='text-6xl font-bold   text-[#252220] ml-36 font-poppins'>Interior Design Services</p>
      <p className='text-right  mr-[12.5rem] absolute  font-semibold top-24 right-0 text-[#979492] font-poppins '>Interior agencies offer a range of design services</p>
      <p className='text-right  mr-[20.1rem] absolute font-semibold top-32 right-12 text-[#979492] font-poppins '>tailored to their client needs</p>
      <button className='bg-[#c4bbaf] text-black border font-bold font-poppins border-gray-300 px-6 py-3 rounded-full hover:bg-gray-300 hover:text-gray-900 transition absolute top-40 right-44 mr-72'>
        Learn More
      </button>
      
    </div>
  );
}

export default Services;
