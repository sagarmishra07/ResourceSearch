import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Usernavbar from "../Navbar/Usernavbar";

const Myprofile = () => {
  const userdata = useSelector((state) => state.firebase.profile);

  return (
    <>
      <Usernavbar />
      <center>
        <div className="card">
          {userdata.experties || userdata.document ? (
            <div>
              <h1>My Profile</h1>
              <h2>{userdata.name}</h2>
              <img
                src={userdata.image}
                height="200px"
                width="200px"
                alt="Profile Pic"
              />
              /<h2>{userdata.email}</h2>
              <h2>{userdata.phone}</h2>
              <h2>Address:{userdata.address}</h2>
              <h2>Experties:{userdata.experties}</h2>
              <h2>Experience:{userdata.experience}</h2>
              <h2>Charge Per Hour:{userdata.charge}</h2>
              <h2>About me:{userdata.about}</h2>
              <a href={userdata.document} download>
                <img
                  src={userdata.document}
                  height="600px"
                  width="500px"
                  alt="DOcuments"
                />
              </a>
              <Link to={`/editprofile/${userdata.uid}`}>edit profile</Link>
            </div>
          ) : (
            <div>
              <h1> Add Your Profile First</h1>
              <Link to={`/addprofile/${userdata.uid}`}>
                <button>Add profile </button>
              </Link>
            </div>
          )}
        </div>
      </center>
    </>
  );
};

export default Myprofile;
