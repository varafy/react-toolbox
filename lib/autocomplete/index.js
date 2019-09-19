"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Autocomplete = require("./Autocomplete");

var _chip = require("../chip");

var _input = require("../input");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Autocomplete = (0, _Autocomplete.autocompleteFactory)(_chip.Chip, _input.Input);
var ThemedAutocomplete = (0, _reactCssThemr.themr)(_identifiers.AUTOCOMPLETE, _themeModule.default, {
  withRef: true
})(Autocomplete);
exports.Autocomplete = ThemedAutocomplete;
var _default = ThemedAutocomplete;
exports.default = _default;