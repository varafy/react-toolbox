"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _prefixer = _interopRequireDefault(require("../utils/prefixer"));

var ProgressBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ProgressBar, _Component);

  function ProgressBar() {
    (0, _classCallCheck2.default)(this, ProgressBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProgressBar).apply(this, arguments));
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "calculateRatio",
    value: function calculateRatio(value) {
      if (value < this.props.min) return 0;
      if (value > this.props.max) return 1;
      return (value - this.props.min) / (this.props.max - this.props.min);
    }
  }, {
    key: "circularStyle",
    value: function circularStyle() {
      return this.props.mode !== 'indeterminate' ? {
        strokeDasharray: "".concat(2 * Math.PI * 25 * this.calculateRatio(this.props.value), ", 400")
      } : undefined;
    }
  }, {
    key: "linearStyle",
    value: function linearStyle() {
      if (this.props.mode !== 'indeterminate') {
        return {
          buffer: (0, _prefixer.default)({
            transform: "scaleX(".concat(this.calculateRatio(this.props.buffer), ")")
          }),
          value: (0, _prefixer.default)({
            transform: "scaleX(".concat(this.calculateRatio(this.props.value), ")")
          })
        };
      }

      return {};
    }
  }, {
    key: "renderCircular",
    value: function renderCircular() {
      return _react.default.createElement("svg", {
        className: this.props.theme.circle,
        viewBox: "0 0 60 60"
      }, _react.default.createElement("circle", {
        className: this.props.theme.path,
        style: this.circularStyle(),
        cx: "30",
        cy: "30",
        r: "25"
      }));
    }
  }, {
    key: "renderLinear",
    value: function renderLinear() {
      var _this$linearStyle = this.linearStyle(),
          buffer = _this$linearStyle.buffer,
          value = _this$linearStyle.value;

      return _react.default.createElement("div", null, _react.default.createElement("span", {
        "data-ref": "buffer",
        className: this.props.theme.buffer,
        style: buffer
      }), _react.default.createElement("span", {
        "data-ref": "value",
        className: this.props.theme.value,
        style: value
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          max = _this$props.max,
          min = _this$props.min,
          mode = _this$props.mode,
          multicolor = _this$props.multicolor,
          type = _this$props.type,
          theme = _this$props.theme,
          value = _this$props.value;

      var _className = (0, _classnames2.default)(theme[type], (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.indeterminate, mode === 'indeterminate'), (0, _defineProperty2.default)(_classnames, theme.multicolor, multicolor), _classnames), className);

      return _react.default.createElement("div", {
        disabled: disabled,
        "data-react-toolbox": "progress-bar",
        "aria-valuenow": value,
        "aria-valuemin": min,
        "aria-valuemax": max,
        className: _className
      }, type === 'circular' ? this.renderCircular() : this.renderLinear());
    }
  }]);
  return ProgressBar;
}(_react.Component);

exports.ProgressBar = ProgressBar;
(0, _defineProperty2.default)(ProgressBar, "propTypes", {
  buffer: _propTypes.default.number,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  mode: _propTypes.default.oneOf(['determinate', 'indeterminate']),
  multicolor: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    buffer: _propTypes.default.string,
    circle: _propTypes.default.string,
    circular: _propTypes.default.string,
    indeterminate: _propTypes.default.string,
    linear: _propTypes.default.string,
    multicolor: _propTypes.default.string,
    path: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  type: _propTypes.default.oneOf(['linear', 'circular']),
  value: _propTypes.default.number
});
(0, _defineProperty2.default)(ProgressBar, "defaultProps", {
  buffer: 0,
  className: '',
  max: 100,
  min: 0,
  mode: 'indeterminate',
  multicolor: false,
  type: 'linear',
  value: 0
});

var _default = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR)(ProgressBar);

exports.default = _default;