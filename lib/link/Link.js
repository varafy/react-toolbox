"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = require("../font_icon/FontIcon");

var Link = function Link(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      count = _ref.count,
      icon = _ref.icon,
      label = _ref.label,
      theme = _ref.theme,
      others = (0, _objectWithoutProperties2.default)(_ref, ["active", "children", "className", "count", "icon", "label", "theme"]);

  var _className = (0, _classnames2.default)(theme.link, (0, _defineProperty2.default)({}, theme.active, active), className);

  return _react.default.createElement("a", (0, _extends2.default)({
    "data-react-toolbox": "link",
    className: _className
  }, others), icon ? _react.default.createElement(_FontIcon.FontIcon, {
    className: theme.icon,
    value: icon
  }) : null, label ? _react.default.createElement("abbr", null, label) : null, count && parseInt(count, 10) !== 0 ? _react.default.createElement("small", null, count) : null, children);
};

exports.Link = Link;
Link.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  count: _propTypes.default.number,
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  label: _propTypes.default.string,
  theme: _propTypes.default.shape({
    active: _propTypes.default.string,
    icon: _propTypes.default.string,
    link: _propTypes.default.string
  })
};
Link.defaultProps = {
  active: false,
  className: ''
};

var _default = (0, _reactCssThemr.themr)(_identifiers.LINK)(Link);

exports.default = _default;