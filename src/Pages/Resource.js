import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Recommend from "../Components/Homepage/Recommend";
import Navbar from "../Components/Navbar/Navbar";
import { db } from "../firebase";
import "../css/Resource.css";

const Resource = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  useEffect(async () => {
    db.collection("users")

      .where("status", "==", "Resource")

      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="block">
        <center>
          <Link to="locationfilter">
            <button className="viewbutton">
              Service Providers In your Locality
            </button>
          </Link>
          <input
            className="searchbox"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <select
            className="selectbox"
            name="experties"
            id="experties"
            onChange={(event) => {
              setSearchTerm1(event.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="Plumber">Plumber</option>
            <option value="Mechanics">Mechanics </option>
            <option value="Technicians">Technicians</option>
            <option value="Electricians">Electricians</option>
          </select>
        </center>
      </div>

      <div className="profile-card">
        {data
          .filter((val) => {
            if (searchTerm == "" && searchTerm1 == "all") {
              return (val = data);
            } else if (
              val.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
              val.experties.toLowerCase().includes(searchTerm1.toLowerCase())
            )
              return val;
          })
          .map((val, index) => (
            <div key={index}>
              <div className="card-items">
                <img src={val.image} className="profile-img" />
                <p className="profile-name">{val.name}</p>
                <p className="profile-expert">{val.experties}</p>

                <Recommend uid={val.uid} className="card-recommend" />
                <Moment className="profile-create" fromNow>
                  {val.created_at.toDate()}
                </Moment>
                <Link to={`/profiledetails/${val.uid}`}>
                  <button className="viewprofile">View Details</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Resource;
