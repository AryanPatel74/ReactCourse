import React, { useState, useEffect } from "react";
import { LOGOIMAGE } from "../Utils/Constant";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

function Navbar() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    if (!location && !error) {
      timer = setTimeout(() => {
        handleFetchLocation();
      }, 20000); // 20 seconds
    }
    return () => clearTimeout(timer);
  }, [location, error]);

  const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
          setLocation(null);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="navbarDiv">
      <img src={LOGOIMAGE} alt="LOGO IMAGE" className="navbarImage" />
      <ul className="navbarList">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      {location == null ? (
        <Shimmer />
      ) : (
        <RestaurantList lat={location.latitude} lag={location.longitude} />
      )}
    </div>
  );
}

export default Navbar;
