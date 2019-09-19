"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerDialog = exports.DatePicker = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _DatePicker = require("./DatePicker");

var _DatePickerDialog = _interopRequireDefault(require("./DatePickerDialog"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _button = require("../button");

var _input = require("../input");

var _dialog = require("../dialog");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Calendar = (0, _Calendar.default)(_button.IconButton);
var DatePickerDialog = (0, _DatePickerDialog.default)(_dialog.Dialog, Calendar);
var DatePicker = (0, _DatePicker.datePickerFactory)(_input.Input, DatePickerDialog);
var ThemedDatePicker = (0, _reactCssThemr.themr)(_identifiers.DATE_PICKER, _themeModule.default)(DatePicker);
exports.DatePicker = ThemedDatePicker;
var _default = ThemedDatePicker;
exports.default = _default;
var ThemedDatePickerDialog = (0, _reactCssThemr.themr)(_identifiers.DIALOG, _themeModule.default)(DatePickerDialog);
exports.DatePickerDialog = ThemedDatePickerDialog;