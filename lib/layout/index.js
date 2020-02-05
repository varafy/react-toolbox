"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.NavDrawer = exports.Sidebar = exports.Layout = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Layout = require("./Layout");

var _Sidebar = require("./Sidebar");

var _NavDrawer = require("./NavDrawer");

var _Panel = require("./Panel");

var _app_bar = require("../app_bar");

var _drawer = require("../drawer");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var injectTheme = function injectTheme(component) {
  return (0, _reactCssThemr.themr)(_identifiers.LAYOUT, _themeModule.default)(component);
};

var ThemedNavDrawer = injectTheme((0, _NavDrawer.navDrawerFactory)(_drawer.Drawer));
exports.NavDrawer = ThemedNavDrawer;
var ThemedSidebar = injectTheme((0, _Sidebar.sidebarFactory)(_drawer.Drawer));
exports.Sidebar = ThemedSidebar;
var ThemedPanel = injectTheme(_Panel.Panel);
exports.Panel = ThemedPanel;
var ThemedLayout = injectTheme((0, _Layout.layoutFactory)(_app_bar.AppBar, ThemedNavDrawer, ThemedSidebar));
exports.Layout = ThemedLayout;
var _default = ThemedLayout;
exports.default = _default;