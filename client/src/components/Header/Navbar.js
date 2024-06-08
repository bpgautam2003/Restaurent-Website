import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Navbar = () => {
  return (
    <>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/account">
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
