"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames2 = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      raised = _ref.raised,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "raised", "theme"]);
  var classes = (0, _classnames2.default)(theme.card, (0, _defineProperty2.default)({}, theme.raised, raised), className);
  return _react.default.createElement("div", (0, _extends2.default)({
    "data-react-toolbox": "card",
    className: classes
  }, other), children);
};

exports.Card = Card;
Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  raised: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    card: _propTypes.default.string,
    raised: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(Card);

exports.default = _default;