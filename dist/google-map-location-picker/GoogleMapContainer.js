"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = require("@react-google-maps/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var libraries = ["places", "localContext", "geometry"];

var GoogleMapContainer = function GoogleMapContainer(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_api.LoadScript, {
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries
  }, children);
};

var _default = GoogleMapContainer;
exports.default = _default;