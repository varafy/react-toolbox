"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _overlay = require("../overlay");

var _Drawer = require("./Drawer");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Drawer = (0, _Drawer.drawerFactory)(_overlay.Overlay);
var ThemedDrawer = (0, _reactCssThemr.themr)(_identifiers.DRAWER, _themeModule.default)(Drawer);
exports.Drawer = ThemedDrawer;
var _default = ThemedDrawer;
exports.default = _default;