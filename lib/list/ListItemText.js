"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemText = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var ListItemText = function ListItemText(_ref) {
  var className = _ref.className,
      primary = _ref.primary,
      children = _ref.children,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "primary", "children", "theme"]);

  var _className = (0, _classnames2.default)(theme.itemText, (0, _defineProperty2.default)({}, theme.primary, primary), className);

  return _react.default.createElement("span", (0, _extends2.default)({
    "data-react-toolbox": "list-item-text",
    className: _className
  }, other), children);
};

exports.ListItemText = ListItemText;
ListItemText.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  primary: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    itemText: _propTypes.default.string,
    primary: _propTypes.default.string
  })
};
ListItemText.defaultProps = {
  primary: false
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemText);

exports.default = _default;