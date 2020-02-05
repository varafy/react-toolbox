"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var Panel = function Panel(_ref) {
  var bodyScroll = _ref.bodyScroll,
      children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["bodyScroll", "children", "className", "theme"]);

  var _className = (0, _classnames.default)(theme.panel, (0, _defineProperty2.default)({}, theme.bodyScroll, bodyScroll), className);

  return _react.default.createElement("div", (0, _extends2.default)({}, other, {
    "data-react-toolbox": "panel",
    className: _className
  }), children);
};

exports.Panel = Panel;
Panel.propTypes = {
  bodyScroll: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  theme: _propTypes.default.shape({
    panel: _propTypes.default.string
  })
};
Panel.defaultProps = {
  bodyScroll: true,
  className: ''
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LAYOUT)(Panel);

exports.default = _default;