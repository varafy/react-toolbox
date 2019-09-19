"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.snackbarFactory = exports.default = void 0;

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

var _ActivableRenderer = _interopRequireDefault(require("../hoc/ActivableRenderer"));

var _Button = _interopRequireDefault(require("../button/Button"));

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var factory = function factory(Button) {
  var Snackbar =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Snackbar, _Component);

    function Snackbar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Snackbar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Snackbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "scheduleTimeout", function (props) {
        var onTimeout = props.onTimeout,
            timeout = props.timeout;
        if (_this.curTimeout) clearTimeout(_this.curTimeout);
        _this.curTimeout = setTimeout(function () {
          if (onTimeout) onTimeout();
          _this.curTimeout = null;
        }, timeout);
      });
      return _this;
    }

    (0, _createClass2.default)(Snackbar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.active && this.props.timeout) {
          this.scheduleTimeout(this.props);
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active && nextProps.timeout) {
          this.scheduleTimeout(nextProps);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.curTimeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            action = _this$props.action,
            active = _this$props.active,
            children = _this$props.children,
            label = _this$props.label,
            onClick = _this$props.onClick,
            theme = _this$props.theme,
            type = _this$props.type;
        var className = (0, _classnames2.default)([theme.snackbar, theme[type]], (0, _defineProperty2.default)({}, theme.active, active), this.props.className);
        return _react.default.createElement(_Portal.default, {
          className: theme.portal
        }, _react.default.createElement("div", {
          "data-react-toolbox": "snackbar",
          className: className
        }, _react.default.createElement("span", {
          className: theme.label
        }, label, children), action ? _react.default.createElement(Button, {
          className: theme.button,
          label: action,
          onClick: onClick
        }) : null));
      }
    }]);
    return Snackbar;
  }(_react.Component);

  (0, _defineProperty2.default)(Snackbar, "propTypes", {
    action: _propTypes.default.string,
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    onClick: _propTypes.default.func,
    onTimeout: _propTypes.default.func,
    // eslint-disable-line
    theme: _propTypes.default.shape({
      accept: _propTypes.default.string,
      active: _propTypes.default.string,
      button: _propTypes.default.string,
      cancel: _propTypes.default.string,
      label: _propTypes.default.string,
      snackbar: _propTypes.default.string,
      warning: _propTypes.default.string
    }),
    timeout: _propTypes.default.number,
    type: _propTypes.default.oneOf(['accept', 'cancel', 'warning'])
  });
  return (0, _ActivableRenderer.default)()(Snackbar);
};

exports.snackbarFactory = factory;
var Snackbar = factory(_Button.default);
exports.Snackbar = Snackbar;

var _default = (0, _reactCssThemr.themr)(_identifiers.SNACKBAR)(Snackbar);

exports.default = _default;