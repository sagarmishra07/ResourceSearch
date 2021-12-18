import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Misc/Loading";
import "./Login.css";
import logoPic from "../Images/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);

  const history = useHistory();
  useEffect(() => {
    if (loading) {
      <Loading />;
    }
  }, [user, loading]);
  const signInWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password).then((response) => {
      // this works fine because response.message is a string
    });

    return history.replace("/dashboard");
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="login-main">
        <div className="login-left">
          <img className="login-pic" src={logoPic} alt=""></img>
        </div>
        <div className="login-right">
          <Link to="/">
            <button className="Login_button">X</button>
          </Link>
          <div className="Login_form">
            <h1 className="heading-login">The Maintenance Nepal</h1>
            <h2>Login Page </h2>
            <label className="Login_email">Email Address</label>
            <input
              className="Login_input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
            />
            <label className="Login_password"> Password</label>
            <input
              className="Login_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <button
              className="Login_button"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </div>

          <div>
            <h5>
              Don't have an account? <Link to="/register">Register</Link> now.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
