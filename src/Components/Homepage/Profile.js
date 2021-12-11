import React from "react";
import { Link } from "react-router-dom";
import Recommend from "./Recommend";

import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Moment from "react-moment";
const Profile = ({ data }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {data.experties && (
        <div>
          <h1>Name:{data.name}</h1>
          <img src={data.image} height="200" width="200" />
          <h1>{data.experties}</h1>
          <h1>{data.experience}</h1>
          Added <Moment fromNow>{data.created_at.toDate()}</Moment>
          <Recommend uid={data.uid} />
          {user && <Link to={`/profiledetails/${data.uid}`}>View profile</Link>}
        </div>
      )}
    </div>
  );
};

export default Profile;
