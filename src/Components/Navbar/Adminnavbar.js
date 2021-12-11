import React from "react";
import { Link } from "react-router-dom";
const Adminnavbar = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__items">
          <Link to="/dashboard" className="abs">
            Dashboard
          </Link>

          <Link to="/" className="abs">
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Adminnavbar;
