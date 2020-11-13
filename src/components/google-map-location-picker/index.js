import React from "react";
import GoogleMapContainer from "./GoogleMapContainer";
import LocationMapPickerView from "./LocationMapPickerView";

const GoogleMapLocationPicker = ({
  googleMapsApiKey,
  defaultAddress = "",
  defaultLatLng,
  onPositionChanged,
}) => {
  return (
    <GoogleMapContainer googleMapsApiKey={googleMapsApiKey}>
      <LocationMapPickerView
        defaultAddress={defaultAddress}
        defaultLatLng={defaultLatLng}
        onPositionChanged={onPositionChanged}
      />
    </GoogleMapContainer>
  );
};

export default React.memo(GoogleMapLocationPicker);
