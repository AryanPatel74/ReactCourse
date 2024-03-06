import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "./RestaurantList";
import { useLocation } from "../Utils/useLocation";
import { UserContext } from "../app";
import React, { createContext, useContext } from "react";
const LocationComponent = () => {
  const { location } = useContext(UserContext);
  return (
    <div>
      {location == null ? (
        <Shimmer />
      ) : (
        <RestaurantList lat={location.latitude} lag={location.longitude} />
      )}
    </div>
  );
};

export default LocationComponent;
