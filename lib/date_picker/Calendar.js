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

var _reactTransitionGroup = require("react-transition-group");

var _utils = require("../utils/utils");

var _time = _interopRequireDefault(require("../utils/time"));

var _CalendarMonth = _interopRequireDefault(require("./CalendarMonth"));

var DIRECTION_STEPS = {
  left: -1,
  right: 1
};

var factory = function factory(IconButton) {
  var Calendar =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Calendar, _Component);

    function Calendar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Calendar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        viewDate: _this.props.selectedDate
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDayClick", function (day) {
        _this.props.onChange(_time.default.setDay(_this.state.viewDate, day), true);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleYearClick", function (event) {
        var year = parseInt(event.currentTarget.id, 10);

        var viewDate = _time.default.setYear(_this.props.selectedDate, year);

        _this.setState({
          viewDate: viewDate
        });

        _this.props.onChange(viewDate, false);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleKeys", function (e) {
        var selectedDate = _this.props.selectedDate;

        if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 13) {
          e.preventDefault();
        }

        switch (e.which) {
          case 13:
            _this.props.handleSelect();

            break;
          // enter

          case 37:
            _this.handleDayArrowKey(_time.default.addDays(selectedDate, -1));

            break;
          // left

          case 38:
            _this.handleDayArrowKey(_time.default.addDays(selectedDate, -7));

            break;
          // up

          case 39:
            _this.handleDayArrowKey(_time.default.addDays(selectedDate, 1));

            break;
          // right

          case 40:
            _this.handleDayArrowKey(_time.default.addDays(selectedDate, 7));

            break;
          // down

          default:
            break;
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDayArrowKey", function (date) {
        _this.setState({
          viewDate: date
        });

        _this.props.onChange(date, false);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "changeViewMonth", function (event) {
        var direction = event.currentTarget.id;

        _this.setState(function (state) {
          return {
            direction: direction,
            viewDate: _time.default.addMonths(state.viewDate, DIRECTION_STEPS[direction])
          };
        });
      });
      return _this;
    }

    (0, _createClass2.default)(Calendar, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        document.body.addEventListener('keydown', this.handleKeys);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.activeYearNode) {
          this.scrollToActive();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeys);
      }
    }, {
      key: "scrollToActive",
      value: function scrollToActive() {
        var offset = this.yearsNode.offsetHeight / 2 + this.activeYearNode.offsetHeight / 2;
        this.yearsNode.scrollTop = this.activeYearNode.offsetTop - offset;
      }
    }, {
      key: "renderYears",
      value: function renderYears() {
        var _this2 = this;

        return _react.default.createElement("ul", {
          "data-react-toolbox": "years",
          className: this.props.theme.years,
          ref: function ref(node) {
            _this2.yearsNode = node;
          }
        }, (0, _utils.range)(1900, 2100).map(function (year) {
          return _react.default.createElement("li", {
            className: year === _this2.state.viewDate.getFullYear() ? _this2.props.theme.active : '',
            id: year,
            key: year,
            onClick: _this2.handleYearClick,
            ref: function ref(node) {
              if (year === _this2.state.viewDate.getFullYear()) {
                _this2.activeYearNode = node;
              }
            }
          }, year);
        }));
      }
    }, {
      key: "renderMonths",
      value: function renderMonths() {
        var theme = this.props.theme;
        var animation = this.state.direction === 'left' ? 'slideLeft' : 'slideRight';
        var animationModule = (0, _utils.getAnimationModule)(animation, theme);
        var currentMonth = this.state.viewDate.getMonth();
        return _react.default.createElement("div", {
          "data-react-toolbox": "calendar"
        }, _react.default.createElement(IconButton, {
          id: "left",
          className: theme.prev,
          icon: "chevron_left",
          onClick: this.changeViewMonth
        }), _react.default.createElement(IconButton, {
          id: "right",
          className: theme.next,
          icon: "chevron_right",
          onClick: this.changeViewMonth
        }), _react.default.createElement(_reactTransitionGroup.TransitionGroup, {
          component: null,
          childFactory: function childFactory(child) {
            return _react.default.cloneElement(child, {
              classNames: animationModule
            });
          }
        }, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          mountOnEnter: true,
          unmountOnExit: true,
          key: currentMonth,
          classNames: animationModule,
          timeout: 350
        }, _react.default.createElement(_CalendarMonth.default, {
          enabledDates: this.props.enabledDates,
          disabledDates: this.props.disabledDates,
          key: currentMonth,
          locale: this.props.locale,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onDayClick: this.handleDayClick,
          selectedDate: this.props.selectedDate,
          sundayFirstDayOfWeek: this.props.sundayFirstDayOfWeek,
          theme: this.props.theme,
          viewDate: this.state.viewDate
        }))));
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement("div", {
          className: this.props.theme.calendar
        }, this.props.display === 'months' ? this.renderMonths() : this.renderYears());
      }
    }]);
    return Calendar;
  }(_react.Component);

  (0, _defineProperty2.default)(Calendar, "propTypes", {
    disabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    display: _propTypes.default.oneOf(['months', 'years']),
    enabledDates: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
    handleSelect: _propTypes.default.func,
    locale: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    maxDate: _propTypes.default.instanceOf(Date),
    minDate: _propTypes.default.instanceOf(Date),
    onChange: _propTypes.default.func,
    selectedDate: _propTypes.default.instanceOf(Date),
    sundayFirstDayOfWeek: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      calendar: _propTypes.default.string,
      next: _propTypes.default.string,
      prev: _propTypes.default.string,
      years: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Calendar, "defaultProps", {
    display: 'months',
    selectedDate: new Date()
  });
  return Calendar;
};

var _default = factory;
exports.default = _default;