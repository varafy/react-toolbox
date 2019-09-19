"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardActions = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var CardActions = function CardActions(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "theme"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(theme.cardActions, className)
  }, other), children);
};

exports.CardActions = CardActions;
CardActions.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  theme: _propTypes.default.shape({
    cardActions: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardActions);

exports.default = _default;