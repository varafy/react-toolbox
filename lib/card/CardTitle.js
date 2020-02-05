"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTitleFactory = exports.CardTitle = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Avatar = _interopRequireDefault(require("../avatar/Avatar"));

var factory = function factory(Avatar) {
  var CardTitle = function CardTitle(_ref) {
    var _classnames;

    var avatar = _ref.avatar,
        children = _ref.children,
        className = _ref.className,
        subtitle = _ref.subtitle,
        theme = _ref.theme,
        title = _ref.title,
        other = (0, _objectWithoutProperties2.default)(_ref, ["avatar", "children", "className", "subtitle", "theme", "title"]);
    var classes = (0, _classnames2.default)(theme.cardTitle, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.small, avatar), (0, _defineProperty2.default)(_classnames, theme.large, !avatar), _classnames), className);
    return _react.default.createElement("div", (0, _extends2.default)({
      className: classes
    }, other), typeof avatar === 'string' ? _react.default.createElement(Avatar, {
      image: avatar,
      theme: theme
    }) : avatar, _react.default.createElement("div", null, title && _react.default.createElement("h5", {
      className: theme.title
    }, title), children && typeof children === 'string' && _react.default.createElement("h5", {
      className: theme.title
    }, children), subtitle && _react.default.createElement("p", {
      className: theme.subtitle
    }, subtitle), children && typeof children !== 'string' && children));
  };

  CardTitle.propTypes = {
    avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.array]),
    className: _propTypes.default.string,
    subtitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    theme: _propTypes.default.shape({
      large: _propTypes.default.string,
      small: _propTypes.default.string,
      subtitle: _propTypes.default.string,
      title: _propTypes.default.string
    }),
    title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
  };
  return CardTitle;
};

exports.cardTitleFactory = factory;
var CardTitle = factory(_Avatar.default);
exports.CardTitle = CardTitle;

var _default = (0, _reactCssThemr.themr)(_identifiers.CARD)(CardTitle);

exports.default = _default;