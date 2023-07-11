import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { AiOutlineUserAdd } from "react-icons/ai";
const Registration = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    skills: "",
    password: "",
    confirmpassword: "",
  });
  const changeHandler = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { fullname, email, mobile, skills, password, confirmpassword } = data;

  console.log(data);
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://sandeepthulasi-deploymentpractisebackend.onrender.com/", data)
      .then((res) => {
        alert(res.data);
      });
  };

  return (
    <div>
      <div className="navbar flex justify-between bg-blue-300 p-3">
        <div className="logo ml-2 font-extrabold text-xl text-white">
          Developers Hub
        </div>
        <div className="route flex justify-evenly mr-2 items-center">
          <ul className="flex">
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              <Link to="/register">Register</Link>
            </li>
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contentsection flex justify-center  h-screen">
        <section className="container flex-col mt-24 w-96 h-screen">
          <h1 className="text-xl font-semibold">Sign Up</h1>
          <div className="create flex items-center">
            <AiOutlineUserAdd className="mr-2 text-xl mt-1" />
            <p className="lead">Create Your Account</p>
          </div>

          <form className="form" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="fullname"
                onChange={changeHandler}
                required
                className="w-full  mt-1"
                value={fullname}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
                className="w-full  mt-1"
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                onChange={changeHandler}
                className="w-full  mt-1"
                value={mobile}
              />
            </div>
            <div className="form-group flex-col">
              <input
                type="text"
                placeholder="Skill"
                name="skills"
                onChange={changeHandler}
                className="w-full  mt-1"
                value={skills}
              />
              <small className="w-full  mt-1">
                Please provide skills by separation of comma <b>(, )</b>
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                className="w-full  mt-1"
                value={password}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={changeHandler}
                className="w-full  mt-1"
                value={confirmpassword}
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="bg-green-300 text-black p-1 w-full rounded  mt-1 border-0"
            />
          </form>
          <p className="my-1 flex">
            Already have an account?
            <div className="signinin text-green-700 font-semibold ml-1">
              <Link to="/login">Sign In</Link>
            </div>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Registration;
