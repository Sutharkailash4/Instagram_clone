import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/">Feed</Link>

      <Link to="/create-post">Create Post</Link>

      <Link to="/stories">Stories</Link>

      <Link to="/profile/me">Profile</Link>

      <Link to="/login">Logout</Link>
    </div>
  );
};

export default Sidebar;
