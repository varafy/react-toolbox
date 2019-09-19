"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMenu = exports.Menu = exports.MenuItem = exports.MenuDivider = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _button = require("../button");

var _MenuDivider = require("./MenuDivider");

var _MenuItem = require("./MenuItem");

var _Menu = require("./Menu");

var _IconMenu = require("./IconMenu");

var _ripple = _interopRequireDefault(require("../ripple"));

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_identifiers.MENU, _themeModule.default)(Component);
};

var ThemedMenuDivider = applyTheme(_MenuDivider.MenuDivider);
exports.MenuDivider = ThemedMenuDivider;
var ThemedMenuItem = applyTheme((0, _MenuItem.menuItemFactory)((0, _ripple.default)({})));
exports.MenuItem = ThemedMenuItem;
var ThemedMenu = applyTheme((0, _Menu.menuFactory)(ThemedMenuItem));
exports.Menu = ThemedMenu;
var ThemedIconMenu = applyTheme((0, _IconMenu.iconMenuFactory)(_button.IconButton, ThemedMenu));
exports.IconMenu = ThemedIconMenu;