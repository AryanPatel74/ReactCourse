import React, { useState } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

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
      <button onClick={handleFetchLocation}>Fetch Location</button>
      <div>
        {location && (
          <div>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default LocationComponent;
