"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = exports.Calendar = exports.datePickerFactory = exports.DatePickerDialog = exports.default = void 0;

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

var _events = _interopRequireDefault(require("../utils/events"));

var _time = _interopRequireDefault(require("../utils/time"));

var _IconButton = _interopRequireDefault(require("../button/IconButton"));

var _Input = _interopRequireDefault(require("../input/Input"));

var _Dialog = _interopRequireDefault(require("../dialog/Dialog"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _DatePickerDialog = _interopRequireDefault(require("./DatePickerDialog"));

var factory = function factory(Input, DatePickerDialog) {
  var DatePicker =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(DatePicker, _Component);

    function DatePicker() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DatePicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        active: _this.props.active
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDismiss", function () {
        _this.setState({
          active: false
        });

        if (_this.props.onDismiss) {
          _this.props.onDismiss();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputFocus", function (event) {
        _events.default.pauseEvent(event);

        _this.setState({
          active: true
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputBlur", function (event) {
        _events.default.pauseEvent(event);

        _this.setState({
          active: false
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputClick", function (event) {
        _events.default.pauseEvent(event);

        _this.setState({
          active: true
        });

        if (_this.props.onClick) _this.props.onClick(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputKeyPress", function (event) {
        if (event.charCode === 13) {
          _events.default.pauseEvent(event);

          _this.setState({
            active: true
          });
        }

        if (_this.props.onKeyPress) _this.props.onKeyPress(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (value, event) {
        if (_this.props.onChange) _this.props.onChange(value, event);

        _this.setState({
          active: false
        });
      });
      return _this;
    }

    (0, _createClass2.default)(DatePicker, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.props.active && this.state.active !== nextProps.active) {
          this.setState({
            active: nextProps.active
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            onDismiss = _this$props.onDismiss,
            autoOk = _this$props.autoOk,
            cancelLabel = _this$props.cancelLabel,
            enabledDates = _this$props.enabledDates,
            disabledDates = _this$props.disabledDates,
            inputClassName = _this$props.inputClassName,
            inputFormat = _this$props.inputFormat,
            locale = _this$props.locale,
            maxDate = _this$props.maxDate,
            minDate = _this$props.minDate,
            okLabel = _this$props.okLabel,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            readonly = _this$props.readonly,
            sundayFirstDayOfWeek = _this$props.sundayFirstDayOfWeek,
            value = _this$props.value,
            others = (0, _objectWithoutProperties2.default)(_this$props, ["active", "onDismiss", "autoOk", "cancelLabel", "enabledDates", "disabledDates", "inputClassName", "inputFormat", "locale", "maxDate", "minDate", "okLabel", "onEscKeyDown", "onOverlayClick", "readonly", "sundayFirstDayOfWeek", "value"]);
        var finalInputFormat = inputFormat || _time.default.formatDate;
        var date = Object.prototype.toString.call(value) === '[object Date]' ? value : undefined;
        var formattedDate = date === undefined ? '' : finalInputFormat(value, locale);
        return _react.default.createElement("div", {
          "data-react-toolbox": "date-picker",
          className: this.props.theme.container
        }, _react.default.createElement(Input, (0, _extends2.default)({}, others, {
          className: (0, _classnames2.default)(this.props.theme.input, (0, _defineProperty2.default)({}, inputClassName, inputClassName)),
          disabled: readonly,
          error: this.props.error,
          icon: this.props.icon,
          label: this.props.label,
          name: this.props.name,
          onFocus: this.handleInputFocus,
          onKeyPress: this.handleInputKeyPress,
          onClick: this.handleInputClick,
          readOnly: true,
          type: "text",
          value: formattedDate
        })), _react.default.createElement(DatePickerDialog, {
          active: this.state.active,
          autoOk: autoOk,
          cancelLabel: cancelLabel,
          className: this.props.className,
          disabledDates: disabledDates,
          enabledDates: enabledDates,
          locale: locale,
          maxDate: maxDate,
          minDate: minDate,
          name: this.props.name,
          onDismiss: this.handleDismiss,
          okLabel: okLabel,
          onEscKeyDown: onEscKeyDown || this.handleDismiss,
          onOverlayClick: onOverlayClick || this.handleDismiss,
          onSelect: this.handleSelect,
          sundayFirstDayOfWeek: sundayFirstDayOfWeek,
          theme: this.props.theme,
          value: date
        }));
      }
    }]);
    return DatePicker;
  }(_react.Component);

  (0, _defineProperty2.default)(DatePicker, "propTypes", {
    active: _propTypes.default.bool,
    autoOk: _propTypes.default.bool,
    cancelLabel: _propTypes.default.string,
    className: _propTypes.default.string,
    disabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    enabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    error: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    inputClassName: _propTypes.default.string,
    inputFormat: _propTypes.default.func,
    label: _propTypes.default.string,
    locale: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    maxDate: _propTypes.default.instanceOf(Date),
    minDate: _propTypes.default.instanceOf(Date),
    name: _propTypes.default.string,
    okLabel: _propTypes.default.string,
    onChange: _propTypes.default.func,
    onClick: _propTypes.default.func,
    onDismiss: _propTypes.default.func,
    onEscKeyDown: _propTypes.default.func,
    onKeyPress: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    readonly: _propTypes.default.bool,
    sundayFirstDayOfWeek: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      container: _propTypes.default.string,
      input: _propTypes.default.string
    }),
    value: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string])
  });
  (0, _defineProperty2.default)(DatePicker, "defaultProps", {
    active: false,
    locale: 'en',
    sundayFirstDayOfWeek: false
  });
  return DatePicker;
};

exports.datePickerFactory = factory;
var Calendar = (0, _Calendar.default)(_IconButton.default);
exports.Calendar = Calendar;
var DatePickerDialog = (0, _DatePickerDialog.default)(_Dialog.default, Calendar);
exports.DatePickerDialog = DatePickerDialog;
var DatePicker = factory(_Input.default, DatePickerDialog);
exports.DatePicker = DatePicker;

var _default = (0, _reactCssThemr.themr)(_identifiers.DATE_PICKER)(DatePicker);

exports.default = _default;