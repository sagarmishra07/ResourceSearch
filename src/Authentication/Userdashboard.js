import React from "react";
import Request from "../Components/Userdashboard/Request";
import Usernavbar from "../Components/Navbar/Usernavbar";

const Userdashboard = ({ userdata }) => {
  return (
    <div>
      <Usernavbar />

      <center>
        <h1>Welcome to Dashboard</h1>
        <h1>Hello, {userdata.name}</h1>
        <img src={userdata.image} height="200" width="100" alt="" />
        <h1>Experties :{userdata.experties}</h1>
        <h2>{userdata.email}</h2>
        <h2>About Me:</h2>
        <br />
        <h2>
          <b>{userdata.about}</b>
        </h2>
        <Request userdata={userdata} />
      </center>
    </div>
  );
};

export default Userdashboard;
