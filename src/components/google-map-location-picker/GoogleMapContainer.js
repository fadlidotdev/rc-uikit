import React from "react";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places", "localContext", "geometry"];

const GoogleMapContainer = ({ googleMapsApiKey, children }) => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapContainer;
