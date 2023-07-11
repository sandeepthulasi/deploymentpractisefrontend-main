import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./home.css";
import "./login.css";
import axios from "axios";

import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://deploymentbackend-u0xo.onrender.com/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
      });
  };
  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <div className="navbar flex justify-between bg-blue-300 p-3">
        <div className="logo ml-2 font-extrabold text-xl text-white">
          Developers Hub
        </div>
        <div className="route flex justify-evenly mr-2 items-center">
          <ul className="flex">
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              Register
            </li>
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              Login
            </li>
          </ul>
        </div>
      </div>
      <div className="contentsection  flex justify-center  h-screen">
        <section className="container flex-col mt-24 w-96 h-screen">
          <h1 className="text-xl font-semibold ">Sign In</h1>
          <div className="headd flex justify-start items-center mt-2">
            {<FaSignInAlt className="mr-2" />}
            <p className="lead">Sign into Your Account</p>
          </div>

          <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
                required
                className="w-full  mt-1"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                className="w-full mt-1"
              />
            </div>
            <input
              type="submit"
              className="bg-blue-300 text-black p-1 w-full rounded  mt-1 border-0"
              value="Login"
            />
          </form>
          <p className="my-1 flex">
            Don't have an account?{" "}
            <div className="signup font-semibold text-blue-400 ml-2">
              <Link to="/register">Sign Up</Link>
            </div>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
