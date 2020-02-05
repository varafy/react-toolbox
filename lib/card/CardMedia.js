"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var CardMedia = function CardMedia(_ref) {
  var aspectRatio = _ref.aspectRatio,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      contentOverlay = _ref.contentOverlay,
      image = _ref.image,
      theme = _ref.theme,
      other = (0, _objectWithoutProperties2.default)(_ref, ["aspectRatio", "children", "className", "color", "contentOverlay", "image", "theme"]);
  var classes = (0, _classnames3.default)(theme.cardMedia, (0, _defineProperty2.default)({}, theme[aspectRatio], aspectRatio), className);
  var innerClasses = (0, _classnames3.default)(theme.content, (0, _defineProperty2.default)({}, theme.contentOverlay, contentOverlay));
  var bgStyle = {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? "url('".concat(image, "')") : undefined
  };
  return _react.default.createElement("div", (0, _extends2.default)({
    style: bgStyle,
    className: classes
  }, other), _react.default.createElement("div", {
    className: innerClasses
  }, children));
};

exports.CardMedia = CardMedia;
CardMedia.propTypes = {
  aspectRatio: _propTypes.default.oneOf(['wide', 'square']),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  contentOverlay: _propTypes.default.bool,
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  theme: _propTypes.default.shape({
    cardMedia: _propTypes.default.string,
    content: _propTypes.default.string,
    contentOverlay: _propTypes.default.string,
    square: _propTypes.default.string,
    wide: _propTypes.default.string
  })
};

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardMedia);

exports.default = _default;