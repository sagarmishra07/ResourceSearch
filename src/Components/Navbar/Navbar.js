import React from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import "./Navbar.css";
function Navbar() {
  const [user] = useAuthState(auth);
  const userdata = useSelector((state) => state.firebase.profile);

  return (
    <>
      <div className="navbar__container">
        {user ? (
          <div className="navbar__items">
            <img className="logo" src="mlogo.png" alt="" />
            <Link to="/" className="abs">
              Home
            </Link>
            <Link to="/resource" className="abs">
              Resource
            </Link>

            <Link to="/about" className="abs">
              About
            </Link>
            <Link to="/contact" className="abs">
              <Link to="#" className="abs">
                Hello, {userdata.name}
              </Link>
            </Link>
            <button onClick={logout}>Logout</button>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        ) : (
          <div className="navbar__items">
            {/* <img src="mlogo.png" height="100" width="100" alt="Maintainance Nepal" /> */}
            <div>
              <Link to="/" className="abs">
                Home
              </Link>
              <Link to="/about" className="abs">
                About
              </Link>
              <Link to="/contact" className="abs">
                Contact
              </Link>
              <Link className="abs" to="/login">
                Login
              </Link>
              <Link className="abs" to="/register">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
