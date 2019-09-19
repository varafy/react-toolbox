"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Navigation = require("./Navigation");

var _button = require("../button");

var _link = require("../link");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedNavigation = (0, _reactCssThemr.themr)(_identifiers.NAVIGATION, _themeModule.default)((0, _Navigation.navigationFactory)(_button.Button, _link.Link));
exports.Navigation = ThemedNavigation;
var _default = ThemedNavigation;
exports.default = _default;