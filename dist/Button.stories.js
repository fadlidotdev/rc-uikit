"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.text = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var text = "Hello Button";
exports.text = text;
var actions = {
  onClick: (0, _addonActions.action)("onClick")
};
exports.actions = actions;
(0, _react2.storiesOf)("Button", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    text: text
  }, actions));
});