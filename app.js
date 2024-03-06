import React, { createContext, useContext } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "./Utils/useLocation";

// Create UserContext outside of the App component
const UserContext = createContext();

function App() {
  const location = useLocation();
  console.log("hi");
  console.log(location);
  return (
    <div>
      {/* Provide the UserContext to the child components */}
      <UserContext.Provider value={{ location }}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

// Export the UserContext for use in other components
export { UserContext };
export default App;
