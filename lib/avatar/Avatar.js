"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = exports.avatarFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var factory = function factory(FontIcon) {
  var Avatar = function Avatar(_ref) {
    var alt = _ref.alt,
        children = _ref.children,
        className = _ref.className,
        cover = _ref.cover,
        icon = _ref.icon,
        image = _ref.image,
        theme = _ref.theme,
        title = _ref.title,
        other = (0, _objectWithoutProperties2.default)(_ref, ["alt", "children", "className", "cover", "icon", "image", "theme", "title"]);
    return _react.default.createElement("div", (0, _extends2.default)({
      "data-react-toolbox": "avatar",
      className: (0, _classnames.default)(theme.avatar, className)
    }, other), children, cover && typeof image === 'string' && _react.default.createElement("span", {
      "aria-label": alt,
      className: theme.image,
      style: {
        backgroundImage: "url(".concat(image, ")")
      }
    }), !cover && (typeof image === 'string' ? _react.default.createElement("img", {
      alt: alt,
      className: theme.image,
      src: image,
      title: title
    }) : image), typeof icon === 'string' ? _react.default.createElement(FontIcon, {
      className: theme.letter,
      value: icon,
      alt: alt
    }) : icon, title ? _react.default.createElement("span", {
      className: theme.letter
    }, title[0]) : null);
  };

  Avatar.propTypes = {
    alt: _propTypes.default.string,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    cover: _propTypes.default.bool,
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    theme: _propTypes.default.shape({
      avatar: _propTypes.default.string,
      image: _propTypes.default.string,
      letter: _propTypes.default.string
    }),
    title: _propTypes.default.string
  };
  Avatar.defaultProps = {
    alt: '',
    cover: false
  };
  return Avatar;
};

exports.avatarFactory = factory;
var Avatar = factory(_FontIcon.default);
exports.Avatar = Avatar;

var _default = (0, _reactCssThemr.themr)(_identifiers.AVATAR)(Avatar);

exports.default = _default;