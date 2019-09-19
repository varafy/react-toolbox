"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _Ripple = _interopRequireDefault(require("./Ripple"));

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var _default = function _default(options) {
  return (0, _Ripple.default)((0, _objectSpread2.default)({}, options, {
    theme: _themeModule.default
  }));
};

exports.default = _default;