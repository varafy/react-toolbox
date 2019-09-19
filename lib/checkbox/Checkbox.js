"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.checkboxFactory = exports.default = void 0;

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

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _Check = _interopRequireDefault(require("./Check"));

var factory = function factory(Check) {
  var Checkbox =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Checkbox, _Component);

    function Checkbox() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Checkbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToggle", function (event) {
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();

        if (!_this.props.disabled && _this.props.onChange) {
          _this.props.onChange(!_this.props.checked, event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Checkbox, [{
      key: "blur",
      value: function blur() {
        if (this.inputNode) {
          this.inputNode.blur();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        if (this.inputNode) {
          this.inputNode.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            checked = _this$props.checked,
            children = _this$props.children,
            disabled = _this$props.disabled,
            label = _this$props.label,
            name = _this$props.name,
            style = _this$props.style,
            onChange = _this$props.onChange,
            onMouseEnter = _this$props.onMouseEnter,
            onMouseLeave = _this$props.onMouseLeave,
            theme = _this$props.theme,
            others = (0, _objectWithoutProperties2.default)(_this$props, ["checked", "children", "disabled", "label", "name", "style", "onChange", "onMouseEnter", "onMouseLeave", "theme"]);
        var className = (0, _classnames2.default)(theme.field, (0, _defineProperty2.default)({}, theme.disabled, this.props.disabled), this.props.className);
        return _react.default.createElement("label", {
          "data-react-toolbox": "checkbox",
          className: className,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, _react.default.createElement("input", (0, _extends2.default)({}, others, {
          checked: checked,
          className: theme.input,
          disabled: disabled,
          name: name,
          onChange: function onChange() {},
          onClick: this.handleToggle,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          type: "checkbox"
        })), _react.default.createElement(Check, {
          checked: checked,
          disabled: disabled,
          rippleClassName: theme.ripple,
          style: style,
          theme: theme
        }), label ? _react.default.createElement("span", {
          "data-react-toolbox": "label",
          className: theme.text
        }, label) : null, children);
      }
    }]);
    return Checkbox;
  }(_react.Component);

  (0, _defineProperty2.default)(Checkbox, "propTypes", {
    checked: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    name: _propTypes.default.string,
    onChange: _propTypes.default.func,
    onMouseEnter: _propTypes.default.func,
    onMouseLeave: _propTypes.default.func,
    style: _reactStyleProptype.default,
    theme: _propTypes.default.shape({
      disabled: _propTypes.default.string,
      field: _propTypes.default.string,
      input: _propTypes.default.string,
      ripple: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Checkbox, "defaultProps", {
    checked: false,
    className: '',
    disabled: false
  });
  return Checkbox;
};

exports.checkboxFactory = factory;
var Check = (0, _Check.default)((0, _Ripple.default)({
  centered: true,
  spread: 2.6
}));
var Checkbox = factory(Check);
exports.Checkbox = Checkbox;

var _default = (0, _reactCssThemr.themr)(_identifiers.CHECKBOX)(Checkbox);

exports.default = _default;