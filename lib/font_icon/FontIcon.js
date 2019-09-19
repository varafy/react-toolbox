"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontIcon = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var FontIcon = function FontIcon(_ref) {
  var alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      value = _ref.value,
      other = (0, _objectWithoutProperties2.default)(_ref, ["alt", "children", "className", "theme", "value"]);
  return (// eslint-disable-line
    _react.default.createElement("span", (0, _extends2.default)({
      "data-react-toolbox": "font-icon",
      "aria-label": alt,
      className: (0, _classnames.default)({
        'material-icons': typeof value === 'string' || typeof children === 'string'
      }, className)
    }, other), value, children)
  );
};

exports.FontIcon = FontIcon;
FontIcon.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  // eslint-disable-line
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
};
FontIcon.defaultProps = {
  alt: '',
  className: ''
};
var _default = FontIcon;
exports.default = _default;