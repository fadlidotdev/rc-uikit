"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GoogleMapContainer = _interopRequireDefault(require("./GoogleMapContainer"));

var _LocationMapPickerView = _interopRequireDefault(require("./LocationMapPickerView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleMapLocationPicker = function GoogleMapLocationPicker(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      _ref$defaultAddress = _ref.defaultAddress,
      defaultAddress = _ref$defaultAddress === void 0 ? "" : _ref$defaultAddress,
      defaultLatLng = _ref.defaultLatLng,
      onPositionChanged = _ref.onPositionChanged;
  return /*#__PURE__*/_react.default.createElement(_GoogleMapContainer.default, {
    googleMapsApiKey: googleMapsApiKey
  }, /*#__PURE__*/_react.default.createElement(_LocationMapPickerView.default, {
    defaultAddress: defaultAddress,
    defaultLatLng: defaultLatLng,
    onPositionChanged: onPositionChanged
  }));
};

var _default = /*#__PURE__*/_react.default.memo(GoogleMapLocationPicker);

exports.default = _default;