"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = exports.navigationFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Button = _interopRequireDefault(require("../button/Button"));

var _Link = _interopRequireDefault(require("../link/Link"));

var factory = function factory(Button, Link) {
  var Navigation = function Navigation(_ref) {
    var actions = _ref.actions,
        children = _ref.children,
        className = _ref.className,
        routes = _ref.routes,
        theme = _ref.theme,
        type = _ref.type;

    var _className = (0, _classnames.default)(theme[type], className);

    var buttons = actions.map(function (action, index) {
      return _react.default.createElement(Button, (0, _extends2.default)({
        className: theme.button,
        key: index
      }, action)) // eslint-disable-line
      ;
    });
    var links = routes.map(function (route, index) {
      return _react.default.createElement(Link, (0, _extends2.default)({
        className: theme.link,
        key: index
      }, route)) // eslint-disable-line
      ;
    });
    return _react.default.createElement("nav", {
      "data-react-toolbox": "navigation",
      className: _className
    }, links, buttons, children);
  };

  Navigation.propTypes = {
    actions: _propTypes.default.array,
    // eslint-disable-line
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    routes: _propTypes.default.array,
    // eslint-disable-line
    theme: _propTypes.default.shape({
      button: _propTypes.default.string,
      horizontal: _propTypes.default.string,
      link: _propTypes.default.string,
      vertical: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(['vertical', 'horizontal'])
  };
  Navigation.defaultProps = {
    actions: [],
    className: '',
    type: 'horizontal',
    routes: []
  };
  return Navigation;
};

exports.navigationFactory = factory;
var Navigation = factory(_Button.default, _Link.default);
exports.Navigation = Navigation;

var _default = (0, _reactCssThemr.themr)(_identifiers.NAVIGATION)(Navigation);

exports.default = _default;