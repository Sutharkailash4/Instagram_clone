import React from "react";

import Navbar from "./navbar";

import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />

      <div className="layout-content">
        <Sidebar />

        <div className="layout-page">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
