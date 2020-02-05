"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Chip = require("./Chip");

var _avatar = require("../avatar");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Chip = (0, _Chip.chipFactory)(_avatar.Avatar);
var ThemedChip = (0, _reactCssThemr.themr)(_identifiers.CHIP, _themeModule.default)(Chip);
exports.Chip = ThemedChip;
var _default = ThemedChip;
exports.default = _default;