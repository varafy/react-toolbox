"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ProgressBar = require("./ProgressBar");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedProgressBar = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR, _themeModule.default)(_ProgressBar.ProgressBar);
exports.ProgressBar = ThemedProgressBar;
var _default = ThemedProgressBar;
exports.default = _default;