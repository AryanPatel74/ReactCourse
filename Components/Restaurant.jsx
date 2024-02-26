import React from "react";
import ReactDOM from "react-dom/client";
import { LOGOURL } from "../Utils/Constant";
function Restaurant(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="column">
          <img
            src={LOGOURL + props.cloudinaryImageId}
            alt=""
            className="cardImage"
          />
          <div className="resDetails">
            <h5 className="resName">{props.resName}</h5>
            <p>⭐{props.avgRating}</p>
            <p>{props.cuisines.join(",")}</p>
            <p>{props.locality}</p>
            <p>{props.costForTwo}</p>
            <p>{props.slaString}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Restaurant;
