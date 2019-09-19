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
  var Radio = function Radio(_ref) {
    var checked = _ref.checked,
        onMouseDown = _ref.onMouseDown,
        theme = _ref.theme,
        other = (0, _objectWithoutProperties2.default)(_ref, ["checked", "onMouseDown", "theme"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      "data-react-toolbox": "radio",
      className: theme[checked ? 'radioChecked' : 'radio'],
      onMouseDown: onMouseDown
    }, other));
  };

  Radio.propTypes = {
    checked: _propTypes.default.bool,
    children: _propTypes.default.node,
    onMouseDown: _propTypes.default.func,
    theme: _propTypes.default.shape({
      radio: _propTypes.default.string,
      radioChecked: _propTypes.default.string,
      ripple: _propTypes.default.string
    })
  };
  return ripple(Radio);
};

var _default = factory;
exports.default = _default;