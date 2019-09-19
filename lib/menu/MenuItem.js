"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.menuItemFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = require("../font_icon/FontIcon");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var factory = function factory(ripple) {
  var MenuItem =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(MenuItem, _Component);

    function MenuItem() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, MenuItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event, (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }
      });
      return _this;
    }

    (0, _createClass2.default)(MenuItem, [{
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props = this.props,
            caption = _this$props.caption,
            children = _this$props.children,
            disabled = _this$props.disabled,
            icon = _this$props.icon,
            selected = _this$props.selected,
            shortcut = _this$props.shortcut,
            theme = _this$props.theme,
            others = (0, _objectWithoutProperties2.default)(_this$props, ["caption", "children", "disabled", "icon", "selected", "shortcut", "theme"]);
        var className = (0, _classnames2.default)(theme.menuItem, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.selected, selected), (0, _defineProperty2.default)(_classnames, theme.disabled, disabled), _classnames), this.props.className);
        return _react.default.createElement("li", (0, _extends2.default)({}, others, {
          "data-react-toolbox": "menu-item",
          className: className,
          onClick: this.handleClick
        }), icon ? _react.default.createElement(_FontIcon.FontIcon, {
          value: icon,
          className: theme.icon
        }) : null, _react.default.createElement("span", {
          className: theme.caption
        }, caption), shortcut ? _react.default.createElement("small", {
          className: theme.shortcut
        }, shortcut) : null, children);
      }
    }]);
    return MenuItem;
  }(_react.Component);

  (0, _defineProperty2.default)(MenuItem, "propTypes", {
    caption: _propTypes.default.string,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    onClick: _propTypes.default.func,
    selected: _propTypes.default.bool,
    shortcut: _propTypes.default.string,
    theme: _propTypes.default.shape({
      caption: _propTypes.default.string,
      disabled: _propTypes.default.string,
      icon: _propTypes.default.string,
      menuItem: _propTypes.default.string,
      selected: _propTypes.default.string,
      shortcut: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(MenuItem, "defaultProps", {
    className: '',
    disabled: false,
    selected: false
  });
  return ripple(MenuItem);
};

exports.menuItemFactory = factory;
var MenuItem = factory((0, _Ripple.default)({}));
exports.MenuItem = MenuItem;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(MenuItem);

exports.default = _default;