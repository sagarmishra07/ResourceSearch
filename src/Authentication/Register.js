import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { auth, db, app } from "../firebase";
import "./Register.css";
import logoPic from "../Images/register.jpg";

const Register = () => {
  const [fileUrl, setFileUrl] = useState();
  const history = useHistory();

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const status = e.target.status.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    if (!name || !fileUrl || !email || !password || !address || !phone) {
      return;
    }
    await db
      .collection("users")
      .doc(user.uid)
      .set({
        uid: user.uid,
        name: name,
        address: address,
        phone: phone,
        status: status,
        image: fileUrl,
        email: email,
        password: password,

        isVerified: "true",
      })
      .then(history.push("/dashboard"));
  };
  return (
    <>
      <form className="register-main" onSubmit={onSubmit}>
        <div className="left">
          <img className="loginpic" src={logoPic} alt=""></img>
        </div>
        <div className="right">
          {" "}
          <Link to="/">
            <button className="Login_button">X</button>
          </Link>
          <h1 className="register-head">Register Form Application</h1>
          <div className="Register_form">
            <label className="register-name">Full Name</label>
            <input
              className="register-input"
              type="text"
              name="name"
              placeholder="Enter Full Name"
              required
            />
            <label className="register-email">Email</label>
            <input
              className="register-input"
              type="text"
              name="email"
              placeholder="Enter Email Address"
              required
            />
            <label className="register-name">Address</label>
            <input
              className="register-input"
              type="text"
              name="address"
              placeholder="Enter Address"
              required
            />
            <label className="register-name">Phone</label>
            <input
              className="register-input"
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              required
            />
            <label className="register-password">Password</label>
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <label className="register-roles">Roles</label>
            <select name="status" id="status">
              <option value="Viewer">Viewer</option>
              <option value="Resource">Resource</option>
            </select>

            <input
              className="register-file"
              type="file"
              onChange={onFileChange}
              required
            />
            <button className="register-button">Register</button>
            <div>
              <h5>
                Already have an account? <Link to="/login">Login</Link> now.
              </h5>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
