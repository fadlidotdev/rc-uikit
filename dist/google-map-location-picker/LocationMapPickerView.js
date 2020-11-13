"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _api = require("@react-google-maps/api");

var _usePlacesAutocomplete = require("use-places-autocomplete");

var _AutoCompleteView = _interopRequireDefault(require("./AutoCompleteView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var containerStyle = {
  width: "100%",
  height: "400px"
};

var LocationMapPickerView = function LocationMapPickerView(_ref) {
  var defaultAddress = _ref.defaultAddress,
      defaultLatLng = _ref.defaultLatLng,
      onPositionChanged = _ref.onPositionChanged;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      coordinate = _React$useState2[0],
      setCoordinate = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isNotFound = _React$useState4[0],
      setIsNotFound = _React$useState4[1];

  _react.default.useState(function () {
    if (defaultLatLng || defaultAddress !== "") {
      var payload = defaultLatLng ? {
        location: defaultLatLng
      } : {
        address: defaultAddress
      };
      (0, _usePlacesAutocomplete.getGeocode)(payload).then(function (result) {
        var data = Array.isArray(result) && result.length > 0 && result[0];

        if (data) {
          var location = {
            lat: data.geometry.location.lat(),
            lng: data.geometry.location.lng()
          };
          setCoordinate(location);
          onPositionChanged({
            location: location,
            address: data.formatted_address
          });
        }
      }).catch(function (err) {
        if (err === "ZERO_RESULTS") setIsNotFound(true);
      });
    }
  }, []);

  var handlePositionChangedMarker = function handlePositionChangedMarker(coord) {
    var latLng = coord.latLng;
    var lat = latLng.lat();
    var lng = latLng.lng();
    setCoordinate({
      lat: lat,
      lng: lng
    });
  };

  var handleGetCoordinates = function handleGetCoordinates(coord) {
    setCoordinate(coord.location);
    setIsNotFound(false);
    onPositionChanged(coord);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement(_AutoCompleteView.default, {
    onGetCoordinates: handleGetCoordinates,
    coordinate: coordinate
  })), isNotFound && /*#__PURE__*/_react.default.createElement("p", {
    className: "color-red mb-4"
  }, "Koordinat tidak ditemukan"), /*#__PURE__*/_react.default.createElement(_api.GoogleMap, {
    mapContainerStyle: containerStyle,
    zoom: 15,
    center: coordinate,
    onClick: handlePositionChangedMarker
  }, /*#__PURE__*/_react.default.createElement(_api.Marker, {
    position: coordinate,
    draggable: true,
    onDragEnd: handlePositionChangedMarker
  })));
};

var _default = LocationMapPickerView;
exports.default = _default;