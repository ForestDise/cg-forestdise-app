import React, { useState } from "react";
import { logo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";

function Registration() {
  const [form, setForm] = useState({});
  const [emailUsed, setEmailUsed] = useState(false)
  const navigate = useNavigate();

  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[0-9a-zA-Z]{8,}$/
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidate = () => {
    let errors = {};
    if (!form.clientName) {
      errors.clientName = "Required";
    }

    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email";
    } 

    if (!form.password) {
      errors.password = "Required";
    } else if (!REGEX.password.test(form.password)) {
      errors.password = "Password must be at least 8 characters";
    }

    if(form.cpassword !== form.password){
      errors.cpassword = "Password does not match"
    }
    return errors;
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
              <div className="w-full border border-zinc-200 bg-gray-100 rounded-md p-6">
                <h2 className="font-titleFont text-3xl font-medium mb-4">
                  Create Account
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Your name</p>
                    <input
                      placeholder="First and last name"
                      onChange={handleChange}
                      name="clientName"
                      value={form.clientName || ""}
                      className="w-full placeholder:normal-case placeholder:text-sm normal-case py-1 bordder border-zinc-400
                    px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100
                    "
                      type="text"
                    ></input>
                    {errors.clientName && (
                      <p
                        className="text-red-600 text-xs font-semibold tracking-wide
                    flex items-center gap-2 -mt-1.5"
                      >
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors.clientName}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Email</p>
                    <input
                      name="email"
                      onChange={handleChange}
                      value={form.email || ""}
                      className="w-full normal-case py-1 bordder border-zinc-400
                    px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100
                    "
                      type="text"
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
                      name="password"
                      onChange={handleChange}
                      value={form.password || ""}
                      placeholder="At least 8 characters"
                      className="w-full placeholder:normal-case placeholder:text-sm normal-case py-1 bordder border-zinc-400
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
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">Re-enter Password</p>
                    <input
                      name="cpassword"
                      onChange={handleChange}
                      value={form.cpassword || ""}
                      className="w-full normal-case py-1 bordder border-zinc-400
                    px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]
                    focus-within:shadow-amazonInput duration-100
                    "
                      type="password"
                    ></input>
                    {errors.cpassword && (
                      <p
                        className="text-red-600 text-xs font-semibold tracking-wide
                    flex items-center gap-2 -mt-1.5"
                      >
                        <span className="italic font-titleFont font-extrabold text-base">
                          !
                        </span>
                        {errors.cpassword}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-1.5 text-sm font-normal
              rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
              border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                  >
                    Continue
                  </button>
                </div>
                <p className="text-xs text-black leading-4 mt-4">
                  By creating an account, you agree to ForestDise's{" "}
                  <span className="text-blue-600">Conditions of Use </span>
                  and <span className="text-blue-600">Private Notice.</span>
                </p>
                <div>
                  <p className="text-xs text-black">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <span
                        className="text-xs text-blue-600 hover:text-orange-600
            hover:underline underline-offset-1 cursor-pointer duration-100"
                      >
                        Sign in{" "}
                        <span>
                          <ArrowRightIcon />
                        </span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
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

export default Registration;
