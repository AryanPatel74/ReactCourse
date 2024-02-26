import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Restaurant from "./Components/Restaurant";
import RestaurantList from "./Components/RestaurantList";
import Location from "./Components/Location";
function AppLayout() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
