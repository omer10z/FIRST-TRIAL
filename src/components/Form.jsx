import React from "react";
import formimg from "../assets/form.avif";

const Form = () => {
  return (
    <div className="bg-[#f9f8f7] relative min-h-[60vh] flex flex-col items-start p-8 ml-1">
      <div className="mt-20">
        <h1 className="text-6xl text-[#252220] font-bold ml-36">Interested In</h1>
        <h1 className="text-6xl text-[#252220] font-bold ml-36">Working With Us</h1>
        <p className="ml-[9.1rem] mt-12 text-lg font-light">
          Work together and we'll help with our best interior design
        </p>
        <form className="ml-[9rem] mt-8 flex flex-col space-y-6">
          <div className="flex space-x-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name here"
                className="border border-gray-500 rounded-lg p-2 w-[290px] h-[8vh] focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email here"
                className="border border-gray-500 rounded-lg p-2 w-[290px] h-[8vh] focus:outline-none focus:border-black"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              className="border border-gray-500 rounded-lg p-2 w-[610px] h-[9vh] focus:outline-none focus:border-black"
            ></textarea>
            <div className="flex justify-center mt-8">
              <button className="border-2 bg-[#a09185] text-black font-semibold rounded-full py-4 px-[17rem] hover:bg-gray-400 transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute right-0 top-0 h-[120vh] w-[430px] bg-[#d7d1c9] z-0" />
      <img
        src={formimg}
        alt="Form"
        className="rounded-xl ml-[51rem] w-[500px] z-10 relative -mt-[32.7rem] h-[74vh]"
      />
    </div>
  );
};

export default Form;
