"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _Switch = require("./Switch");

var _identifiers = require("../identifiers");

var _Thumb = _interopRequireDefault(require("./Thumb"));

var _ripple = _interopRequireDefault(require("../ripple"));

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_identifiers.SWITCH, _themeModule.default)(Component);
};

var ripple = (0, _ripple.default)({
  centered: true,
  spread: 2.6
});
var ThemedThumb = applyTheme((0, _Thumb.default)(ripple));
var ThemedSwitch = applyTheme((0, _Switch.switchFactory)(ThemedThumb));
exports.Switch = ThemedSwitch;
var _default = ThemedSwitch;
exports.default = _default;