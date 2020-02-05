"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardText = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var CardText = function CardText(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "theme"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(theme.cardText, className)
  }, other), typeof children === 'string' ? _react.default.createElement("p", null, children) : children);
};

exports.CardText = CardText;
CardText.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  theme: _propTypes.default.shape({
    cardText: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardText);

exports.default = _default;