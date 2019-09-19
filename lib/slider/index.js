"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _progress_bar = require("../progress_bar");

var _input = require("../input");

var _Slider = require("./Slider");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var ThemedSlider = (0, _reactCssThemr.themr)(_identifiers.SLIDER, _themeModule.default)((0, _Slider.sliderFactory)(_progress_bar.ProgressBar, _input.Input));
exports.Slider = ThemedSlider;
var _default = ThemedSlider;
exports.default = _default;