"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Snackbar = require("./Snackbar");

var _button = require("../button");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedSnackbar = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR, _themeModule.default)((0, _Snackbar.snackbarFactory)(_button.Button));
exports.Snackbar = ThemedSnackbar;
var _default = ThemedSnackbar;
exports.default = _default;