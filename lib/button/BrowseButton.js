"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseButton = exports.browseButtonFactory = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var factory = function factory(ripple, FontIcon) {
  var SimpleBrowseButton =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(SimpleBrowseButton, _Component);

    function SimpleBrowseButton() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, SimpleBrowseButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SimpleBrowseButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getLevel", function () {
        if (_this.props.primary) return 'primary';
        if (_this.props.accent) return 'accent';
        return 'neutral';
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getShape", function () {
        if (_this.props.raised) return 'raised';
        if (_this.props.floating) return 'floating';
        return 'flat';
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseUp", function (event) {
        _this.labelNode.blur();

        if (_this.props.onMouseUp) _this.props.onMouseUp(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseLeave", function (event) {
        _this.labelNode.blur();

        if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleFileChange", function (event) {
        if (_this.props.onChange) _this.props.onChange(event);
      });
      return _this;
    }

    (0, _createClass2.default)(SimpleBrowseButton, [{
      key: "render",
      value: function render() {
        var _classnames,
            _this2 = this;

        var _this$props = this.props,
            accent = _this$props.accent,
            accept = _this$props.accept,
            children = _this$props.children,
            className = _this$props.className,
            flat = _this$props.flat,
            floating = _this$props.floating,
            icon = _this$props.icon,
            inverse = _this$props.inverse,
            label = _this$props.label,
            mini = _this$props.mini,
            multiple = _this$props.multiple,
            neutral = _this$props.neutral,
            primary = _this$props.primary,
            raised = _this$props.raised,
            theme = _this$props.theme,
            others = (0, _objectWithoutProperties2.default)(_this$props, ["accent", "accept", "children", "className", "flat", "floating", "icon", "inverse", "label", "mini", "multiple", "neutral", "primary", "raised", "theme"]);
        var element = 'label';
        var level = this.getLevel();
        var shape = this.getShape();
        var classes = (0, _classnames2.default)(theme.button, [theme[shape]], (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme[level], neutral), (0, _defineProperty2.default)(_classnames, theme.mini, mini), (0, _defineProperty2.default)(_classnames, theme.inverse, inverse), _classnames), className);
        var props = (0, _objectSpread2.default)({}, others, {
          ref: function ref(node) {
            _this2.labelNode = node;
          },
          onChange: null,
          className: classes,
          disabled: this.props.disabled,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          'data-react-toolbox': 'label'
        });
        return _react.default.createElement(element, props, icon ? _react.default.createElement(FontIcon, {
          className: theme.icon,
          value: icon
        }) : null, _react.default.createElement("span", null, label), _react.default.createElement("input", {
          className: classes,
          type: "file",
          accept: accept,
          multiple: multiple,
          onChange: this.handleFileChange
        }), children);
      }
    }]);
    return SimpleBrowseButton;
  }(_react.Component);

  (0, _defineProperty2.default)(SimpleBrowseButton, "propTypes", {
    accent: _propTypes.default.bool,
    accept: _propTypes.default.string,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    flat: _propTypes.default.bool,
    floating: _propTypes.default.bool,
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    inverse: _propTypes.default.bool,
    label: _propTypes.default.string,
    mini: _propTypes.default.bool,
    multiple: _propTypes.default.bool,
    neutral: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    onMouseLeave: _propTypes.default.func,
    onMouseUp: _propTypes.default.func,
    primary: _propTypes.default.bool,
    raised: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      accent: _propTypes.default.string,
      button: _propTypes.default.string,
      flat: _propTypes.default.string,
      floating: _propTypes.default.string,
      icon: _propTypes.default.string,
      inverse: _propTypes.default.string,
      mini: _propTypes.default.string,
      neutral: _propTypes.default.string,
      primary: _propTypes.default.string,
      raised: _propTypes.default.string,
      rippleWrapper: _propTypes.default.string,
      toggle: _propTypes.default.string
    }),
    type: _propTypes.default.string
  });
  (0, _defineProperty2.default)(SimpleBrowseButton, "defaultProps", {
    accent: false,
    accept: '*/*',
    className: '',
    flat: false,
    floating: false,
    mini: false,
    multiple: false,
    neutral: true,
    primary: false,
    raised: false
  });
  return ripple(SimpleBrowseButton);
};

exports.browseButtonFactory = factory;
var BrowseButton = factory((0, _Ripple.default)({
  centered: false
}), _FontIcon.default);
exports.BrowseButton = BrowseButton;

var _default = (0, _reactCssThemr.themr)(_identifiers.BUTTON)(BrowseButton);

exports.default = _default;