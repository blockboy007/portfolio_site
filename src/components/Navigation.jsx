import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

 function closeNav () {
   var x = document.getElementById("check");
   x.checked = false;
 }

  return (
    <div className="navbar">
      <NavLink className="brand" to="/">ICONIX</NavLink>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn" >
        <i className="fas fa-bars"/>
      </label>
        <ul  className="navbar-items">
          <li className="nav-item" >
            <NavLink className="nav-link" to="/"  onClick={closeNav}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio" onClick={closeNav}>
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" onClick={closeNav}>
              Contact
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navigation;
