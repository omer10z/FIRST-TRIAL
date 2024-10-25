import React from "react";
import balconyimg from "../assets/Rectangle 10.png";

const OurVision = () => {
  return (
    <div className="relative bg-[#353535] min-h-[60vh] flex justify-start items-center p-8">
      <h1 className="text-white font-bold text-4xl ml-28 mb-20">Meet Our Vision</h1>
      <div className="ml-64 mt-2">
        <p className="text-[#cbcac8] text-lg font-light mt-1 ">
          Interior agencies assist clients in sourcing and procuring furniture partening to
        </p>
        <p className="text-[#cbcac8] text-lg font-light mb-6 mr-[7rem]">
          fixtures, materials, and accessories for their projects.They leverage their industry
        </p>
        <div className="space-y-2">
          <p className="text-[#cbcac8] text-lg font-light -mt-[1.3rem]">
             connections and expertise to source  high-quality products that meet the client's
          </p>
          <p className="text-[#cbcac8] text-lg font-light ">
            specifications and budget.
          </p>
        </div>
      </div>
      <img
        src={balconyimg}
        alt="Balcony"
        className="absolute center-0 top-2/3 transform -translate-y-1/2 w-[1100px] h-[62vh] mt-56 ml-24"
      />
      <div></div>
    </div>
  );
};

export default OurVision;
