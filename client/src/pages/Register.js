import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import ClipLoader from "react-spinners/ClipLoader";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
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

    if (password !== password2) {
      alert("Passwords don't match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }

    if (isLoading) {
      return <ClipLoader />;
    }
  };

  return (
    <section style={{ fontFamily: "Montserrat" }}>
      {/*  */}
      <div className=" flex justify-center">
        <div className="title mt-8 mb-6 text-5xl font-bold text-cyan-800 ">
          Register
        </div>
      </div>
      <form onSubmit={onSubmit}>
        {/* Name */}
        <div className="flex justify-center">
          <div className="form-group grid grid-cols-1 gap-4 mt-8">
            <div className="name flex flex-col">
              <label
                htmlFor="name "
                className="text-3xl text-cyan-800 mb-4 font-semibold flex"
              >
                Name:
              </label>
              <input
                type="text"
                className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="flex justify-center">
          <div className="form-group grid grid-cols-1 gap-4 mt-8">
            <div className="name flex flex-col">
              <label
                htmlFor="email "
                className="text-3xl text-cyan-800 mb-4 font-semibold flex"
              >
                Email:
              </label>
              <input
                type="text"
                className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* Password */}
        <div className="flex justify-center">
          <div className="form-group grid grid-cols-1 gap-4 mt-8">
            <div className="name flex flex-col">
              <label
                htmlFor="password "
                className="text-3xl text-cyan-800 mb-4 font-semibold flex"
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                id="password"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex justify-center">
          <div className="form-group grid grid-cols-1 gap-4 mt-8">
            <div className="name flex flex-col">
              <label
                htmlFor="password2 "
                className="text-3xl text-cyan-800 mb-4 font-semibold flex"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control shadow-md shadow-slate-500  px-2 py-4 bg-slate-300  rounded-lg border-2 border-slate-700 text-xl h-8 w-[300px] md:w-[508px]"
                id="password2"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* Submit */}
        <div className="submit flex justify-center">
          <button
            type="submit"
            className=" shadow-md shadow-slate-500  border-2 border-cyan-900 px-4 py-2 mt-10 text-xl rounded-lg text-slate-300 bg-cyan-700 font-bold "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
