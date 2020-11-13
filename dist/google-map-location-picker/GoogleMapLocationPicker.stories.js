"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Component = function Component() {
  var _React$useState = _react.default.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useState3 = _react.default.useState("universitas telkom"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      address = _React$useState4[0],
      setAddress = _React$useState4[1];

  var onPositionChanged = function onPositionChanged(data) {
    setData(data);
  };

  console.log(">>>data", data);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-sm btn-primary mb-2",
    onClick: function onClick() {
      return setAddress("Universitas Telkom");
    }
  }, "Set Known Location"), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-sm btn-primary mb-2",
    onClick: function onClick() {
      return setAddress("asd");
    }
  }, "Set Unknown Location"), /*#__PURE__*/_react.default.createElement(_index.default, {
    googleMapsApiKey: "API_KEY",
    defaultAddress: address,
    onPositionChanged: onPositionChanged
  }));
};

(0, _react2.storiesOf)("GoogleMapLocationPicker", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(Component, null);
});