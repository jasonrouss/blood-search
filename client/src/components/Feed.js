import React from "react";
import receive from "../assets/receive.jpg";
import { BsDroplet } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import { BiLocationPlus } from "react-icons/bi";

function Feed() {
  return (
  <div className="flex justify-center">
      <div className="flex justify-start shadow-md shadow-slate-600 mx-2 mt-10 h-[150px] w-[600px] rounded-lg border-2 border-slate-600 bg-slate-300">
      <figure>
        <img
          src={receive}
          alt="donor profile"
          className=" w-16 h-16 mt-6 ml-8  mb-2 rounded-full border-2 border-slate-700"
        />
        <figcaption
          className="text-slate-800 font-semibold mx-4"
          style={{ fontFamily: "Montserrat" }}
        >
          Donor name
        </figcaption>
      </figure>

      <div className="details ">
        <div className="bType flex text-xl mt-3  font-semibold text-red-500">
          {" "}
          <BsDroplet className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" /> Donor Blood
          Type
        </div>
        <div className="tel flex text-xl mt-3  font-semibold text-red-500 ">
          <AiOutlinePhone className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" />
           Phone Number
        </div>
        <div className="location flex text-xl mt-3  font-semibold text-red-500">
          
          <BiLocationPlus className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" /> Donor
          Location
        </div>
      </div>
    </div>
  </div>
  );
}

export default Feed;
