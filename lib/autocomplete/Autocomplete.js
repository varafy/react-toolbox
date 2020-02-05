"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = exports.autocompleteFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _utils = require("../utils/utils");

var _identifiers = require("../identifiers.js");

var _Chip = _interopRequireDefault(require("../chip/Chip.js"));

var _Input = _interopRequireDefault(require("../input/Input.js"));

var _events = _interopRequireDefault(require("../utils/events.js"));

/* eslint-disable */
var POSITION = {
  AUTO: 'auto',
  DOWN: 'down',
  UP: 'up'
};

var factory = function factory(Chip, Input) {
  var Autocomplete =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Autocomplete, _Component);

    function Autocomplete() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Autocomplete);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Autocomplete)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        direction: _this.props.direction,
        focus: false,
        showAllSuggestions: _this.props.showSuggestionsWhenValueIsSet,
        query: _this.props.query ? _this.props.query : _this.query(_this.props.value),
        isValueAnObject: false
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (values, event) {
        var value = _this.props.multiple ? values : values[0];
        var showAllSuggestions = _this.props.showSuggestionsWhenValueIsSet;

        var query = _this.query(value);

        if (_this.props.onChange) _this.props.onChange(value, event);

        if (_this.props.keepFocusOnChange) {
          _this.setState({
            query: query,
            showAllSuggestions: showAllSuggestions
          });
        } else {
          _this.setState({
            focus: false,
            query: query,
            showAllSuggestions: showAllSuggestions
          }, function () {
            _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).querySelector('input').blur();
          });
        }

        _this.updateQuery(query, _this.props.query);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseDown", function (event) {
        _this.selectOrCreateActiveItem(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleQueryBlur", function (event) {
        if (_this.state.focus) _this.setState({
          focus: false
        });
        if (_this.props.onBlur) _this.props.onBlur(event, _this.state.active);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateQuery", function (query, notify) {
        if (notify && _this.props.onQueryChange) _this.props.onQueryChange(query);

        _this.setState({
          query: query
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleQueryChange", function (value) {
        var query = _this.clearQuery ? '' : value;
        _this.clearQuery = false;

        _this.updateQuery(query, true);

        _this.setState({
          showAllSuggestions: query ? false : _this.props.showSuggestionsWhenValueIsSet,
          active: null
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleQueryFocus", function (event) {
        event.target.scrollTop = 0;

        _this.setState({
          active: '',
          focus: true
        });

        if (_this.props.onFocus) _this.props.onFocus(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleQueryKeyDown", function (event) {
        // Mark query for clearing in handleQueryChange when pressing backspace and showing all suggestions.
        _this.clearQuery = event.which === 8 && _this.props.showSuggestionsWhenValueIsSet && _this.state.showAllSuggestions;

        if (event.which === 13) {
          _this.selectOrCreateActiveItem(event);
        }

        if (_this.props.onKeyDown) _this.props.onKeyDown(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleQueryKeyUp", function (event) {
        if (event.which === 27) _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))).querySelector('input').blur();

        if ([40, 38].indexOf(event.which) !== -1) {
          var suggestionsKeys = (0, _toConsumableArray2.default)(_this.suggestions().keys());
          var index = suggestionsKeys.indexOf(_this.state.active) + (event.which === 40 ? +1 : -1);
          if (index < 0) index = suggestionsKeys.length - 1;
          if (index >= suggestionsKeys.length) index = 0;

          _this.setState({
            active: suggestionsKeys[index]
          });
        }

        if (_this.props.onKeyUp) _this.props.onKeyUp(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSuggestionHover", function (event) {
        _this.setState({
          active: event.target.id
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "select", function (event, target) {
        _events.default.pauseEvent(event);

        var values = _this.values(_this.props.value);

        var source = _this.source();

        var newValue = target === void 0 ? event.target.id : target;

        if (_this.isValueAnObject()) {
          var newItem = Array.from(source).reduce(function (obj, _ref) {
            var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                k = _ref2[0],
                value = _ref2[1];

            if (k === newValue) {
              obj[k] = value;
            }

            return obj;
          }, {});

          if (Object.keys(newItem).length === 0 && newValue) {
            newItem[newValue] = newValue;
          }

          return _this.handleChange(Object.assign(_this.mapToObject(values), newItem), event);
        }

        _this.handleChange([newValue].concat((0, _toConsumableArray2.default)(values.keys())), event);
      });
      return _this;
    }

    (0, _createClass2.default)(Autocomplete, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiple) {
          var query = nextProps.query ? nextProps.query : this.query(nextProps.value);
          this.updateQuery(query, false);
        }
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.focus && nextState.focus && this.props.direction === POSITION.AUTO) {
          var direction = this.calculateDirection();

          if (this.state.direction !== direction) {
            this.setState({
              direction: direction
            });
          }
        }

        return true;
      }
    }, {
      key: "calculateDirection",
      value: function calculateDirection() {
        if (this.props.direction === 'auto') {
          var client = _reactDom.default.findDOMNode(this.inputNode).getBoundingClientRect();

          var screen_height = window.innerHeight || document.documentElement.offsetHeight;
          var up = client.top > screen_height / 2 + client.height;
          return up ? 'up' : 'down';
        }

        return this.props.direction;
      }
    }, {
      key: "query",
      value: function query(key) {
        var query_value = '';

        if (!this.props.multiple && (0, _utils.isValuePresent)(key)) {
          var source_value = this.source().get("".concat(key));
          query_value = source_value || key;
        }

        return query_value;
      }
    }, {
      key: "selectOrCreateActiveItem",
      value: function selectOrCreateActiveItem(event) {
        var target = this.state.active;

        if (!target) {
          target = this.props.allowCreate ? this.state.query : (0, _toConsumableArray2.default)(this.suggestions().keys())[0];
          this.setState({
            active: target
          });
        }

        this.select(event, target);
      }
    }, {
      key: "normalise",
      value: function normalise(value) {
        var sdiak = 'áâäąáâäąččććççĉĉďđďđééěëēėęéěëēėęĝĝğğġġģģĥĥħħíîíîĩĩīīĭĭįįi̇ıĵĵķķĸĺĺļļŀŀłłĺľĺľňńņŋŋņňńŉóöôőøōōóöőôøřřŕŕŗŗššśśŝŝşşţţťťŧŧũũūūŭŭůůűűúüúüűųųŵŵýyŷŷýyžžźźżżß';
        var bdiak = 'AAAAAAAACCCCCCCCDDDDEEEEEEEEEEEEEGGGGGGGGHHHHIIIIIIIIIIIIIIJJKKKLLLLLLLLLLLLNNNNNNNNNOOOOOOOOOOOORRRRRRSSSSSSSSTTTTTTUUUUUUUUUUUUUUUUUWWYYYYYYZZZZZZS';
        var normalised = '';

        for (var p = 0; p < value.length; p++) {
          if (sdiak.indexOf(value.charAt(p)) !== -1) {
            normalised += bdiak.charAt(sdiak.indexOf(value.charAt(p)));
          } else {
            normalised += value.charAt(p);
          }
        }

        return normalised.toLowerCase().trim();
      }
    }, {
      key: "suggestions",
      value: function suggestions() {
        var suggest = new Map();
        var rawQuery = this.state.query || (this.props.multiple ? '' : this.props.value);
        var query = this.normalise("".concat(rawQuery));
        var values = this.values();
        var source = this.source(); // Suggest any non-set value which matches the query

        if (this.props.multiple) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = (0, _slicedToArray2.default)(_step.value, 2),
                  key = _step$value[0],
                  value = _step$value[1];

              if (!values.has(key) && this.matches(this.normalise(value), query)) {
                suggest.set(key, value);
              }
            } // When multiple is false, suggest any value which matches the query if showAllSuggestions is false

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
        } else if (query && !this.state.showAllSuggestions) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = source[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = (0, _slicedToArray2.default)(_step2.value, 2),
                  key = _step2$value[0],
                  value = _step2$value[1];

              if (this.matches(this.normalise(value), query)) {
                suggest.set(key, value);
              }
            } // When multiple is false, suggest all values when showAllSuggestions is true

          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          suggest = source;
        }

        return suggest;
      }
    }, {
      key: "matches",
      value: function matches(value, query) {
        var suggestionMatch = this.props.suggestionMatch;

        if (suggestionMatch === 'disabled') {
          return true;
        } else if (suggestionMatch === 'start') {
          return value.startsWith(query);
        } else if (suggestionMatch === 'anywhere') {
          return value.includes(query);
        } else if (suggestionMatch === 'word') {
          var re = new RegExp("\\b".concat(query), 'g');
          return re.test(value);
        } else if (suggestionMatch === 'none') {
          return value;
        }

        return false;
      }
    }, {
      key: "source",
      value: function source() {
        var src = this.props.source;

        if (src.hasOwnProperty('length')) {
          return new Map(src.map(function (item) {
            return Array.isArray(item) ? (0, _toConsumableArray2.default)(item) : [item, item];
          }));
        }

        return new Map(Object.keys(src).map(function (key) {
          return ["".concat(key), src[key]];
        }));
      }
    }, {
      key: "values",
      value: function values() {
        var vals = this.props.multiple ? this.props.value : [this.props.value];
        if (!vals) vals = [];

        if (this.props.showSelectedWhenNotInSource && this.isValueAnObject()) {
          return new Map(Object.entries(vals));
        }

        var valueMap = new Map();
        var stringVals = vals.map(function (v) {
          return "".concat(v);
        });
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.source()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = (0, _slicedToArray2.default)(_step3.value, 2),
                k = _step3$value[0],
                v = _step3$value[1];

            if (stringVals.indexOf(k) !== -1) valueMap.set(k, v);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return valueMap;
      }
    }, {
      key: "unselect",
      value: function unselect(key, event) {
        if (!this.props.disabled) {
          var values = this.values(this.props.value);
          values.delete(key);

          if (this.isValueAnObject()) {
            return this.handleChange(this.mapToObject(values), event);
          }

          this.handleChange((0, _toConsumableArray2.default)(values.keys()), event);
        }
      }
    }, {
      key: "isValueAnObject",
      value: function isValueAnObject() {
        return !Array.isArray(this.props.value) && (0, _typeof2.default)(this.props.value) === 'object';
      }
    }, {
      key: "mapToObject",
      value: function mapToObject(map) {
        return Array.from(map).reduce(function (obj, _ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              k = _ref4[0],
              value = _ref4[1];

          obj[k] = value;
          return obj;
        }, {});
      }
    }, {
      key: "renderSelected",
      value: function renderSelected() {
        var _this2 = this;

        if (this.props.multiple) {
          var selectedItems = (0, _toConsumableArray2.default)(this.values()).map(function (_ref5) {
            var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            return _react.default.createElement(Chip, {
              key: key,
              className: _this2.props.theme.value,
              deletable: true,
              onDeleteClick: _this2.unselect.bind(_this2, key)
            }, value);
          });
          return _react.default.createElement("ul", {
            className: this.props.theme.values
          }, selectedItems);
        }
      }
    }, {
      key: "renderSuggestions",
      value: function renderSuggestions() {
        var _this3 = this;

        var theme = this.props.theme;
        var suggestions = (0, _toConsumableArray2.default)(this.suggestions()).map(function (_ref7) {
          var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
              key = _ref8[0],
              value = _ref8[1];

          var className = (0, _classnames4.default)(theme.suggestion, (0, _defineProperty2.default)({}, theme.active, _this3.state.active === key));
          return _react.default.createElement("li", {
            id: key,
            key: key,
            className: className,
            onMouseDown: _this3.handleMouseDown,
            onMouseOver: _this3.handleSuggestionHover
          }, value);
        });
        return _react.default.createElement("ul", {
          className: (0, _classnames4.default)(theme.suggestions, (0, _defineProperty2.default)({}, theme.up, this.state.direction === 'up'))
        }, suggestions);
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _this$props = this.props,
            allowCreate = _this$props.allowCreate,
            error = _this$props.error,
            label = _this$props.label,
            source = _this$props.source,
            suggestionMatch = _this$props.suggestionMatch,
            query = _this$props.query,
            selectedPosition = _this$props.selectedPosition,
            keepFocusOnChange = _this$props.keepFocusOnChange,
            showSuggestionsWhenValueIsSet = _this$props.showSuggestionsWhenValueIsSet,
            showSelectedWhenNotInSource = _this$props.showSelectedWhenNotInSource,
            onQueryChange = _this$props.onQueryChange,
            theme = _this$props.theme,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["allowCreate", "error", "label", "source", "suggestionMatch", "query", "selectedPosition", "keepFocusOnChange", "showSuggestionsWhenValueIsSet", "showSelectedWhenNotInSource", "onQueryChange", "theme"]);
        var className = (0, _classnames4.default)(theme.autocomplete, (0, _defineProperty2.default)({}, theme.focus, this.state.focus), this.props.className);
        return _react.default.createElement("div", {
          "data-react-toolbox": "autocomplete",
          className: className
        }, this.props.selectedPosition === 'above' ? this.renderSelected() : null, _react.default.createElement(Input, (0, _extends2.default)({}, other, {
          ref: function ref(node) {
            _this4.inputNode = node;
          },
          autoComplete: "off",
          className: theme.input,
          error: error,
          label: label,
          onBlur: this.handleQueryBlur,
          onChange: this.handleQueryChange,
          onFocus: this.handleQueryFocus,
          onKeyDown: this.handleQueryKeyDown,
          onKeyUp: this.handleQueryKeyUp,
          theme: theme,
          themeNamespace: "input",
          value: this.state.query
        })), this.renderSuggestions(), this.props.selectedPosition === 'below' ? this.renderSelected() : null);
      }
    }]);
    return Autocomplete;
  }(_react.Component);

  (0, _defineProperty2.default)(Autocomplete, "propTypes", {
    allowCreate: _propTypes.default.bool,
    className: _propTypes.default.string,
    direction: _propTypes.default.oneOf(['auto', 'up', 'down']),
    disabled: _propTypes.default.bool,
    error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    keepFocusOnChange: _propTypes.default.bool,
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    multiple: _propTypes.default.bool,
    onBlur: _propTypes.default.func,
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    onKeyDown: _propTypes.default.func,
    onKeyUp: _propTypes.default.func,
    onQueryChange: _propTypes.default.func,
    query: _propTypes.default.string,
    selectedPosition: _propTypes.default.oneOf(['above', 'below', 'none']),
    showSelectedWhenNotInSource: _propTypes.default.bool,
    showSuggestionsWhenValueIsSet: _propTypes.default.bool,
    source: _propTypes.default.any,
    suggestionMatch: _propTypes.default.oneOf(['disabled', 'start', 'anywhere', 'word', 'none']),
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      autocomplete: _propTypes.default.string,
      focus: _propTypes.default.string,
      input: _propTypes.default.string,
      suggestion: _propTypes.default.string,
      suggestions: _propTypes.default.string,
      up: _propTypes.default.string,
      value: _propTypes.default.string,
      values: _propTypes.default.string
    }),
    value: _propTypes.default.any
  });
  (0, _defineProperty2.default)(Autocomplete, "defaultProps", {
    allowCreate: false,
    className: '',
    direction: 'auto',
    keepFocusOnChange: false,
    multiple: true,
    selectedPosition: 'above',
    showSelectedWhenNotInSource: false,
    showSuggestionsWhenValueIsSet: false,
    source: {},
    suggestionMatch: 'start'
  });
  return Autocomplete;
};

exports.autocompleteFactory = factory;
var Autocomplete = factory(_Chip.default, _Input.default);
exports.Autocomplete = Autocomplete;

var _default = (0, _reactCssThemr.themr)(_identifiers.AUTOCOMPLETE, null, {
  withRef: true
})(Autocomplete);

exports.default = _default;