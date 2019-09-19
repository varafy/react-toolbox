"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.switchFactory = exports.default = void 0;

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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var _Thumb = _interopRequireDefault(require("./Thumb"));

var factory = function factory(Thumb) {
  var Switch =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Switch, _Component);

    function Switch() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Switch);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToggle", function (event) {
        if (event.pageX !== 0 && event.pageY !== 0) _this.blur();

        if (!_this.props.disabled && _this.props.onChange) {
          _this.props.onChange(!_this.props.checked, event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Switch, [{
      key: "blur",
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: "focus",
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            checked = _this$props.checked,
            className = _this$props.className,
            disabled = _this$props.disabled,
            onChange = _this$props.onChange,
            ripple = _this$props.ripple,
            theme = _this$props.theme,
            others = (0, _objectWithoutProperties2.default)(_this$props, ["checked", "className", "disabled", "onChange", "ripple", "theme"]);

        var _className = (0, _classnames.default)(theme[disabled ? 'disabled' : 'field'], className);

        return _react.default.createElement("label", {
          "data-react-toolbox": "switch",
          className: _className
        }, _react.default.createElement("input", (0, _extends2.default)({}, others, {
          checked: this.props.checked,
          className: theme.input,
          onClick: this.handleToggle,
          readOnly: true,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          type: "checkbox"
        })), _react.default.createElement("span", {
          className: theme[checked ? 'on' : 'off']
        }, _react.default.createElement(Thumb, {
          disabled: this.props.disabled,
          theme: theme,
          ripple: ripple
        })), this.props.label ? _react.default.createElement("span", {
          className: theme.text
        }, this.props.label) : null);
      }
    }]);
    return Switch;
  }(_react.Component);

  (0, _defineProperty2.default)(Switch, "propTypes", {
    checked: _propTypes.default.bool,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    label: _propTypes.default.string,
    name: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    ripple: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      disabled: _propTypes.default.string,
      field: _propTypes.default.string,
      input: _propTypes.default.string,
      off: _propTypes.default.string,
      on: _propTypes.default.string,
      ripple: _propTypes.default.string,
      text: _propTypes.default.string,
      thumb: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Switch, "defaultProps", {
    checked: false,
    className: '',
    disabled: false
  });
  return Switch;
};

exports.switchFactory = factory;
var Thumb = (0, _Thumb.default)((0, _Ripple.default)({
  centered: true,
  spread: 2.6
}));
var Switch = factory(Thumb);
exports.Switch = Switch;

var _default = (0, _reactCssThemr.themr)(_identifiers.SWITCH)(Switch);

exports.default = _default;