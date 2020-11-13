"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _usePlacesAutocomplete = _interopRequireWildcard(require("use-places-autocomplete"));

var _reactCoolOnclickoutside = _interopRequireDefault(require("react-cool-onclickoutside"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoCompleteView = function AutoCompleteView(_ref) {
  var coordinate = _ref.coordinate,
      onGetCoordinates = _ref.onGetCoordinates;

  var _usePlacesAutocomplet = (0, _usePlacesAutocomplete.default)({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300
  }),
      ready = _usePlacesAutocomplet.ready,
      value = _usePlacesAutocomplet.value,
      _usePlacesAutocomplet2 = _usePlacesAutocomplet.suggestions,
      status = _usePlacesAutocomplet2.status,
      data = _usePlacesAutocomplet2.data,
      setValue = _usePlacesAutocomplet.setValue,
      clearSuggestions = _usePlacesAutocomplet.clearSuggestions;

  _react.default.useEffect(function () {
    if (coordinate) {
      (0, _usePlacesAutocomplete.getGeocode)({
        location: coordinate
      }).then(function (result) {
        var _result$;

        var address = result && ((_result$ = result[0]) === null || _result$ === void 0 ? void 0 : _result$.formatted_address) || "";
        setValue(address);
      });
    }
  }, [coordinate]);

  var ref = (0, _reactCoolOnclickoutside.default)(function () {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  var handleInput = function handleInput(e) {
    setValue(e.target.value);
  };

  var handleSelect = function handleSelect(_ref2) {
    var description = _ref2.description;
    return function () {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter as "false"
      setValue(description, false);
      clearSuggestions(); // Get latitude and longitude via utility functions

      (0, _usePlacesAutocomplete.getGeocode)({
        address: description
      }).then(function (results) {
        return (0, _usePlacesAutocomplete.getLatLng)(results[0]);
      }).then(function (_ref3) {
        var lat = _ref3.lat,
            lng = _ref3.lng;
        onGetCoordinates({
          location: {
            lat: lat,
            lng: lng
          },
          address: description
        });
      }).catch(function (error) {});
    };
  };

  var renderSuggestions = function renderSuggestions() {
    return data.map(function (suggestion) {
      var id = suggestion.id,
          _suggestion$structure = suggestion.structured_formatting,
          main_text = _suggestion$structure.main_text,
          secondary_text = _suggestion$structure.secondary_text;
      return /*#__PURE__*/_react.default.createElement("li", {
        key: id,
        onClick: handleSelect(suggestion)
      }, /*#__PURE__*/_react.default.createElement("strong", null, main_text), " ", /*#__PURE__*/_react.default.createElement("small", null, secondary_text));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: value,
    onChange: handleInput,
    disabled: !ready,
    placeholder: "Cari alamat atau lokasi Anda ..."
  })), status === "OK" && /*#__PURE__*/_react.default.createElement("ul", null, renderSuggestions()));
};

var _default = AutoCompleteView;
exports.default = _default;