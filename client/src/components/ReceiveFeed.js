import React from "react";
import receiveImg from "../assets/receive.jpg";
import { deleteReceive } from "../features/receive/receiveSlice";
import { useDispatch } from "react-redux";

/*Icons */

import { BsDroplet } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import { BiLocationPlus } from "react-icons/bi";

function ReceiveFeed({ receive }) {

  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className="flex justify-start shadow-md shadow-slate-600 mx-2 mt-10 h-[180px] w-[550px] rounded-lg border-2 border-slate-600 bg-slate-300">
        <figure>
          <img
            src={receiveImg}
            alt="donor profile"
            className=" w-16 h-16 mt-6 ml-8  mb-2 rounded-full border-2 border-slate-700"
          />
          <figcaption
            className="text-slate-800 font-semibold mx-4"
            style={{ fontFamily: "Montserrat" }}
          >
            {receive.name}
          </figcaption>
        </figure>

        <div className="details ">
          <div className="bType flex text-xl mt-3  font-semibold text-slate-800">
            <BsDroplet className="md:text-3xl text-2xl text-red-500 mx-4" />{" "}
            {receive.bloodType}
           {/* Only show delete button for logged in user
            */}
              <button
                onClick={() => dispatch(deleteReceive(receive._id))}
                className=" hover:cursor-pointer mx-4"
              >
                <FiTrash className="text-red-500" />
              </button>
           
          </div>
          <div className="tel flex text-xl mt-3  font-semibold text-slate-800 ">
            <AiOutlinePhone className="md:text-3xl text-2xl text-red-500 ml-4 mr-2" />
            {receive.phoneNumber}
          </div>
          <div className="location flex mb-2 text-xl mt-3  font-semibold text-slate-800">
            <BiLocationPlus className="md:text-3xl text-2xl text-red-500 ml-4 mr-2 mb" />{" "}
            {receive.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiveFeed;
