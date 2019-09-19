"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Input = require("./Input");

var _FontIcon = require("../font_icon/FontIcon");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Input = (0, _Input.inputFactory)(_FontIcon.FontIcon);
var ThemedInput = (0, _reactCssThemr.themr)(_identifiers.INPUT, _themeModule.default, {
  withRef: true
})(Input);
exports.Input = ThemedInput;
var _default = ThemedInput;
exports.default = _default;