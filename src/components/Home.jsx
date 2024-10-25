import React from "react";
import Image1 from "/work/first-trial/src/assets/avatar4.avif";
import Image2 from "/work/first-trial/src/assets/avatar5.avif";
import Image3 from "/work/first-trial/src/assets/avatar6.avif";
import Image4 from "/work/first-trial/src/assets/interior.jpg";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#353535",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 w-full mr-20 max-w-6xl">
        <div className="flex-1 mr-22">
          <img
            src={Image4}
            alt="Space"
            className="w-[470px] h-[70vh] md:h-[60vh] object-cover rounded-lg ml-[0.1rem] shadow-lg"
          />
        </div>
        <div className="flex-1  text-center md:text-left ">
        <h1 className="text-white    font-playfair font-extrabold leading-tight ">
  <span className="block -mt-[1rem] text-[64px]  ">Unleash Your</span>
  <span className="block  text-[64px]">Space's Potential</span>
</h1>

          <p className="text-[#CFCFCF] text-[18px] text-sm font-extralight md:text-xl mt-10">
            Interior design is a dynamic field that combines creativity with
            technical expertise. Successful interior designers stay updated on
            design trends, materials, and technologies to deliver innovative and
            personalized solutions to their clients.
          </p>

          <div className="mt-12 flex items-center space-x-2">
            <button className="border bg-[#c4bbaf] text-[18px]  px-6 py-4 rounded-full font-bold hover:bg-gray-300 hover:text-gray-900 transition">
              Explore Now
            </button>
            <div className="flex items-center space-x-0">
              <img
                src={Image1}
                alt="Avatar 1"
                className="min-w-3 h-[8vh] rounded-full ml-2 -mr-[0.1rem]  "
              />
              <img
                src={Image2}
                alt="Avatar 2"
                className="min-w-3 h-[8vh] rounded-full -mr-[0.2rem]"
              />
              <img
                src={Image3}
                alt="Avatar 3"
                className="min-w-3 h-[8vh] rounded-full ml-1"
              />
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-[24px] text-white font-bold mr-20">750+</h1>
              <p className="text-gray-300 mr-4 text-[16px] ">Happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
