import React from "react";
import { MdArrowForward } from "react-icons/md"; // Import the arrow icon
import residentimg from "../assets/Rectangle 11.png";
import spaceimg from "../assets/Rectangle 12.png";
import commercialimg from "../assets/Rectangle 13.png";

const Design = () => {
  return (
    <div>
      {/* Residential Design Section */}
      <div className="relative bg-white min-h-[50vh] flex justify-start items-center p-8 hover:bg-[#3b3b3a] group ">
        <img src={residentimg} alt="" className="ml-28 mt-8" />
        <div className="ml-8">
          <h1 className="text-black text-5xl font-poppins  group-hover:text-white transition">
            Residential
          </h1>
          <h1 className="text-black text-5xl font-poppins mt-4 group-hover:text-white transition">
            Design
          </h1>
        </div>
        <div className="ml-12">
          <div className="ml-8">
            <p className="  font-poppins  text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[0.8rem]">
              They choose color schemes, materials, and furnishings
            </p>
            <div className="flex items-center mt-2">
              <p className=" font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[2rem]">
                to create a cohesive and visually appealing atmosphere
              </p>
              <button className="bg-[#cfcfcf] rounded-full p-4 text-lg w-14 h-14 -rotate-45 ml-24 transform -translate-y-2">
                <MdArrowForward className="text-white text-2xl" />
              </button>
            </div>
            <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition  -mt-[1.5rem]">
              that aligns with the client's preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Space Planning Section */}
      <div className="relative bg-white min-h-[50vh] flex justify-start items-center p-8 hover:bg-[#3b3b3a] group">
        <img src={spaceimg} alt="" className="ml-28 mt-8" />
        <div className="ml-8">
          <h1 className="text-black text-5xl font-poppins group-hover:text-white transition">
            Space
          </h1>
          <h1 className="text-black text-5xl font-poppins  mt-4 group-hover:text-white transition">
            Planning
          </h1>
        </div>
        <div className="ml-24">
          <div className="ml-8 mt-[0.1rem]">
            <p className="font-poppins text-lg text-[#84807e]  group-hover:text-[#84807e] transition -mt-[0.9rem]">
              Interior agencies stay abreast of the latest design trends.
            </p>
            <div className="flex items-center mt-2">
              <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[2rem]">
                innovations, and technologies in the industry. They incorporate
              </p>
              <button className="bg-[#cfcfcf] rounded-full p-4 text-lg w-14 h-14 -rotate-45 ml-12 transform -translate-y-2">
                <MdArrowForward className="text-white text-2xl" />
              </button>
            </div>
            <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[1.5rem]">
              current design trends and best practices into their projects.
            </p>
          </div>
        </div>
      </div>

      {/* Commercial Design Section */}
      <div className="relative bg-white min-h-[50vh] flex justify-start items-center p-8 hover:bg-[#3b3b3a] group">
        <img src={commercialimg} alt="" className="ml-28 mt-8" />
        <div className="ml-8">
          <h1 className="text-black text-5xl font-poppins group-hover:text-white transition">
            Commercial
          </h1>
          <h1 className="text-black text-5xl font-poppins mt-4 group-hover:text-white transition">
            Design
          </h1>
        </div>
        <div className="ml-8">
          <div className="ml-8 mt-6">
            <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[2rem]">
              {" "}
              One of the primary responsibilities of an interior agency is to
            </p>
            <div className="flex items-center mt-2">
              <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[2rem]">
                optimize the functionality and flow of interior spaces. They
              </p>
              <button className="bg-[#cfcfcf] rounded-full p-4 text-lg w-14 h-14 -rotate-45 ml-20 transform -translate-y-2">
                <MdArrowForward className="text-white text-2xl" />
              </button>
            </div>
            <p className="font-poppins text-lg text-[#84807e] group-hover:text-[#84807e] transition -mt-[1.5rem]">
              incorporate current design trends and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* See more button */}
      <div className="flex justify-center mt-8">
        <button className="border-2 font-poppins border-black bg-white text-black  rounded-full py-2 px-6 hover:bg-gray-400 transition duration-200">
          See more
        </button>
      </div>
    </div>
  );
};

export default Design;
