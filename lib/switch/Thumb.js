"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var factory = function factory(ripple) {
  var Thumb = function Thumb(_ref) {
    var onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        other = (0, _objectWithoutProperties2.default)(_ref, ["onMouseDown", "theme"]);
    return _react.default.createElement("span", (0, _extends2.default)({
      className: theme.thumb,
      onMouseDown: onMouseDown
    }, other));
  };

  Thumb.propTypes = {
    children: _propTypes.default.node,
    onMouseDown: _propTypes.default.func,
    theme: _propTypes.default.shape({
      ripple: _propTypes.default.string,
      thumb: _propTypes.default.string
    })
  };
  return ripple(Thumb);
};

var _default = factory;
exports.default = _default;