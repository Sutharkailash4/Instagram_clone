import React, { useContext } from "react";

import { Navigate } from "react-router-dom";

import { Auth_Context } from "../context/auth.context";

const Protected_Route = ({ children }) => {
  const { user, loading } = useContext(Auth_Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected_Route;
