import React from "react";
import { BsDroplet } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import { BiLocationPlus } from "react-icons/bi";
function GiveForm() {
  return (
    <div className="flex justify-center mt-10 mx-4">
      <form className="form"   style={{ fontFamily: "Montserrat" }}>
          {/* First Row */}
        <div className="form-group grid grid-cols-1 gap-4">
          <div className="name flex flex-col">
            <label htmlFor="name " className="text-3xl text-cyan-800 mb-4 font-semibold">Name:</label>
            <input
              type="text"
              className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
              id="name"
              placeholder="Enter your name"
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="form-group grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          <div className="phone flex flex-col ">
            <label htmlFor="phone " className="text-3xl text-cyan-800 mb-4 font-semibold flex"> <AiOutlinePhone className="mt-0.5"/>Phone:</label>
            <input
              type="text"
              className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[275px]"
              id="phone"
              placeholder="Enter your number"
            />
          </div>
          <div className="name flex  flex-col ">
            <label htmlFor="name " className="text-3xl text-cyan-800 mb-4 font-semibold flex"> <BsDroplet className="mt-0.5"/>   Blood Type:</label>
            <select   
              className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[220px]"
              id="name"
              placeholder="Select your blood type">
                    <option value="" disabled selected>Select your option</option>
            <option value="apos">A+</option>
            <option value="bpos">B+</option>
            <option value="abpos">AB+</option>
            <option value="opos">O+</option>
            <option value="aneg">A-</option>
            <option value="bneg">B-</option>
            <option value="abneg">AB-</option>
            <option value="oneg">O-</option>

              </select>
          </div>
        </div>

        {/* Third Row */}
        <div className="form-group grid grid-cols-1 gap-4 mt-6">
          <div className="name flex flex-col">
            <label htmlFor="name " className="text-3xl text-cyan-800 mb-4 font-semibold flex"><BiLocationPlus className="mt-0.5"></BiLocationPlus> Location:</label>
            <input
              type="text"
              className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
              id="name"
              placeholder="Enter your name"
            />
          </div>
        </div>

      <div className="submit flex justify-center">
        <button type="submit" className=" shadow-md shadow-slate-500  border-2 border-slate-700 px-4 py-2 mt-6 text-xl rounded-lg text-cyan-800 bg-red-400 font-bold ">
            Submit
        </button>
      </div>
      </form>
    </div>
  );
}

export default GiveForm;
