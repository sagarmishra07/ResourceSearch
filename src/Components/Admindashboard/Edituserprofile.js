import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Adminnavbar from "../Navbar/Adminnavbar";

const Edituserprofile = () => {
  const firestore = useFirestore();

  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("users").doc(id) : null;
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    about: "",
    status: "",
    experties: "",
    experience: "",
    image: "",

    isVerified: false,
  });
  useEffect(async () => {
    let unsubscribe;
    const result = (unsubscribe = await docRef.get());
    if (result.exists) {
      setProfile(result.data());
    }
    return () => {
      unsubscribe();
    };
  }, []);
  const oninputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {
      // update userprofile

      await docRef.update({
        ...profile,
        updatedAt: new Date(),
      });
    }
    history.push("/dashboard");
  };
  return (
    <center>
      {" "}
      <Adminnavbar />
      <form onSubmit={submitForm}>
        <input
          placeholder="Enter user Name"
          name="name"
          value={profile.name}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter user E-mail"
          name="email"
          value={profile.email}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter user Password"
          name="password"
          value={profile.password}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter Location"
          name="address"
          value={profile.address}
          onChange={oninputChange}
        />

        <input
          placeholder="Phone"
          name="phone"
          value={profile.phone}
          onChange={oninputChange}
        />

        <input
          placeholder="about"
          name="about"
          value={profile.about}
          onChange={oninputChange}
        />

        <select
          name="experties"
          id="experties"
          onChange={oninputChange}
          value={profile.experties}
        >
          <option value="Plumber">Plumber</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Electronic Appliances">Electronic Appliances</option>
          <option value="Bike Mechanic">Bike Mechanic</option>
          <option value="Car Mechanic">Car Mechanic</option>
        </select>
        <select
          name="status"
          id="status"
          onChange={oninputChange}
          value={profile.status}
        >
          <option value="Viewer">Viewer</option>
          <option value="Resource">Resource</option>
          <option value="Admin">Admin</option>
        </select>

        <input
          type="textarea"
          rows="400"
          cols="400"
          placeholder="Experience"
          name="experience"
          value={profile.experience}
          onChange={oninputChange}
        />
        <select
          name="isVerified"
          id="isVerified"
          onChange={oninputChange}
          value={profile.isVerified}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <button type="submit">{id ? "Update Profile" : "Add Profile"}</button>
      </form>
    </center>
  );
};

export default Edituserprofile;
