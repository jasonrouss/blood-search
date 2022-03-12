import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBlood } from "../features/blood/bloodSlice";
/*Icons*/
import { BsDroplet } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
function GiveForm() {
  const [bloodType, setBloodType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const [location, setLocation] = useState("");
const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlood({ bloodType, phoneNumber, location  }));
    setPhoneNumber("");
    setLocation("");
    setBloodType("");
   
    navigate("/give");
  };

  return (
    <div className="flex justify-center mt-10 mx-4">
      <form
        className="form"
        onSubmit={onSubmit}
        style={{ fontFamily: "Montserrat" }}
        
      >
      
        {/* First Row */}
        <div className="form-group grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          <div className="phone flex flex-col ">
            <label
              htmlFor="phone "
              className="text-3xl text-cyan-800 mb-4 font-semibold flex"
            >
              <AiOutlinePhone className="mt-0.5" />
              Phone:
            </label>
            <input
              type="number"
              className="form-control shadow-md shadow-slate-500  px-2  bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[275px]"
              id="phone"
              placeholder="Enter your number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="name flex  flex-col ">
            <label
              htmlFor="bloodType "
              className="text-3xl text-cyan-800 mb-4 font-semibold flex"
            >
              <BsDroplet className="mt-0.5" /> Blood Type:
            </label>
            <select
              className="form-control  shadow-md text-slate-900 shadow-slate-500  px-2  bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[220px]"
              id="bloodType"
              name="bloodType"
              onChange={(e) => setBloodType(e.target.value)}
              value={bloodType}
            >
              {/* Select option */}

              <option value="" disabled selected>
                Select blood type
              </option>

              <option>A+ apos </option>
              <option>B+ bpos</option>
              <option>AB+ abpos</option>
              <option>O+ opos</option>
              <option>A-aneg</option>
              <option>B- bneg</option>
              <option>AB- abneg</option>
              <option>O- oneg </option>
            </select>
          </div>
        </div>

        {/* Second Row */}
        <div className="form-group grid grid-cols-1 gap-4 mt-6">
          <div className="name flex flex-col">
            <label
              htmlFor="location "
              className="text-3xl text-cyan-800 mb-4 font-semibold flex"
            >
              <BiLocationPlus className="mt-0.5"></BiLocationPlus> Location:
            </label>
            <input
              type="text"
              className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
              id="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="submit mt-6 flex justify-center">
          <button
            type="submit"
            className=" shadow-md shadow-slate-500  border-2 border-cyan-900 px-4 py-2 mt-6 text-xl rounded-lg text-slate-300 bg-cyan-700 font-bold "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GiveForm;
