import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { BsDroplet } from "react-icons/bs";

import { RiUserReceivedLine } from "react-icons/ri";

function Table() {
  return (
    <>
      <div
        div
        className="flex justify-center"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className=" TABLE  shadow-lg  mx-6">
          <div className="thead grid grid-cols-3 gap-4 text-xl text-red-500 font-extrabold   border-2 mt-6 border-cyan-900 rounded-lg">
            <div className="bType flex mx-2 my-2 ">
              Blood Type{" "}
              <BsDroplet className="mt-1 mx-2 text-5xl sm:text-2xl" />
            </div>
            <div className="canGive flex my-2  px-2 border-x-2 border-cyan-900 ">
              Can Give To{" "}
              <BiDonateBlood className="mt-1 mx-2 text-5xl sm:text-2xl" />{" "}
            </div>
            <div className="canReceive flex mx-1 my-2 ">
              Can Receive From
              <RiUserReceivedLine className="mt-1 mx-2 text-7xl sm:text-2xl" />
            </div>
          </div>
          {/* A+ */}
          <div className="apos grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              {" "}
              A+ <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              A+ , AB+
            </div>
            <div className="canReceive mx-2 my-2">A+/- , O+/-</div>
          </div>
          {/* A- */}
          <div className="aneg grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              {" "}
              A- <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              A+/- , AB+/-
            </div>
            <div className="canReceive mx-2 my-2">A- , O-</div>
          </div>
          {/* B+ */}
          <div className="bpos grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              {" "}
              B+ <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              B+ , AB+
            </div>
            <div className="canReceive mx-2 my-2">B+/- , O+/-</div>
          </div>
          {/* B- */}
          <div className="bneg grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              B- <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              B+/- , AB+/-
            </div>
            <div className="canReceive mx-2 my-2">B- , O-</div>
          </div>
          {/* O+ */}
          <div className="opos grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              O+ <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-4 border-x-2 border-cyan-900">
              A+ , B+ , AB+ , O+
            </div>
            <div className="canReceive mx-2 my-2">O+ , O-</div>
          </div>
          {/* O- */}
          <div className="oneg grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              O- <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              All Blood Types
            </div>
            <div className="canReceive mx-2 my-2"> O-</div>
          </div>
          {/* AB+ */}
          <div className="abpos grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              AB+
              <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              AB+
            </div>
            <div className="canReceive mx-2 my-2"> All Blood Types</div>
          </div>
          {/* AB- */}
          <div className="abneg grid grid-cols-3 gap-4 text-xl text-red-500     border-x-2  border-b-2 border-cyan-900 rounded-lg">
            <div className="bType font-bold mx-2 my-2 flex">
              AB- <BsDroplet className="mt-1 mx-2" />
            </div>
            <div className="canGive my-2 px-2 border-x-2 border-cyan-900">
              AB+ , AB-
            </div>
            <div className="canReceive mx-2 my-2"> AB-, A-, B- , O-</div>
          </div>
        </div>
      </div>
      <div
        className="downloadImage flex justify-center text-lg mt-2 text-red-500  font-bold underline"
        style={{ fontFamily: "Montserrat" }}
      >
        <a
          download="table"
          target="_blank"
          rel="noreferrer"
          href="https://cdn.discordapp.com/attachments/901150871927279636/952483509245710336/Screenshot_2022-03-13_102830.jpg"
        >
          {" "}
          Click to download image
        </a>
      </div>
    </>
  );
}

export default Table;
