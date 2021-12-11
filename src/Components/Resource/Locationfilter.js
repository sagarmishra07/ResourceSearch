import React, { useEffect, useState } from "react";

import { db } from "../../firebase";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const Locationfilter = () => {
  const [data, setData] = useState([]);

  const userdata = useSelector((state) => state.firebase.profile);

  useEffect(() => {
    let unsubscrbe;
    unsubscrbe = db
      .collection("users")
      .orderBy("charge", "asc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      unsubscrbe();
    };
  }, []);
  return (
    <>
      <Navbar />
      <h1>Service Providers from {userdata.address}</h1>
      <div>
        <div className="jobs">
          {data
            .filter((val) => {
              if (
                val.address == userdata.address &&
                val.uid != userdata.uid &&
                val.status != "Viewer"
              )
                return val;
            })

            .map((post, index) => (
              <div key={index} className="card">
                <h3>{post.experties}</h3>
                <img
                  src={post.image}
                  height="500px"
                  width="400px"
                  effect="blur"
                />
                <p>{post.name}</p>
                <p>{post.experties}</p>
                Added <Moment fromNow>{post.created_at.toDate()}</Moment>
                <Link to={`/profiledetails/${post.uid}`}>
                  <button>View Details</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Locationfilter;
