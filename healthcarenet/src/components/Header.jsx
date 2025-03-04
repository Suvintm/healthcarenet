import React from "react";
import doctor from "../assets/doctor.png";
import pro from "../assets/pro.png";
import arrow from "../assets/arrow.png";

const Header = () => {
  return (
    <div className=" mt-10 mx-20 flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-[50px] px-6 md:px-10 lg:px-20  ">
      <div className="md:w-1/2 flex flex-col items-start gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div
          clas
          className="flex flex-col md:flex-row items-center gap-3 text-white text-sm md:text-lg font-light"
        >
          <img className="w-10 " src={pro} alt="" />
          <p>
            Simply browse through our extensive list oof tursted doctors,{" "}
            <br className="hidden sm:block" /> sdchedue your appointment
            hassle-free
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center  bg-white rounded-full text-gray-600   m-auto hover:scale-105 transition-all duration-300 w-06 h-20 text-sm sm:text-lg pl-4 ml-0 mt-5"
        >
          Book appointment <img className="w-15" src={arrow} alt="" />
        </a>
      </div>
      <div className="md:w-1/2  relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={doctor}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
