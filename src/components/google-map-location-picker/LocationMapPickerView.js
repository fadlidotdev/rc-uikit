import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { getGeocode } from "use-places-autocomplete";
import AutoCompleteView from "./AutoCompleteView";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const LocationMapPickerView = ({
  defaultAddress,
  defaultLatLng,
  onPositionChanged,
}) => {
  const [coordinate, setCoordinate] = React.useState(null);
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useState(() => {
    if (defaultLatLng || defaultAddress !== "") {
      let payload = defaultLatLng
        ? { location: defaultLatLng }
        : { address: defaultAddress };

      getGeocode(payload)
        .then((result) => {
          const data = Array.isArray(result) && result.length > 0 && result[0];

          if (data) {
            const location = {
              lat: data.geometry.location.lat(),
              lng: data.geometry.location.lng(),
            };

            setCoordinate(location);

            onPositionChanged({
              location,
              address: data.formatted_address,
            });
          }
        })
        .catch((err) => {
          if (err === "ZERO_RESULTS") setIsNotFound(true);
        });
    }
  }, []);

  const handlePositionChangedMarker = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setCoordinate({ lat, lng });
  };

  const handleGetCoordinates = (coord) => {
    setCoordinate(coord.location);
    setIsNotFound(false);
    onPositionChanged(coord);
  };

  return (
    <>
      <div className="mb-4">
        <AutoCompleteView
          onGetCoordinates={handleGetCoordinates}
          coordinate={coordinate}
        />
      </div>

      {isNotFound && (
        <p className="color-red mb-4">Koordinat tidak ditemukan</p>
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={coordinate}
        onClick={handlePositionChangedMarker}
      >
        <Marker
          position={coordinate}
          draggable
          onDragEnd={handlePositionChangedMarker}
        />
      </GoogleMap>
    </>
  );
};

export default LocationMapPickerView;