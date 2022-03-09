import React from "react";
import { RiUserReceivedLine } from "react-icons/ri";
import ReceiveForm from "../components/ReceiveForm"

function CreateReceive() {
  return (
    <>
      {/* Title */}
      <div
        className="receiveTitle text-red-500 flex justify-center text-4xl md:text-6xl font-bold mt-5"
        style={{ fontFamily: "Montserrat" }}
      >
        Receive
      </div>
      {/* Icon */}
      <div className="receiveIcon flex justify-center text-red-500 text-3xl md:text-5xl mt-8">
        <RiUserReceivedLine />
      </div>
      {/* Description */}
      <div
        className="description mx-2 flex justify-center text-red-500 text-xl font-bold mt-12 text-center"
        style={{ fontFamily: "Montserrat" }}
      >
        Fill the form so that other users will be able to contact you to give you blood.
      </div>

      {/* Form */}
      <ReceiveForm/>
    </>
  );
}

export default CreateReceive;
