"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils/utils");

var _ClockHand = _interopRequireDefault(require("./ClockHand"));

var _ClockFace = _interopRequireDefault(require("./ClockFace"));

var outerNumbers = [0].concat((0, _toConsumableArray2.default)((0, _utils.range)(13, 24)));
var innerNumbers = [12].concat((0, _toConsumableArray2.default)((0, _utils.range)(1, 12)));
var innerSpacing = 1.7;
var step = 360 / 12;

var Hours =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Hours, _Component);

  function Hours() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Hours);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Hours)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      inner: _this.props.format === '24hr' && _this.props.selected > 0 && _this.props.selected <= 12
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleHandMove", function (degrees, radius) {
      var currentInner = radius < _this.props.radius - _this.props.spacing * innerSpacing;

      if (_this.props.format === '24hr' && _this.state.inner !== currentInner) {
        _this.setState({
          inner: currentInner
        }, function () {
          _this.props.onChange(_this.valueFromDegrees(degrees));
        });
      } else {
        _this.props.onChange(_this.valueFromDegrees(degrees));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseDown", function (event) {
      _this.handNode.mouseStart(event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTouchStart", function (event) {
      _this.handNode.touchStart(event);
    });
    return _this;
  }

  (0, _createClass2.default)(Hours, [{
    key: "valueFromDegrees",
    value: function valueFromDegrees(degrees) {
      if (this.props.format === 'ampm' || this.props.format === '24hr' && this.state.inner) {
        return innerNumbers[degrees / step];
      }

      return outerNumbers[degrees / step];
    }
  }, {
    key: "renderInnerFace",
    value: function renderInnerFace(innerRadius) {
      if (this.props.format !== '24hr') return undefined;
      return _react.default.createElement(_ClockFace.default, {
        onTouchStart: this.handleTouchStart,
        onMouseDown: this.handleMouseDown,
        numbers: innerNumbers,
        spacing: this.props.spacing,
        radius: innerRadius,
        theme: this.props.theme,
        active: this.props.selected
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          format = _this$props.format,
          selected = _this$props.selected,
          radius = _this$props.radius,
          spacing = _this$props.spacing,
          center = _this$props.center,
          onHandMoved = _this$props.onHandMoved;
      var is24hr = format === '24hr';
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ClockFace.default, {
        onTouchStart: this.handleTouchStart,
        onMouseDown: this.handleMouseDown,
        numbers: is24hr ? outerNumbers : innerNumbers,
        spacing: spacing,
        radius: radius,
        twoDigits: is24hr,
        active: is24hr ? selected : selected % 12 || 12,
        theme: this.props.theme
      }), this.renderInnerFace(radius - spacing * innerSpacing), _react.default.createElement(_ClockHand.default, {
        ref: function ref(node) {
          _this2.handNode = node;
        },
        angle: selected * step,
        length: (this.state.inner ? radius - spacing * innerSpacing : radius) - spacing,
        onMove: this.handleHandMove,
        theme: this.props.theme,
        onMoved: onHandMoved,
        origin: center,
        step: step
      }));
    }
  }]);
  return Hours;
}(_react.Component);

(0, _defineProperty2.default)(Hours, "propTypes", {
  center: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  format: _propTypes.default.oneOf(['24hr', 'ampm']),
  onChange: _propTypes.default.func,
  onHandMoved: _propTypes.default.func,
  radius: _propTypes.default.number,
  selected: _propTypes.default.number,
  spacing: _propTypes.default.number,
  theme: _propTypes.default.object // eslint-disable-line

});
var _default = Hours;
exports.default = _default;