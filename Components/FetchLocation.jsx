import React, { useState, useEffect } from "react";
import { LOGOIMAGE } from "../Utils/Constant";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

function FetchLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;
    if (!location && !error) {
      timer = setTimeout(() => {
        handleFetchLocation();
      }, 200); // 20 seconds
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
    <div>
      {location == null ? (
        <Shimmer />
      ) : (
        <RestaurantList lat={location.latitude} lag={location.longitude} />
      )}
    </div>
  );
}

export default FetchLocation;
