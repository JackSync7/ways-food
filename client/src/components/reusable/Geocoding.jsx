import React, { useEffect, useState } from "react";
import axios from "axios";

function Geocoding({ latitude, longitude }) {
  const [placeName, setPlaceName] = useState("");

  const convertCoordinatesToPlaceName = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
      );

      const data = response.data;
      if (data.status === "OK") {
        const firstResult = data.results[0];
        const formattedAddress = firstResult.formatted_address;
        setPlaceName(formattedAddress);
      } else {
        console.error("Geocoding API request failed.");
      }
    } catch (error) {
      console.error("Error in geocoding request:", error);
    }
  };

  // Call the geocoding function when the  mounts
  useEffect(() => {
    convertCoordinatesToPlaceName();
  }, []);

  return (
    <div>
      <p>{placeName}</p>
    </div>
  );
}

export default Geocoding;
