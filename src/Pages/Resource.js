import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { db } from "../firebase";

const Resource = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    db.collection("users")
      .where("isVerified", "==", "true")

      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <Navbar />
      <Link to="locationfilter">
        <button> Service Providers In your Locality</button>
      </Link>
    </>
  );
};

export default Resource;
