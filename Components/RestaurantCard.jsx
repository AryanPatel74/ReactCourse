import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../app";
import OfferDetails from "./OfferDetails";
import Shimmer from "./Shimmer";

export default function RestaurantCard() {
  const { id } = useParams();
  const { location } = useContext(UserContext);
  const [resData, setResData] = useState(null);
  const [resName, setResName] = useState("");
  const [offerDetails, setOfferDetails] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [location]);

  const fetchRestaurantData = async () => {
    try {
      const reaAPI =
        "https://corsproxy.org/?" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.latitude}&lng=${location.longitude}&restaurantId=${id}`
        );
      const fetchedData = await fetch(reaAPI);
      const jsonData = await fetchedData.json();
      setResData(jsonData.data.cards[2]);
      setResName(jsonData?.data?.cards[0]?.card?.card?.info);
      setOfferDetails(
        jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  if (resData == null && offerDetails == null) {
    return <Shimmer />;
  }

  return (
    <div className="resDetails1">
      <div className="resName1">
        <div className="resDetailsValue1">
          <h3>{resName.name}</h3>
          <p>{resName.areaName}</p>
        </div>
        <div className="resRating1">
          <h3>{resName.avgRatingString}</h3>
          <p>{resName.totalRatingsString}</p>
        </div>
      </div>
      <div className="offerclass2">
        {offerDetails?.map((offer, index) => (
          <OfferDetails key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
}
