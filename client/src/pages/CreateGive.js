import React from 'react'
import { BiDonateBlood } from "react-icons/bi";
import GiveForm from "../components/GiveForm"
function CreateGive() {
  return (
   <>
    {/* Title */}
    <div
        className="receiveTitle text-red-500 flex justify-center text-4xl md:text-6xl font-bold mt-5"
        style={{ fontFamily: "Montserrat" }}
      >
        Give
      </div>
      {/* Icon */}
      <div className="receiveIcon flex justify-center text-red-500 text-3xl md:text-5xl mt-8">
        <BiDonateBlood />
      </div>
      {/* Description */}
      <div
        className="description mx-2 flex justify-center text-red-500 text-xl font-bold mt-12 text-center" 
        style={{ fontFamily: "Montserrat" }}
      >
        Fill the form so that other users that needs blood will able to contact you.
      </div>
      <GiveForm/>
   </>
  )
}

export default CreateGive