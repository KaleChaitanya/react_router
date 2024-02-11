import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end //end denotes here end this link here to solve double highlighted links
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/review"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
