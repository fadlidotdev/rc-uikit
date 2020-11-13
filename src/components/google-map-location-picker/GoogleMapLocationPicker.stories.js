import React from "react";
import { storiesOf } from "@storybook/react";

import GoogleMapLocationPicker from "./index";

const Component = () => {
  const [data, setData] = React.useState();
  const [address, setAddress] = React.useState("universitas telkom");
  const [visible, setVisible] = React.useState(false);
  const [latLng, setLatLng] = React.useState(null);

  console.log(">>>data", data);

  const onPositionChanged = (data) => {
    setData(data);
  };

  return (
    <>
      <div className="mb-2">
        <button
          className="btn btn-sm btn-primary m-1"
          onClick={() => setVisible(false)}
        >
          Hide
        </button>

        <button
          className="btn btn-sm btn-primary m-1"
          onClick={() => {
            setVisible(true);
            setAddress("Universitas Telkom");
          }}
        >
          Set Known Location
        </button>

        <button
          className="btn btn-sm btn-primary m-1"
          onClick={() => {
            setVisible(true);
            setAddress("asd");
          }}
        >
          Set Unknown Location
        </button>

        <button
          className="btn btn-sm btn-primary m-1"
          onClick={() => {
            setVisible(true);
            setLatLng({
              lat: -6.974028,
              lng: 107.6305287,
            });
          }}
        >
          Set from LatLng
        </button>
      </div>

      {visible && (
        <GoogleMapLocationPicker
          googleMapsApiKey="API_KEY"
          defaultAddress={address}
          defaultLatLng={latLng}
          onPositionChanged={onPositionChanged}
        />
      )}
    </>
  );
};

storiesOf("GoogleMapLocationPicker", module).add("default", () => (
  <Component />
));
