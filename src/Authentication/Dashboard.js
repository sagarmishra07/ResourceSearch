import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Admindashboard from "./Admindashboard";
import Userdashboard from "./Userdashboard";

import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const userdata = useSelector((state) => state.firebase.profile);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
  }, [user, loading]);

  return (
    <>
      {(() => {
        if (userdata.status === "Viewer") {
          return history.push("/");
        } else if (userdata.status === "Resource") {
          return (
            <>
              <Userdashboard userdata={userdata} />
            </>
          );
        } else if (userdata.status === "Admin") {
          return (
            <>
              <Admindashboard userdata={userdata} />
            </>
          );
        } else {
          return (
            <div>
              <Navbar />
              <h1>
                <center>Welcome</center>
              </h1>
            </div>
          );
        }
      })()}
    </>
  );
};

export default Dashboard;
