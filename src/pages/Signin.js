import React, { useState } from "react";
import { logo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import { Formik } from "formik";

function Signin() {
  const [form, setForm] = useState({});

  const handleValidate = () => {
    let errors = {};
    if (!form.email) {
      errors.email = "Required";
    }

    if (!form.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    
  };

  return (
    <div className="w-full font-bodyFont">
      <div className="w-full bg-gray-100 pb-10">
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="w-[350px] mx-auto flex flex-col items-center"
            >
              <Link to="/">
                <img className="w-32" src={logo} alt="logo" />
              </Link>
              <div className="w-full bg-gray-100 border border-zinc-300 rounded-md p-6">
                <h2 className="font-titleFont text-3xl font-medium mb-4">
                  Sign in
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Email or username</p>
                    <input
                      onChange={handleChange}
                      className="w-full normal-case py-1 bordder border-zinc-400
                    px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100
                    "
                      type="email"
                    ></input>
                    {errors.email && (
                      <p
                        className="text-red-600 text-xs font-semibold tracking-wide
                    flex items-center gap-2 -mt-1.5"
                      >
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Password</p>
                    <input
                      onChange={handleChange}
                      className="w-full normal-case py-1 bordder border-zinc-400
                    px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100
                    "
                      type="password"
                    ></input>
                    {errors.password && (
                      <p
                        className="text-red-600 text-xs font-semibold tracking-wide
                    flex items-center gap-2 -mt-1.5"
                      >
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <button
                    className="w-full py-1.5 text-sm font-normal
              rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                  >
                    Continue
                  </button>
                </div>
                <p className="text-xs text-black leading-4 mt-4">
                  By Continuing, you agree to ForestDise's{" "}
                  <span className="text-blue-600">Conditions of Use </span>
                  and <span className="text-blue-600">Private Notice.</span>
                </p>
                <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                  <ArrowRightIcon />
                  <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 ">
                    Need help?
                  </span>
                </p>
              </div>
              <div className="w-full text-xs text-gray-600 mt-4 flex items-center">
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                <span className="w-1/3 text-center">New to ForestDise?</span>
                <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              </div>
              <Link className="w-full" to="/register">
                <button
                  className="w-full py-1.5 px-2 mt-4 text-sm font-normal
              rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
                  Create your ForestDise account
                </button>
              </Link>
            </form>
          )}
        </Formik>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Help
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 2023-2023 ForestDise.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Signin;
