"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Dropdown = require("./Dropdown");

var _input = require("../input");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Dropdown = (0, _Dropdown.dropdownFactory)(_input.Input);
var ThemedDropdown = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN, _themeModule.default)(Dropdown);
exports.Dropdown = ThemedDropdown;
var _default = ThemedDropdown;
exports.default = _default;