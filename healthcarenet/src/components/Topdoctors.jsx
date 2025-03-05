import React, { useContext } from "react";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Topdoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-60 ">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        {" "}
        Simply browse through our extensive list oof tursted doctors,
      </p>
      <div className="w-full   gap-4 pt-5 gap-y-6 px-3 sm:px-0 grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-black-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-600"
            key={index}
          >
            <img className="bg-blue-100" src={item.image} alt="" />
            <div className="p-4 flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 bg-green-500 rounded-full"></p>
              <p>Available</p>
            </div>
            <div className="px-4 pb-4">
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="p-6 rounded-4xl bg-blue-200 font-bold w-40 ">
        more
      </button>
    </div>
  );
};

export default Topdoctors;
