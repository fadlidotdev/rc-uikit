"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("@react-google-maps/api");

var libraries = ["places", "localContext", "geometry"];

var GoogleMapContainer = function GoogleMapContainer(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(_api.LoadScript, {
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries
  }, children);
};

var _default = GoogleMapContainer;
exports.default = _default;