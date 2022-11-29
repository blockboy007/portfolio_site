import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    
  return (
    <div className="navbar">
      <NavLink className="brand" to="/">ICONIX</NavLink>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"/>
      </label>
        <ul  className="navbar-items">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navigation;
