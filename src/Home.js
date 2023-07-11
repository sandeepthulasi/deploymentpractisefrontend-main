import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homesection">
      <div className="navbar flex justify-between bg-blue-300 p-3">
        <div className="logo ml-2 font-extrabold text-xl text-white">
          Developers Corner
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
      <div className="content h-screen flex justify-center items-center">
        <div className="routesection">
          <div className="header text-white font-semibold text-3xl">
            Create a Developer Portfolio and connect with other developers
          </div>
          <div className="registerlogin flex bg-white  p-9 items-center justify-center rounded">
            <div className="register bg-blue-400 text-black w-24 p-1 mr-2 rounded text-center">
              <Link to={"/register"}>Register</Link>
            </div>
            <div className="login  bg-blue-400 text-black w-24 p-1 mr-2 rounded text-center">
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
