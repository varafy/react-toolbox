"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Link = require("./Link");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedLink = (0, _reactCssThemr.themr)(_identifiers.LINK, _themeModule.default)(_Link.Link);
exports.Link = ThemedLink;
var _default = ThemedLink;
exports.default = _default;