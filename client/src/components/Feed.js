import React from "react";
import give from "../assets/give.jpg";
import { deleteBlood } from "../features/blood/bloodSlice";
import { useDispatch } from "react-redux";

/*Icons */

import { BsDroplet } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import { BiLocationPlus } from "react-icons/bi";

function Feed({ bloodInfo }) {

  const dispatch = useDispatch();
 
  return (
    <div className="flex justify-center">
      <div className="flex justify-start shadow-md shadow-slate-600 mx-6 mt-10 md:h-[180px] md:w-[550px] rounded-lg border-2 border-slate-600 bg-slate-300">
        <figure>
          <img
            src={give}
            alt="donor profile"
            className=" w-16 h-16 mt-6 ml-8  mb-2 rounded-full border-2 border-slate-700"
          />
          <figcaption
            className="text-slate-800 font-semibold mx-4"
            style={{ fontFamily: "Montserrat" }}
          >
            {bloodInfo.name}
          </figcaption>
        </figure>

        <div className="details ">
          <div className="bType flex text-xl mt-3  font-semibold text-slate-800">
            <BsDroplet className="md:text-3xl text-2xl text-red-500 mx-4" />{" "}
            {bloodInfo.bloodType}
           {/* Only show delete button for logged in user
            */}
              <button
                onClick={() => dispatch(deleteBlood(bloodInfo._id))}
                className="mx-4 hover:cursor-pointer"
              >
                <FiTrash className="text-red-500 " />
              </button>
           
          </div>
          <div className="tel flex text-xl mt-3  font-semibold text-slate-800 ">
            <AiOutlinePhone className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" />
            {bloodInfo.phoneNumber}
          </div>
          <div className="location flex text-xl mt-3  font-semibold text-slate-800">
            <BiLocationPlus className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" />{" "}
            {bloodInfo.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
