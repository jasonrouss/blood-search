import Table from "../components/Table";
import give from "../assets/give.jpg";
import receive from "../assets/receive.jpg";

import { useNavigate } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";

import { RiUserReceivedLine } from "react-icons/ri";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Table />
      {/* Title */}
      <div className="iWant flex justify-center">
        <div
          className="text-red-500 mt-10 font-extrabold text-4xl "
          style={{ fontFamily: "Montserrat" }}
        >
          I want to...
        </div>
      </div>
      {/* Receive */}
      <div className="flex justify-center">
        <div className="displayPages mt-10 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="receive mt-6   rounded-lg  border-2 border-red-500 h-[370px]  w-[275px] shadow-lg shadow-slate-400 ">
            <div
              className="title mt-4 text-red-500 font-bold text-2xl flex justify-center"
              style={{ fontFamily: "Montserrat" }}
            >
              Receive <RiUserReceivedLine className="mt-1 mx-2 text-2xl" />
            </div>
            <div className="rImage flex justify-center">
              {" "}
              <img
                src={receive}
                alt="receive blood"
                className="h-[120px] mt-12 mx-2"
              />
            </div>
            <div className="rButton flex justify-center">
              <button
                onClick={() => navigate("/receive")}
                className="border-2 border-red-700 rounded-lg px-4 py-1 bg-red-500 text-slate-300 text-xl font-semibold mt-16 mx-4 mb-4"
              >
                View
              </button>
            </div>
          </div>
          {/* Give */}
          <div className="give mt-6 rounded-lg  border-2 border-red-500 h-[370px]  w-[275px]  shadow-lg shadow-slate-400">
            <div
              className="title mt-4 text-red-500 font-bold text-2xl flex justify-center"
              style={{ fontFamily: "Montserrat" }}
            >
              Give <BiDonateBlood className="mt-1 mx-2 text-2xl" />
            </div>
            <div className="rImage flex justify-center">
              {" "}
              <img
                src={give}
                alt="give blood"
                className="h-[120px] mt-12 mx-2"
              />
            </div>
            <div className="rButton flex justify-center">
              <button
                onClick={() => navigate("/give")}
                className="border-2 border-red-700 rounded-lg px-4 py-1 text-slate-300 bg-red-500 text-xl font-semibold mt-16 mx-4 mb-4"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
