"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Overlay = require("./Overlay");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedOverlay = (0, _reactCssThemr.themr)(_identifiers.OVERLAY, _themeModule.default)(_Overlay.Overlay);
exports.Overlay = ThemedOverlay;
var _default = ThemedOverlay;
exports.default = _default;