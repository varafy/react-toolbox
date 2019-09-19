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

var _events = _interopRequireDefault(require("../utils/events"));

var _prefixer = _interopRequireDefault(require("../utils/prefixer"));

var Hand =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Hand, _Component);

  function Hand() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Hand);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Hand)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      knobWidth: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseMove", function (event) {
      _this.move(_events.default.getMousePosition(event));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTouchMove", function (event) {
      _this.move(_events.default.getTouchPosition(event));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseUp", function () {
      _this.end(_this.getMouseEventMap());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTouchEnd", function () {
      _this.end(_this.getTouchEventMap());
    });
    return _this;
  }

  (0, _createClass2.default)(Hand, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          knobWidth: _this2.knobNode.offsetWidth
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _events.default.removeEventsFromDocument(this.getMouseEventMap());

      _events.default.removeEventsFromDocument(this.getTouchEventMap());
    }
  }, {
    key: "getMouseEventMap",
    value: function getMouseEventMap() {
      return {
        mousemove: this.handleMouseMove,
        mouseup: this.handleMouseUp
      };
    }
  }, {
    key: "getTouchEventMap",
    value: function getTouchEventMap() {
      return {
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      };
    }
  }, {
    key: "getPositionRadius",
    value: function getPositionRadius(position) {
      var x = this.props.origin.x - position.x;
      var y = this.props.origin.y - position.y;
      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: "mouseStart",
    value: function mouseStart(event) {
      _events.default.addEventsToDocument(this.getMouseEventMap());

      this.move(_events.default.getMousePosition(event));
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      _events.default.addEventsToDocument(this.getTouchEventMap());

      this.move(_events.default.getTouchPosition(event));

      _events.default.pauseEvent(event);
    }
  }, {
    key: "trimAngleToValue",
    value: function trimAngleToValue(angle) {
      return this.props.step * Math.round(angle / this.props.step);
    }
  }, {
    key: "positionToAngle",
    value: function positionToAngle(position) {
      return (0, _utils.angle360FromPositions)(this.props.origin.x, this.props.origin.y, position.x, position.y);
    }
  }, {
    key: "end",
    value: function end(evts) {
      if (this.props.onMoved) this.props.onMoved();

      _events.default.removeEventsFromDocument(evts);
    }
  }, {
    key: "move",
    value: function move(position) {
      var degrees = this.trimAngleToValue(this.positionToAngle(position));
      var radius = this.getPositionRadius(position);
      if (this.props.onMove) this.props.onMove(degrees === 360 ? 0 : degrees, radius);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var theme = this.props.theme;
      var className = "".concat(theme.hand, " ").concat(this.props.className);
      var handStyle = (0, _prefixer.default)({
        height: this.props.length - this.state.knobWidth / 2,
        transform: "rotate(".concat(this.props.angle, "deg)")
      });
      return _react.default.createElement("div", {
        className: className,
        style: handStyle
      }, _react.default.createElement("div", {
        ref: function ref(node) {
          _this3.knobNode = node;
        },
        className: theme.knob
      }));
    }
  }]);
  return Hand;
}(_react.Component);

(0, _defineProperty2.default)(Hand, "propTypes", {
  angle: _propTypes.default.number,
  className: _propTypes.default.string,
  length: _propTypes.default.number,
  onMove: _propTypes.default.func,
  onMoved: _propTypes.default.func,
  origin: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  step: _propTypes.default.number,
  theme: _propTypes.default.shape({
    hand: _propTypes.default.string,
    knob: _propTypes.default.string
  })
});
(0, _defineProperty2.default)(Hand, "defaultProps", {
  className: '',
  angle: 0,
  length: 0,
  origin: {}
});
var _default = Hand;
exports.default = _default;