import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
const Myprofile = () => {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://deploymentbackend-u0xo.onrender.com/myprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
    axios
      .get("https://deploymentbackend-u0xo.onrender.com/myreview", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setReviews(res.data));
  }, []);
  console.log(reviews);
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="myprofilesection">
      <div className="navbar flex justify-between bg-blue-300 p-3">
        <div className="logo ml-2 font-extrabold text-xl text-white flex items-center">
          <MdSpaceDashboard /> Developers Hub
        </div>
        <div className="route flex justify-evenly mr-2 items-center">
          <ul className="flex">
            <li className="mr-1 bg-white font-semibold text-blue-400 p-1 px-2 rounded">
              <Link to="/dashboard">Allprofiles</Link>
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
      <div className="profilesection">
        <div className="proFile flex justify-center items-center mt-1">
          <section className="container">
            <Link
              to="/dashboard"
              className="w-96 bg-blue-400 text-white font-semibold p-1 rounded"
            >
              Back To Profiles
            </Link>
            <div className="bg-gray-300 my-1">
              <div className=" p-2">
                <FaUserSecret className="font-bold text-7xl" />
                <h1 className="large">{data.fullname}</h1>
                <p className="lead">{data.email}</p>
                <p>{data.mobile}</p>
              </div>

              <div className="">
                <h2 className="my-1">Reviews and Ratings</h2>
                <div className=" bg-white rounded p-1 my-1 w-2/3">
                  {reviews ? (
                    reviews.map((review) => (
                      <div className="w-96 border-1">
                        <h4
                          className="text-blue-600 font-semibold
                        "
                        >
                          <Link to="#">{review.taskprovider}</Link>
                        </h4>
                        <p>{review.rating}/5</p>
                      </div>
                    ))
                  ) : (
                    <p>No Reviews yet</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
