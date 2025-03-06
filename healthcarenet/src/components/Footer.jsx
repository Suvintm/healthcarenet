import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="md:mx-30">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm">
        {/* left section */}
        <div>
          <img className="w-40 pb-5" src={logo} alt="" />
          <p className="w-full text-gray-600 md:w-2/3 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
            itaque excepturi accusantium dicta eum numquam, sint non quis minus
            ullam aliquid ipsa blanditiis labore fugiat ipsam repudiandae
            possimus adipisci tempora?
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-6">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-6">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>healthcarenet@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/*----copyright text-----*/}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Healthcarenet - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
