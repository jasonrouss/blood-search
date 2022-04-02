import { useState, useEffect } from "react";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert("Error please try again");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-72 mb-64">
        <ClipLoader />
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      {/*  */}
      <div className=" flex justify-center">
        <div className="title mt-8 mb-6 text-5xl font-bold text-red-500 ">
          Login
        </div>
      </div>
      <section>
        <form onSubmit={onSubmit}>
          {/* Email */}
          <div className="flex justify-center">
            <div className="form-group grid grid-cols-1 gap-4 mt-6">
              <div className="name flex flex-col">
                <label
                  htmlFor="email "
                  className="text-3xl text-red-500 mb-4 font-semibold flex"
                >
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-red-100  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {/* Password */}
          <div className="flex justify-center">
            <div className="form-group grid grid-cols-1 gap-4 mt-6">
              <div className="name flex flex-col">
                <label
                  htmlFor="password "
                  className="text-3xl text-red-500 mb-4 font-semibold flex"
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-red-100  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          {/* Create an account */}
          <div className="flex justify-center">
            <div className=" mx-4 text-lg text-red-500 mt-6  font-semibold ">
              Don't have an account , create one for free by clicking
              <a
                href="/register"
                className="ml-1 underline hover:curoser-pointer"
              >
                here
              </a>
            </div>
          </div>
          {/* Submit */}
          <div className="submit flex justify-center">
            <button
              type="submit"
              className=" shadow-md shadow-slate-500  border-2 border-red-700 px-4 py-2 mt-10 text-xl rounded-lg text-slate-300 bg-red-600 font-bold "
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
