import React, { useState, useEffect } from "react";
import { LOGOIMAGE } from "../Utils/Constant";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbarDiv">
      <Link to="/">
        <img src={LOGOIMAGE} alt="LOGO IMAGE" className="navbarImage" />
      </Link>
      <ul className="navbarList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Navbar;
