import React, { useState } from "react";
import mylogo from "../assets/logo.png";
import "../components/Navbar.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";
import arrow from "../assets/arrow.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, settoken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-600">
      <img className="w-44 cursor-pointer" src={mylogo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li className="py-1 m-2">Home</li>

        <li className="py-1 m-2">Contact</li>

        <li className="py-1 m-2">About</li>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center cursor-pointer group relative">
            <img className="w-12 rounded-full " src={profile} alt="" />
            <img className="w-5" src={arrow} alt="" />
            <div className=" hidden absolute top-12 right-0 pt-15 text-base font-medium text-gray-700 z-10   group-hover:block ">
              <div className="min-w-48 bg-stone-700 flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("/myappointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My appointments
                </p>
                <p
                  onClick={() => settoken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate(".login")}
            className="hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
