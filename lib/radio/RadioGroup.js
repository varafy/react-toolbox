"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = exports.radioGroupFactory = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _isComponentOfType = _interopRequireDefault(require("../utils/is-component-of-type"));

var factory = function factory(RadioButton) {
  var RadioGroup =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(RadioGroup, _Component);

    function RadioGroup() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, RadioGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (value, event) {
        if (_this.props.onChange) _this.props.onChange(value, event);
      });
      return _this;
    }

    (0, _createClass2.default)(RadioGroup, [{
      key: "renderRadioButtons",
      value: function renderRadioButtons() {
        var _this2 = this;

        return _react.default.Children.map(this.props.children, function (child) {
          return !(0, _isComponentOfType.default)(RadioButton, child) ? child : _react.default.cloneElement(child, {
            checked: child.props.value === _this2.props.value,
            disabled: _this2.props.disabled || child.props.disabled,
            onChange: _this2.handleChange.bind(_this2, child.props.value)
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement("div", {
          "data-react-toolbox": "radio-group",
          className: this.props.className
        }, this.renderRadioButtons());
      }
    }]);
    return RadioGroup;
  }(_react.Component);

  (0, _defineProperty2.default)(RadioGroup, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    value: _propTypes.default.string
  });
  (0, _defineProperty2.default)(RadioGroup, "defaultProps", {
    className: '',
    disabled: false
  });
  return RadioGroup;
};

exports.radioGroupFactory = factory;
var RadioGroup = factory(_RadioButton.default);
exports.RadioGroup = RadioGroup;

var _default = (0, _reactCssThemr.themr)(_identifiers.RADIO)(RadioGroup);

exports.default = _default;