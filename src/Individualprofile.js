import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
const Individualprofile = ({ match }) => {
  const routeParams = useParams();
  const [rating, setRating] = useState("");
  const [taskprovider, setTaskprovider] = useState(null);
  const [reviews, setReviews] = useState([]);
  //   console.log(routeParams.id);

  useEffect(() => {
    axios
      .get("https://deploymentbackend-u0xo.onrender.com//myreview", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => setReviews(res.data));
  }, []);

  const onsubmitHandler = async () => {
    if (localStorage && localStorage.getItem("token")) {
      const profileData = await axios.get(
        "https://deploymentbackend-u0xo.onrender.com//myprofile",
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );

      setTaskprovider(profileData.data.fullname);
    }

    let review = {
      taskprovider,
      taskworker: routeParams.id,
      rating,
    };
    console.log(review.taskprovider);
    axios.post("http://localhost:1414/addreview", review, {
      header: {
        "x-token": localStorage.getItem("token"),
      },
    }).then((res)=>{
      
    })

    console.log(reviews);
  };
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
              <h1 className="large">{routeParams.fullname}</h1>
              <p className="lead">{routeParams.email}</p>
              <p>{routeParams.mobile}</p>
            </div>

            <h2 className="my-1">Reviews and Ratings</h2>
            <div className="reviews">
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
            <div className="review_section  bg-white p-1 my-1">
              <h4>Enter your reviews</h4>
              <form className="form" autoComplete="off">
                <div className="">
                  <input
                    className="p-1 w-56 mb-2"
                    type="text"
                    placeholder="Enter your rating out of 5"
                    onChange={(e) => setRating(e.target.value)}
                    name="rating"
                    value={rating}
                    required
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-green-400 border-0 p-1 px-3"
                    // value="Add Rating"
                    onClick={onsubmitHandler}
                  >
                    Add rating
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Individualprofile;
