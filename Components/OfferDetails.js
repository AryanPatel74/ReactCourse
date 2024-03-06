import React from "react";

function OfferDetails({ offer }) {
  //   console.log(offer);
  return (
    <>
      <div className="offerclass1">
        <div className="topdiv">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" +
              offer.info.offerLogo
            }
            alt="😊"
          />
          <p>{offer.info.header}</p>
        </div>
        <div className="buttomdiv">
          <h1>{offer.info.couponCode}</h1>
          <h1>
            {" | "}
            {offer.info.description}
          </h1>
        </div>
      </div>
    </>
  );
}
export default OfferDetails;
