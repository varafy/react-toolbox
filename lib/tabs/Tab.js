"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.tabFactory = exports.default = void 0;

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

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var factory = function factory(ripple, FontIcon) {
  var Tab =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Tab, _Component);

    function Tab() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Tab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
        if (!_this.props.disabled && _this.props.onClick) {
          _this.props.onClick(event, _this.props.index);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Tab, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!prevProps.active && this.props.active && this.props.onActive) {
          this.props.onActive();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props = this.props,
            index = _this$props.index,
            onActive = _this$props.onActive,
            active = _this$props.active,
            activeClassName = _this$props.activeClassName,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            hidden = _this$props.hidden,
            label = _this$props.label,
            icon = _this$props.icon,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["index", "onActive", "active", "activeClassName", "children", "className", "disabled", "hidden", "label", "icon", "theme"]);

        var _className = (0, _classnames2.default)(theme.label, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.active, active), (0, _defineProperty2.default)(_classnames, theme.hidden, hidden), (0, _defineProperty2.default)(_classnames, theme.withText, label), (0, _defineProperty2.default)(_classnames, theme.withIcon, icon), (0, _defineProperty2.default)(_classnames, theme.disabled, disabled), (0, _defineProperty2.default)(_classnames, activeClassName, active), _classnames), className);

        return _react.default.createElement("div", (0, _extends2.default)({}, other, {
          "data-react-toolbox": "tab",
          role: "tab",
          tabIndex: "0",
          className: _className,
          onClick: this.handleClick
        }), icon && _react.default.createElement(FontIcon, {
          className: theme.icon,
          value: icon
        }), label, children);
      }
    }]);
    return Tab;
  }(_react.Component);

  (0, _defineProperty2.default)(Tab, "propTypes", {
    active: _propTypes.default.bool,
    activeClassName: _propTypes.default.string,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    hidden: _propTypes.default.bool,
    icon: _propTypes.default.node,
    index: _propTypes.default.number,
    label: _propTypes.default.node,
    onActive: _propTypes.default.func,
    onClick: _propTypes.default.func,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      disabled: _propTypes.default.string,
      hidden: _propTypes.default.string,
      label: _propTypes.default.string,
      rippleWrapper: _propTypes.default.string,
      withIcon: _propTypes.default.string,
      withText: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Tab, "defaultProps", {
    active: false,
    className: '',
    disabled: false,
    hidden: false
  });
  return ripple(Tab);
};

exports.tabFactory = factory;
var Tab = factory((0, _Ripple.default)({
  centered: false
}), _FontIcon.default);
exports.Tab = Tab;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABS)(Tab);

exports.default = _default;