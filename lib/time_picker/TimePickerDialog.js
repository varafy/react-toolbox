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

var _classnames = _interopRequireDefault(require("classnames"));

var _time = _interopRequireDefault(require("../utils/time"));

var _Clock = _interopRequireDefault(require("./Clock"));

var factory = function factory(Dialog) {
  var TimePickerDialog =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(TimePickerDialog, _Component);

    function TimePickerDialog() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TimePickerDialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TimePickerDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        display: 'hours',
        displayTime: new Date(_this.props.value.getTime())
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "actions", [{
        label: _this.props.cancelLabel,
        className: _this.props.theme.button,
        onClick: _this.props.onDismiss
      }, {
        label: _this.props.okLabel,
        className: _this.props.theme.button,
        name: _this.props.name,
        onClick: _this.handleSelect
      }]);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateRefAndCalculateHandleShape", function (node) {
        _this.clockNode = node;

        if (_this.props.active) {
          _this.clockNode.handleCalculateShape();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClockChange", function (value) {
        _this.setState({
          displayTime: value
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (event) {
        _this.props.onSelect(_this.state.displayTime, event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "toggleTimeMode", function () {
        _this.setState(function (state) {
          return {
            displayTime: _time.default.toggleTimeMode(state.displayTime)
          };
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleHandMoved", function () {
        if (_this.state.display === 'hours') _this.setState({
          display: 'minutes'
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "switchDisplay", function (event) {
        _this.setState({
          display: event.target.id
        });
      });
      return _this;
    }

    (0, _createClass2.default)(TimePickerDialog, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value.getTime() !== this.state.displayTime.getTime()) {
          this.setState({
            displayTime: new Date(nextProps.value.getTime())
          });
        }
      }
    }, {
      key: "formatHours",
      value: function formatHours() {
        if (this.props.format === 'ampm') {
          return this.state.displayTime.getHours() % 12 || 12;
        }

        return this.state.displayTime.getHours();
      }
    }, {
      key: "renderAMPMLabels",
      value: function renderAMPMLabels() {
        var theme = this.props.theme;
        if (this.props.format !== 'ampm') return undefined;
        return _react.default.createElement("div", {
          className: theme.ampm
        }, _react.default.createElement("span", {
          className: theme.am,
          onClick: this.toggleTimeMode
        }, "AM"), _react.default.createElement("span", {
          className: theme.pm,
          onClick: this.toggleTimeMode
        }, "PM"));
      }
    }, {
      key: "render",
      value: function render() {
        var theme = this.props.theme;
        var display = "".concat(this.state.display, "Display");
        var format = "".concat(_time.default.getTimeMode(this.state.displayTime), "Format");
        var className = (0, _classnames.default)([theme.dialog, theme[display], theme[format]], this.props.className);
        return _react.default.createElement(Dialog, {
          actions: this.actions,
          active: this.props.active,
          className: className,
          onEscKeyDown: this.props.onEscKeyDown,
          onOverlayClick: this.props.onOverlayClick
        }, _react.default.createElement("header", {
          className: theme.header
        }, _react.default.createElement("span", {
          id: "hours",
          className: theme.hours,
          onClick: this.switchDisplay
        }, "0".concat(this.formatHours()).slice(-2)), _react.default.createElement("span", {
          className: theme.separator
        }, ":"), _react.default.createElement("span", {
          id: "minutes",
          className: theme.minutes,
          onClick: this.switchDisplay
        }, "0".concat(this.state.displayTime.getMinutes()).slice(-2)), this.renderAMPMLabels()), _react.default.createElement(_Clock.default, {
          ref: this.updateRefAndCalculateHandleShape,
          display: this.state.display,
          format: this.props.format,
          onChange: this.handleClockChange,
          onHandMoved: this.handleHandMoved,
          theme: this.props.theme,
          time: this.state.displayTime
        }));
      }
    }]);
    return TimePickerDialog;
  }(_react.Component);

  (0, _defineProperty2.default)(TimePickerDialog, "propTypes", {
    active: _propTypes.default.bool,
    cancelLabel: _propTypes.default.string,
    className: _propTypes.default.string,
    format: _propTypes.default.oneOf(['24hr', 'ampm']),
    name: _propTypes.default.string,
    okLabel: _propTypes.default.string,
    onDismiss: _propTypes.default.func,
    onEscKeyDown: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    onSelect: _propTypes.default.func,
    theme: _propTypes.default.shape({
      am: _propTypes.default.string,
      amFormat: _propTypes.default.string,
      ampm: _propTypes.default.string,
      button: _propTypes.default.string,
      dialog: _propTypes.default.string,
      header: _propTypes.default.string,
      hours: _propTypes.default.string,
      hoursDisplay: _propTypes.default.string,
      minutes: _propTypes.default.string,
      minutesDisplay: _propTypes.default.string,
      pm: _propTypes.default.string,
      pmFormat: _propTypes.default.string,
      separator: _propTypes.default.string
    }),
    value: _propTypes.default.instanceOf(Date)
  });
  (0, _defineProperty2.default)(TimePickerDialog, "defaultProps", {
    active: false,
    cancelLabel: 'Cancel',
    format: '24hr',
    okLabel: 'Ok',
    value: new Date()
  });
  return TimePickerDialog;
};

var _default = factory;
exports.default = _default;