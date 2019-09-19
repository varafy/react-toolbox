"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = exports.sidebarFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _Drawer = _interopRequireDefault(require("../drawer/Drawer"));

var _identifiers = require("../identifiers");

var factory = function factory(Drawer) {
  var Sidebar = function Sidebar(_ref) {
    var _classnames;

    var active = _ref.active,
        className = _ref.className,
        clipped = _ref.clipped,
        permanentAt = _ref.permanentAt,
        pinned = _ref.pinned,
        theme = _ref.theme,
        rest = (0, _objectWithoutProperties2.default)(_ref, ["active", "className", "clipped", "permanentAt", "pinned", "theme"]);

    var _className = (0, _classnames2.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.pinned, pinned), (0, _defineProperty2.default)(_classnames, theme.clipped, clipped), _classnames), className);

    return _react.default.createElement(Drawer, (0, _extends2.default)({}, rest, {
      active: active || pinned,
      className: _className,
      insideTree: true,
      theme: theme,
      themeNamespace: "sidebar",
      type: "right",
      withOverlay: !pinned
    }));
  };

  Sidebar.propTypes = {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    clipped: _propTypes.default.bool,
    permanentAt: _propTypes.default.oneOf(['sm', 'smTablet', 'md', 'lg', 'lgTablet', 'xl', 'xxl', 'xxxl']),
    pinned: _propTypes.default.bool,
    right: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      clipped: _propTypes.default.string,
      pinned: _propTypes.default.string
    }),
    width: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
  };
  Sidebar.defaultProps = {
    className: '',
    pinned: false,
    right: false
  };
  return Sidebar;
};

exports.sidebarFactory = factory;
var Sidebar = factory(_Drawer.default);
exports.Sidebar = Sidebar;

var _default = (0, _reactCssThemr.themr)(_identifiers.LAYOUT)(Sidebar);

exports.default = _default;