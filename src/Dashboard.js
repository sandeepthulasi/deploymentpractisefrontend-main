import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://deploymentbackend-u0xo.onrender.com/allprofiles", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="dashboardsection">
      <div className="navbar flex justify-between bg-blue-300 p-3">
        <div className="logo ml-2 font-extrabold text-xl text-red flex items-center">
          <MdSpaceDashboard /> Developers Hub
        </div>
        <div className="route flex justify-evenly mr-2 items-center">
          <ul className="flex">
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              <Link to="/myprofile">MyProfile</Link>
            </li>
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              <Link
                to="/login"
                onClick={() => localStorage.removeItem("token")}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="container pt-2">
        <div className="header ml-1">
          <h1 className="font-semibold text-xl text-blue-500">Developers</h1>
          <p className="text-sm">Browse and connect with developers</p>
        </div>

        <div className="profiles flex pl-1 justify-evenly items-center pt-2">
          {data.length >= 1
            ? data.map((profile) => (
                <div className="profile mr-1 bg-slate-200 rounded flex-col justify-center items-center text-center p-1 w-96">
                  <div className="prologo flex justify-center items-center pb-2">
                    <CiUser className="text-7xl font-extrabold text-center" />
                  </div>

                  <div className="">
                    <h2 className="font-semibold">{profile.fullname}</h2>
                    <p className="">{profile.mobile}</p>
                    <p>{profile.email}</p>
                    <button className="bg-orange-600 p-1 px-2 rounded text-white mt-2">
                      <Link
                        to={`/individualprofile/${profile.fullname}/${profile.mobile}/${profile.email}/${profile.skills}/${profile._id}`}
                        className=""
                      >
                        View Profile
                      </Link>
                    </button>
                  </div>
                  <ul className="flex justify-center items-center mt-2 mb-2 ">
                    {profile.skills.split(",").map((skill) => (
                      <li className="bg-white rounded p-1 px-2 text-orange-500 mr-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : null}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
