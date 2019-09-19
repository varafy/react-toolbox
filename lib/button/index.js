"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.IconButton = exports.Button = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Button = require("./Button");

var _BrowseButton = require("./BrowseButton");

var _IconButton = require("./IconButton");

var _FontIcon = require("../font_icon/FontIcon");

var _ripple = _interopRequireDefault(require("../ripple"));

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Button = (0, _Button.buttonFactory)((0, _ripple.default)({
  centered: false
}), _FontIcon.FontIcon);
var IconButton = (0, _IconButton.iconButtonFactory)((0, _ripple.default)({
  centered: true
}), _FontIcon.FontIcon);
var BrowseButton = (0, _BrowseButton.browseButtonFactory)((0, _ripple.default)({
  centered: false
}), _FontIcon.FontIcon);
var ThemedButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _themeModule.default)(Button);
exports.Button = ThemedButton;
var ThemedIconButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _themeModule.default)(IconButton);
exports.IconButton = ThemedIconButton;
var ThemedBrowseButton = (0, _reactCssThemr.themr)(_identifiers.BUTTON, _themeModule.default)(BrowseButton);
exports.BrowseButton = ThemedBrowseButton;
var _default = ThemedButton;
exports.default = _default;