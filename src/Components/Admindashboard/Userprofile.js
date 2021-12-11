import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { db } from "../../firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Userprofile = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    let unsubscribe;
    const docRef = (unsubscribe = db.collection("users").doc(id));

    const result = await docRef.get();

    if (result.exists) {
      setUser(result.data());
    }

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <center>
        <h1>My Profile</h1>
        <h2>NAME:{user.name}</h2>
        <img src={user.image} height="200px" width="200px" alt="Profile Pic" />/
        <h2>EMAIL:{user.email}</h2>
        <h2>Phone:{user.phone}</h2>
        <h2>Address:{user.address}</h2>
        <h2>Experties:{user.experties}</h2>
        <h2>Experience:{user.experience}</h2>
        <h2>Charge Per Hour:{user.charge}</h2>
        <h2>About me:{user.about}</h2>
        <Link to={`/edituserprofile/${user.uid}`}>edit profile</Link>
      </center>
    </div>
  );
};

export default Userprofile;
