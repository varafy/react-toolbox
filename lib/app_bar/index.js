"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _AppBar = require("./AppBar");

var _button = require("../button");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var AppBar = (0, _AppBar.appBarFactory)(_button.IconButton);
var ThemedAppBar = (0, _reactCssThemr.themr)(_identifiers.APP_BAR, _themeModule.default)(AppBar);
exports.AppBar = ThemedAppBar;
var _default = ThemedAppBar;
exports.default = _default;