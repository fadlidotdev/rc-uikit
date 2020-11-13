import React from "react";
import { storiesOf } from "@storybook/react";

import GoogleMapLocationPicker from "./index";

const Component = () => {
  const [address, setAddress] = React.useState("universitas telkom");

  const onPositionChanged = (data) => {
    console.log(">>>data", data);
  };
  return (
    <>
      <button
        className="btn btn-sm btn-primary mb-2"
        onClick={() => setAddress("Universitas Telkom")}
      >
        Set Known Location
      </button>
      <button
        className="btn btn-sm btn-primary mb-2"
        onClick={() => setAddress("asd")}
      >
        Set Unknown Location
      </button>
      <GoogleMapLocationPicker
        googleMapsApiKey="YOU_API_KEY"
        defaultAddress={address}
        onPositionChanged={onPositionChanged}
      />
    </>
  );
};

storiesOf("GoogleMapLocationPicker", module).add("default", () => (
  <Component />
));
