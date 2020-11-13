"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("GoogleMapLocationPicker", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    googleMapsApiKey: "YOUR_API_KEY",
    defaultAddress: "universitas telkom",
    onPositionChanged: function onPositionChanged(data) {
      console.log(">>>data", data);
    }
  });
});