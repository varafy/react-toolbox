"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.dropdownFactory = exports.default = void 0;

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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Input = _interopRequireDefault(require("../input/Input"));

var _events = _interopRequireDefault(require("../utils/events"));

/* eslint-disable */
var factory = function factory(Input) {
  var Dropdown =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Dropdown, _Component);

    function Dropdown() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Dropdown);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        active: false,
        up: false
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getDocumentEvents", function () {
        return {
          click: _this.handleDocumentClick,
          touchend: _this.handleDocumentClick
        };
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getSelectedItem", function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.props.source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            if (item[_this.props.valueKey] === _this.props.value) return item;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return !_this.props.allowBlank ? _this.props.source[0] : undefined;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (item, event) {
        if (_this.props.onBlur) _this.props.onBlur(event);

        if (!_this.props.disabled && _this.props.onChange) {
          if (_this.props.name) event.target.name = _this.props.name;

          _this.props.onChange(item, event);

          _this.close();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
        _this.open(event);

        _events.default.pauseEvent(event);

        if (_this.props.onClick) _this.props.onClick(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDocumentClick", function (event) {
        if (_this.state.active && !_events.default.targetIsDescendant(event, _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))))) {
          _this.setState({
            active: false
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "close", function () {
        if (_this.state.active) {
          _this.setState({
            active: false
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "open", function (event) {
        if (_this.state.active) return;
        var client = event.target.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.offsetHeight;
        var up = _this.props.auto ? client.top > screenHeight / 2 + client.height : false;

        _this.setState({
          active: true,
          up: up
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleFocus", function (event) {
        event.stopPropagation();
        if (!_this.props.disabled) _this.open(event);
        if (_this.props.onFocus) _this.props.onFocus(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleBlur", function (event) {
        event.stopPropagation();
        if (_this.state.active) _this.close();
        if (_this.props.onBlur) _this.props.onBlur(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderValue", function (item, idx) {
        var _classnames;

        var _this$props = _this.props,
            labelKey = _this$props.labelKey,
            theme = _this$props.theme,
            valueKey = _this$props.valueKey;
        var className = (0, _classnames4.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.selected, item[valueKey] === _this.props.value), (0, _defineProperty2.default)(_classnames, theme.disabled, item.disabled), _classnames));
        return _react.default.createElement("li", {
          key: idx,
          className: className,
          onClick: !item.disabled && _this.handleSelect.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), item[valueKey])
        }, _this.props.template ? _this.props.template(item) : item[labelKey]);
      });
      return _this;
    }

    (0, _createClass2.default)(Dropdown, [{
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _events.default.addEventsToDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          _events.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.active) {
          _events.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: "renderTemplateValue",
      value: function renderTemplateValue(selected) {
        var _classnames2;

        var theme = this.props.theme;
        var className = (0, _classnames4.default)(theme.field, (_classnames2 = {}, (0, _defineProperty2.default)(_classnames2, theme.errored, this.props.error), (0, _defineProperty2.default)(_classnames2, theme.disabled, this.props.disabled), (0, _defineProperty2.default)(_classnames2, theme.required, this.props.required), _classnames2));
        return _react.default.createElement("div", {
          className: className,
          onClick: this.handleClick
        }, _react.default.createElement("div", {
          className: "".concat(theme.templateValue, " ").concat(theme.value)
        }, this.props.template(selected)), this.props.label ? _react.default.createElement("label", {
          className: theme.label
        }, this.props.label, this.props.required ? _react.default.createElement("span", {
          className: theme.required
        }, " * ") : null) : null, this.props.error ? _react.default.createElement("span", {
          className: theme.error
        }, this.props.error) : null);
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames3;

        var _this$props2 = this.props,
            allowBlank = _this$props2.allowBlank,
            auto = _this$props2.auto,
            labelKey = _this$props2.labelKey,
            required = _this$props2.required,
            onChange = _this$props2.onChange,
            onFocus = _this$props2.onFocus,
            onBlur = _this$props2.onBlur,
            source = _this$props2.source,
            template = _this$props2.template,
            theme = _this$props2.theme,
            valueKey = _this$props2.valueKey,
            others = (0, _objectWithoutProperties2.default)(_this$props2, ["allowBlank", "auto", "labelKey", "required", "onChange", "onFocus", "onBlur", "source", "template", "theme", "valueKey"]);
        var selected = this.getSelectedItem();
        var className = (0, _classnames4.default)(theme.dropdown, (_classnames3 = {}, (0, _defineProperty2.default)(_classnames3, theme.up, this.state.up), (0, _defineProperty2.default)(_classnames3, theme.active, this.state.active), (0, _defineProperty2.default)(_classnames3, theme.disabled, this.props.disabled), (0, _defineProperty2.default)(_classnames3, theme.required, this.props.required), _classnames3), this.props.className);
        return _react.default.createElement("div", {
          className: className,
          "data-react-toolbox": "dropdown",
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          tabIndex: "-1"
        }, _react.default.createElement(Input, (0, _extends2.default)({}, others, {
          tabIndex: "0",
          className: theme.value,
          onClick: this.handleClick,
          required: this.props.required,
          readOnly: true,
          type: template && selected ? 'hidden' : null,
          theme: theme,
          themeNamespace: "input",
          value: selected && selected[labelKey] ? selected[labelKey] : ''
        })), template && selected ? this.renderTemplateValue(selected) : null, _react.default.createElement("ul", {
          className: theme.values
        }, source.map(this.renderValue)));
      }
    }]);
    return Dropdown;
  }(_react.Component);

  (0, _defineProperty2.default)(Dropdown, "propTypes", {
    allowBlank: _propTypes.default.bool,
    auto: _propTypes.default.bool,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    error: _propTypes.default.string,
    label: _propTypes.default.string,
    labelKey: _propTypes.default.string,
    name: _propTypes.default.string,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onClick: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    required: _propTypes.default.bool,
    source: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])).isRequired,
    template: _propTypes.default.func,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      disabled: _propTypes.default.string,
      dropdown: _propTypes.default.string,
      error: _propTypes.default.string,
      errored: _propTypes.default.string,
      field: _propTypes.default.string,
      label: _propTypes.default.string,
      required: _propTypes.default.string,
      selected: _propTypes.default.string,
      templateValue: _propTypes.default.string,
      up: _propTypes.default.string,
      value: _propTypes.default.string,
      values: _propTypes.default.string
    }),
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    valueKey: _propTypes.default.string
  });
  (0, _defineProperty2.default)(Dropdown, "defaultProps", {
    auto: true,
    className: '',
    allowBlank: true,
    disabled: false,
    labelKey: 'label',
    required: false,
    valueKey: 'value'
  });
  return Dropdown;
};

exports.dropdownFactory = factory;
var Dropdown = factory(_Input.default);
exports.Dropdown = Dropdown;

var _default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN)(Dropdown);

exports.default = _default;