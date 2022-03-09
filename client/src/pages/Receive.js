import React from "react";
import { RiUserReceivedLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import Feed from "../components/Feed"
import {useNavigate} from "react-router-dom"
function Receive() {
  const naviagte = useNavigate()

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
      <div className="description mx-2 px-4 flex justify-center text-center text-red-500 text-xl font-bold mt-12"  style={{ fontFamily: "Montserrat" }}>
    
          Search for blood donors near you with your matching blood type.
       
      </div>
      {/* Search  */}
      <div className="search mt-20  flex justify-center">
        <div className="searchCard mx-4  flex justify-start">
          <input
            onChange=""
            placeholder="Search ... "
            value=""
            className="focus:outline-none shadow-lg shadow-slate-500  w-[190px] md:w-[275px] h-10 px-3 pt-1 pb-2 font-semibold font-sans rounded-l-lg border-2 border-slate-700"
          ></input>
          <button
            type="submit"
            onClick=""
            className=" border-y-2 border-r-2 w-12 rounded-r-lg px-4 shadow-lg shadow-slate-500 text-slate-200 border-slate-700 bg-red-500"
          >
            <BsSearch />
          </button>
        </div>
        {/* Create */}
        <div className="create">
          <button onClick={()=>{
            naviagte('/create-receive')
          }} className=" mx-2 px-4 py-1 mt-0.5 rounded-lg border-2 bg-red-500 shadow-lg shadow-slate-500 text-slate-900 border-slate-900 font-semibold" style={{ fontFamily: "Montserrat" }}>
            Create +
          </button>
        </div>

      </div>
      
        {/* Feed */}
      
        <Feed/>
        <Feed/>

        <Feed/>

        <Feed/>
        <Feed/>

    </>
  );
}

export default Receive;
