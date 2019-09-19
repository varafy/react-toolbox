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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils/utils");

var _ClockHand = _interopRequireDefault(require("./ClockHand"));

var _ClockFace = _interopRequireDefault(require("./ClockFace"));

var minutes = (0, _utils.range)(0, 60, 5);
var step = 360 / 60;

var Minutes =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Minutes, _Component);

  function Minutes() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Minutes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Minutes)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleHandMove", function (degrees) {
      _this.props.onChange(degrees / step);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseDown", function (event) {
      _this.handNode.mouseStart(event);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTouchStart", function (event) {
      _this.handNode.touchStart(event);
    });
    return _this;
  }

  (0, _createClass2.default)(Minutes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ClockFace.default, {
        onTouchStart: this.handleTouchStart,
        onMouseDown: this.handleMouseDown,
        numbers: minutes,
        spacing: this.props.spacing,
        radius: this.props.radius,
        active: this.props.selected,
        theme: this.props.theme,
        twoDigits: true
      }), _react.default.createElement(_ClockHand.default, {
        ref: function ref(node) {
          _this2.handNode = node;
        },
        className: minutes.indexOf(this.props.selected) === -1 ? this.props.theme.small : '',
        angle: this.props.selected * step,
        length: this.props.radius - this.props.spacing,
        onMove: this.handleHandMove,
        origin: this.props.center,
        theme: this.props.theme,
        step: step
      }));
    }
  }]);
  return Minutes;
}(_react.Component);

(0, _defineProperty2.default)(Minutes, "propTypes", {
  center: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  onChange: _propTypes.default.func,
  radius: _propTypes.default.number,
  selected: _propTypes.default.number,
  spacing: _propTypes.default.number,
  theme: _propTypes.default.shape({
    small: _propTypes.default.string
  })
});
(0, _defineProperty2.default)(Minutes, "defaultProps", {
  selected: 0,
  onChange: null
});
var _default = Minutes;
exports.default = _default;