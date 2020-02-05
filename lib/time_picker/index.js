"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _TimePicker = require("./TimePicker");

var _TimePickerDialog = _interopRequireDefault(require("./TimePickerDialog"));

var _dialog = require("../dialog");

var _input = require("../input");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var TimePickerDialog = (0, _TimePickerDialog.default)(_dialog.Dialog);
var ThemedTimePicker = (0, _reactCssThemr.themr)(_identifiers.TIME_PICKER, _themeModule.default)((0, _TimePicker.timePickerFactory)(TimePickerDialog, _input.Input));
exports.TimePicker = ThemedTimePicker;
var _default = ThemedTimePicker;
exports.default = _default;