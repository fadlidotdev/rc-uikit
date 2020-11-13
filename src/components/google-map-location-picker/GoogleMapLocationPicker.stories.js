import React from "react";
import { storiesOf } from "@storybook/react";

import GoogleMapLocationPicker from "./index";

storiesOf("GoogleMapLocationPicker", module).add("default", () => (
  <GoogleMapLocationPicker
    googleMapsApiKey="YOUR_API_KEY"
    defaultAddress="universitas telkom"
    onPositionChanged={(data) => {
      console.log(">>>data", data);
    }}
  />
));
