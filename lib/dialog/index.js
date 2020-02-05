"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Dialog = require("./Dialog");

var _overlay = require("../overlay");

var _button = require("../button");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Dialog = (0, _Dialog.dialogFactory)(_overlay.Overlay, _button.Button);
var ThemedDialog = (0, _reactCssThemr.themr)(_identifiers.DIALOG, _themeModule.default)(Dialog);
exports.Dialog = ThemedDialog;
var _default = ThemedDialog;
exports.default = _default;