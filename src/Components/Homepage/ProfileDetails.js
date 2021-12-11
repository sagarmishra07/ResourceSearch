import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const ProfileDetails = () => {
  const history = useHistory();
  const loggeduser = useSelector((state) => state.firebase.profile);
  const [userdata, setUserdata] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    let unsubscribe;
    const docRef = (unsubscribe = db.collection("users").doc(id));

    const result = await docRef.get();

    if (result.exists) {
      setUserdata(result.data());
    }
    return () => {
      unsubscribe();
    };
  }, []);

  const Request = async () => {
    await db
      .collection("users")
      .doc(id)
      .collection("request")
      .add({
        user: loggeduser.name,
        phone: loggeduser.phone,
        address: loggeduser.address,
        image: loggeduser.image,
        created_at: new Date(),
        status: "uncompleted",
      })
      .then(alert("Request submited"));
  };

  return (
    <>
      <Navbar />
      <div>
        <center>
          <h1>My Profile</h1>
          <h2>NAME:{userdata.name}</h2>
          <img
            src={userdata.image}
            height="200px"
            width="200px"
            alt="Profile Pic"
          />
          /<h2>EMAIL:{userdata.email}</h2>
          <h2>Phone:{userdata.phone}</h2>
          <h2>Address:{userdata.address}</h2>
          <h2>Experties:{userdata.experties}</h2>
          <h2>Experience:{userdata.experience}</h2>
          <h2>Charge Per Hour:{userdata.charge}</h2>
          <h2>About me:{userdata.about}</h2>
          {userdata.uid == loggeduser.uid || loggeduser.status == "Resource" ? (
            <h1></h1>
          ) : (
            <button type="submit" onClick={() => Request()}>
              Request for Service
            </button>
          )}
        </center>
      </div>
    </>
  );
};

export default ProfileDetails;
