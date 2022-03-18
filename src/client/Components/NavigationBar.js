import React from "react";
import {NavLink, useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate()
  return (
    <div className="navigation">
      <div className="navigation-bar">
        <div className="side side-left">
          <NavLink to="/" className="logo">LOGO</NavLink>
          <NavLink to="/" className={navInfo => navInfo.isActive? "active" : ""}>Home </NavLink>
          <NavLink to="/listings">Listings </NavLink>
          <NavLink to="/about">About </NavLink>
          <button onClick={() => navigate(-1)} title="Go previous page">Back </button>
        </div>
        <div className="side side-right">
         <NavLink to="/profile">Profile </NavLink>
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
