import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/*Icons */
import { RiUserReceivedLine } from "react-icons/ri";

import { GoSignIn } from "react-icons/go";
import { CgLogIn } from "react-icons/cg";
/*Components */
import ReceiveForm from "../components/ReceiveForm";




function CreateReceive() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      {!user ? (
        <>
          <div className="flex justify-center">
            <div className="loginTitle text-4xl text-cyan-700 mb-4 font-semibold flex mt-20">
              Login or create an account to be able to create a give post
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="login  flex justify-center rounded-lg py-1.5 text-xl text-cyan-700  w-[275px] border-2 border-cyan-900  hover:border-red-700 hover:bg-red-500 hover:text-slate-200"
            >
              Login <CgLogIn className="mx-2 mt-2 text-lg"/>
            </button>
          </div>

          <div className="flex justify-center mt-20">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="register flex justify-center rounded-lg py-1.5 text-2xl text-slate-300 bg-cyan-700  w-[275px] border-2 border-cyan-900 hover:border-red-700 hover:text-red-500 hover:bg-slate-200"
            >
              Create an Account <GoSignIn className="mx-2 mt-2.5 text-lg"/>
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
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
            Fill the form so that other users will be able to contact you to
            give you blood.
          </div>
          {/* Form */}
          <ReceiveForm />
        </>
      )}
    </>
  );
}

export default CreateReceive;
