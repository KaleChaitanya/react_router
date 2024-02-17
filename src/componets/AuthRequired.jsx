import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const authenticate = false;
  if (!authenticate) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }
  return <Outlet />;
};

export default AuthRequired;
