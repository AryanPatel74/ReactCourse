import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant";
import { resObj } from "../Utils/MOCKDATA.JSX";
import Shimmer from "./Shimmer";
import { APIURL } from "../Utils/swiggyAPI";
// Keys: Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
function RestaurantList(props) {
  const [filterData, setFilterData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  function filterTopRestaurant() {
    const filterRes = resObj.filter((res) => res.info.avgRating > 4.0);
    setFilterData(filterRes);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(props.lat);
  const fetchData = async () => {
    const apiData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${props.lat}&lng=${props.lag}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await apiData.json();
    setFilterData(
      jsonData?.data?.cards[4]?.card?.card.gridElements.infoWithStyle
        .restaurants
    );
  };
  const searchRestaurant = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const searchRestaurantName = () => {
    const filteredData = filterData.filter((data) =>
      data.info.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setFilterData(filteredData);
  };
  if (filterData == null) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="topRatedRes">
        <input
          type="text"
          className="searchInputBox"
          placeholder="Search Resturants.... 😍"
          onChange={searchRestaurant}
        />
        <button
          type="button"
          className="searchButton"
          onClick={searchRestaurantName}
        >
          Search Button
        </button>
        <button type="button" onClick={filterTopRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res">
        {filterData.map((res) => (
          <Restaurant
            key={res.info.id}
            resName={res.info.name}
            avgRating={res.info.avgRating}
            cuisines={res.info.cuisines}
            locality={res.info.locality}
            cloudinaryImageId={res.info.cloudinaryImageId}
            costForTwo={res.info.costForTwo}
            slaString={res.info.sla.slaString}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
