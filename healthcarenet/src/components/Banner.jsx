import React from "react";
import bannerimage from "../assets/bannerimage.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-80 bg-blue-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-30">
      {/* left side */}
      <div className="flex-1 py-20 sm:py-10 md:py-16 lg:py-5  ">
        <div className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          <p className="px-20 pt-15 ">Book Appointment</p>
          <p className="mt-4 px-20 text-gray-400 ">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="px-5 py-3 mx-20  bg-white text-sm sm:text-base text-gray-600 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create account
        </button>
      </div>
      {/* right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={bannerimage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
