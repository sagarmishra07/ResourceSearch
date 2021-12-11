import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Usernavbar from "../Navbar/Usernavbar";
const Editprofile = () => {
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

    isVerified: true,
  });

  useEffect(async () => {
    let unsubscribe;

    const result = (unsubscribe = await docRef.get());
    if (result.exists) {
      setProfile(result.data());
    } else {
      console.log("No such document!");
    }
  }, []);
  const oninputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {
      // update userprofile
      try {
        await docRef.update({
          ...profile,
          updatedAt: new Date(),
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    history.push("/myprofile");
  };
  return (
    <center>
      {" "}
      <Usernavbar />
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
          placeholder="Enter address"
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
          <option value="Mechanics">Mechanics </option>
          <option value="Technicians">Technicians</option>
          <option value="Electricians">Electricians</option>
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

        <button type="submit">{id ? "Update Profile" : "Add Profile"}</button>
      </form>
    </center>
  );
};

export default Editprofile;
