"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.default = void 0;

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

var Overlay =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Overlay, _Component);

  function Overlay() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Overlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEscKey", function (e) {
      if (_this.props.active && _this.props.onEscKeyDown && e.which === 27) {
        _this.props.onEscKeyDown(e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          active = _this$props.active,
          lockScroll = _this$props.lockScroll,
          onEscKeyDown = _this$props.onEscKeyDown;
      if (onEscKeyDown) document.body.addEventListener('keydown', this.handleEscKey);
      if (active && lockScroll) document.body.style.overflow = 'hidden';
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      if (this.props.lockScroll) {
        var becomingActive = nextProps.active && !this.props.active;
        var becomingUnactive = !nextProps.active && this.props.active;

        if (becomingActive) {
          document.body.style.overflow = 'hidden';
        }

        if (becomingUnactive && !document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
          document.body.style.overflow = '';
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.onEscKeyDown) {
        if (this.props.active && !prevProps.active) {
          document.body.addEventListener('keydown', this.handleEscKey);
        } else if (!this.props.active && prevProps.active) {
          document.body.removeEventListener('keydown', this.handleEscKey);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.active && this.props.lockScroll) {
        if (!document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
          document.body.style.overflow = '';
        }
      }

      if (this.props.onEscKeyDown) {
        document.body.removeEventListener('keydown', this.handleEscKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          className = _this$props2.className,
          lockScroll = _this$props2.lockScroll,
          theme = _this$props2.theme,
          onEscKeyDown = _this$props2.onEscKeyDown,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["active", "className", "lockScroll", "theme", "onEscKeyDown"]); // eslint-disable-line

      return _react.default.createElement("div", (0, _extends2.default)({}, other, {
        onClick: this.handleClick,
        className: (0, _classnames2.default)(theme.overlay, (0, _defineProperty2.default)({}, theme.active, active), className)
      }));
    }
  }]);
  return Overlay;
}(_react.Component);

exports.Overlay = Overlay;
(0, _defineProperty2.default)(Overlay, "propTypes", {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  lockScroll: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onEscKeyDown: _propTypes.default.func,
  theme: _propTypes.default.shape({
    active: _propTypes.default.string,
    backdrop: _propTypes.default.string,
    overlay: _propTypes.default.string
  })
});
(0, _defineProperty2.default)(Overlay, "defaultProps", {
  lockScroll: true
});

var _default = (0, _reactCssThemr.themr)(_identifiers.OVERLAY)(Overlay);

exports.default = _default;