"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipFactory = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var themedTooltipFactory = function themedTooltipFactory(options) {
  return (0, _Tooltip.default)((0, _objectSpread2.default)({}, options, {
    theme: _themeModule.default
  }));
};

exports.tooltipFactory = themedTooltipFactory;

var _default = (0, _Tooltip.default)({
  theme: _themeModule.default
});

exports.default = _default;