import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        Instagram
      </h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/create-post">Create</Link>

        <Link to="/stories">Stories</Link>

        <Link to="/profile/me">Profile</Link>

        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
