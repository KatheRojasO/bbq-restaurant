import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function Map({ latitude, longitude }) {
  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
