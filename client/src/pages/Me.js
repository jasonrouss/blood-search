import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
function Me() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      {user ? (
        <>
          <div>
            {/* Title */}
            <div className="flex mt-20 justify-center">
              <div className="title text-cyan-700 font-bold mt-16 text-5xl">
                Logout
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onLogout}
                className="login mt-32 py-2 flex justify-center  rounded-lg  text-xl text-cyan-700  w-[275px] border-2 border-cyan-900  hover:border-red-700 hover:bg-red-500 hover:text-slate-200"
              >
                <FaSignOutAlt className="mt-1  mx-2" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ fontFamily: "Montserrat" }}>
            {/* Title */}
            <div className="flex justify-center">
              <div className="title text-cyan-700 font-bold mt-16 text-5xl">
                Login or Register
              </div>
            </div>

            {/* Login */}
            <div className="flex justify-center mt-20 mb-6">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="login  rounded-lg py-1 text-xl text-cyan-700  w-[275px] border-2 border-cyan-900  hover:border-red-700 hover:bg-red-500 hover:text-slate-200"
              >
                Login
              </button>
            </div>
            {/* Sign Up */}
            <div className="flex justify-center mt-14 mb-4">
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="login  rounded-lg py-1 text-xl text-slate-300 bg-cyan-700  w-[275px] border-2 border-cyan-900 hover:border-red-700 hover:text-red-500 hover:bg-slate-200"
              >
                Register
              </button>
            </div>
            <div className="flex justify-center">
              <div className="title text-cyan-800 font-bold mt-16 text-xl">
                Or you can use Email: demo@demo.com Password: demo to try out
                the app without signing up.
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Me;
