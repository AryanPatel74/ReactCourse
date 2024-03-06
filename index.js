import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Error from "./Components/Error";
import ContactPage from "./Components/ContactPage";
import About from "./Components/About";
import Location from "./Components/Location";
import RestaurantCard from "./Components/RestaurantCard";
import RestaurantList from "./Components/RestaurantList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Location />,
      },
      {
        path: "/about",
        element: <About name={"Aryan Patel"} />,
      },
      {
        path: "/contact",
        element: <RestaurantList />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
