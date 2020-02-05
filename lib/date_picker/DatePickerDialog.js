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

var factory = function factory(Dialog, Calendar) {
  var CalendarDialog =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(CalendarDialog, _Component);

    function CalendarDialog() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, CalendarDialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CalendarDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        display: 'months',
        date: _this.props.value
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
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleNewDate", function (value, dayClick) {
        var state = {
          display: 'months',
          date: value
        };

        if (_time.default.dateOutOfRange(value, _this.props.minDate, _this.props.maxDate)) {
          if (_this.props.maxDate && _this.props.minDate) {
            state.date = _time.default.closestDate(value, _this.props.maxDate, _this.props.minDate);
          } else {
            state.date = _this.props.maxDate || _this.props.minDate;
          }
        }

        _this.setState(state);

        if (dayClick && _this.props.autoOk && _this.props.onSelect) {
          _this.props.onSelect(value);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (event) {
        if (_this.props.onSelect) _this.props.onSelect(_this.state.date, event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSwitchDisplay", function (event) {
        _this.setState({
          display: event.target.id
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateStateDate", function (date) {
        if (Object.prototype.toString.call(date) === '[object Date]') {
          _this.handleNewDate(date, false);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(CalendarDialog, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.updateStateDate(this.props.value);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        this.updateStateDate(nextProps.value);
      }
    }, {
      key: "render",
      value: function render() {
        var theme = this.props.theme;
        var display = "".concat(this.state.display, "Display");
        var className = (0, _classnames.default)(theme.dialog, this.props.className);
        var headerClassName = (0, _classnames.default)(theme.header, theme[display]);

        var shortDayOfWeek = _time.default.getShortDayOfWeek(this.state.date.getDay(), this.props.locale);

        var shortMonth = _time.default.getShortMonth(this.state.date, this.props.locale);

        var date = this.state.date.getDate();
        return _react.default.createElement(Dialog, {
          actions: this.actions,
          active: this.props.active,
          className: className,
          onEscKeyDown: this.props.onEscKeyDown,
          onOverlayClick: this.props.onOverlayClick,
          type: "custom"
        }, _react.default.createElement("header", {
          className: headerClassName
        }, _react.default.createElement("span", {
          id: "years",
          className: theme.year,
          onClick: this.handleSwitchDisplay
        }, this.state.date.getFullYear()), _react.default.createElement("h3", {
          id: "months",
          className: theme.date,
          onClick: this.handleSwitchDisplay
        }, "".concat(shortDayOfWeek, ", ").concat(shortMonth, " ").concat(date))), _react.default.createElement("div", {
          className: theme.calendarWrapper
        }, _react.default.createElement(Calendar, {
          disabledDates: this.props.disabledDates,
          display: this.state.display,
          enabledDates: this.props.enabledDates,
          handleSelect: this.handleSelect,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onChange: this.handleNewDate,
          selectedDate: this.state.date,
          theme: this.props.theme,
          locale: this.props.locale,
          sundayFirstDayOfWeek: this.props.sundayFirstDayOfWeek
        })));
      }
    }]);
    return CalendarDialog;
  }(_react.Component);

  (0, _defineProperty2.default)(CalendarDialog, "propTypes", {
    active: _propTypes.default.bool,
    autoOk: _propTypes.default.bool,
    cancelLabel: _propTypes.default.string,
    className: _propTypes.default.string,
    disabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    enabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    locale: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    maxDate: _propTypes.default.instanceOf(Date),
    minDate: _propTypes.default.instanceOf(Date),
    name: _propTypes.default.string,
    okLabel: _propTypes.default.string,
    onDismiss: _propTypes.default.func,
    onEscKeyDown: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    onSelect: _propTypes.default.func,
    sundayFirstDayOfWeek: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      button: _propTypes.default.string,
      calendarWrapper: _propTypes.default.string,
      date: _propTypes.default.string,
      dialog: _propTypes.default.string,
      header: _propTypes.default.string,
      monthsDisplay: _propTypes.default.string,
      year: _propTypes.default.string,
      yearsDisplay: _propTypes.default.string
    }),
    value: _propTypes.default.instanceOf(Date)
  });
  (0, _defineProperty2.default)(CalendarDialog, "defaultProps", {
    active: false,
    cancelLabel: 'Cancel',
    className: '',
    okLabel: 'Ok',
    value: new Date()
  });
  return CalendarDialog;
};

var _default = factory;
exports.default = _default;