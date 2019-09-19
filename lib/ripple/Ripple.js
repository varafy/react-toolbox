"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _dissoc = _interopRequireDefault(require("ramda/src/dissoc"));

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

var _prefixer = _interopRequireDefault(require("../utils/prefixer"));

var defaults = {
  centered: false,
  className: '',
  multiple: true,
  passthrough: true,
  spread: 2,
  theme: {}
};

var rippleFactory = function rippleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = (0, _objectSpread5.default)({}, defaults, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultMultiple = _defaults$options.multiple,
      defaultPassthrough = _defaults$options.passthrough,
      defaultSpread = _defaults$options.spread,
      defaultTheme = _defaults$options.theme,
      props = (0, _objectWithoutProperties2.default)(_defaults$options, ["centered", "className", "multiple", "passthrough", "spread", "theme"]);

  return function (ComposedComponent) {
    var RippledComponent =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(RippledComponent, _Component);

      function RippledComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, RippledComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RippledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
          ripples: {}
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "rippleNodes", {});
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "doRipple", function () {
          return !_this.props.disabled && _this.props.ripple;
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseDown", function (event) {
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);

          if (_this.doRipple()) {
            var _events$getMousePosit = _events.default.getMousePosition(event),
                x = _events$getMousePosit.x,
                y = _events$getMousePosit.y;

            _this.animateRipple(x, y, false);
          }
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleTouchStart", function (event) {
          if (_this.props.onTouchStart) _this.props.onTouchStart(event);

          if (_this.doRipple()) {
            var _events$getTouchPosit = _events.default.getTouchPosition(event),
                x = _events$getTouchPosit.x,
                y = _events$getTouchPosit.y;

            _this.animateRipple(x, y, true);
          }
        });
        return _this;
      }

      (0, _createClass2.default)(RippledComponent, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          // If a new ripple was just added, add a remove event listener to its animation
          if (Object.keys(prevState.ripples).length < Object.keys(this.state.ripples).length) {
            this.addRippleRemoveEventListener(this.getLastKey());
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this2 = this;

          // Remove document event listeners for ripple if they still exists
          Object.keys(this.state.ripples).forEach(function (key) {
            _this2.state.ripples[key].endRipple();
          });
        }
        /**
         * Find out a descriptor object for the ripple element being created depending on
         * the position where the it was triggered and the component's dimensions.
         *
         * @param {Number} x Coordinate x in the viewport where ripple was triggered
         * @param {Number} y Coordinate y in the viewport where ripple was triggered
         * @return {Object} Descriptor element including position and size of the element
         */

      }, {
        key: "getDescriptor",
        value: function getDescriptor(x, y) {
          var _ReactDOM$findDOMNode = _reactDom.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _this$props = this.props,
              centered = _this$props.rippleCentered,
              spread = _this$props.rippleSpread;
          return {
            left: centered ? 0 : x - left - width / 2,
            top: centered ? 0 : y - top - height / 2,
            width: width * spread
          };
        }
        /**
         * Increments and internal counter and returns the next value as a string. It
         * is used to assign key references to new ripple elements.
         *
         * @return {String} Key to be assigned to a ripple.
         */

      }, {
        key: "getNextKey",
        value: function getNextKey() {
          this.currentCount = this.currentCount ? this.currentCount + 1 : 1;
          return "ripple".concat(this.currentCount);
        }
        /**
         * Return the last generated key for a ripple element. When there is only one ripple
         * and to get the reference when a ripple was just created.
         *
         * @return {String} The last generated ripple key.
         */

      }, {
        key: "getLastKey",
        value: function getLastKey() {
          return "ripple".concat(this.currentCount);
        }
      }, {
        key: "rippleShouldTrigger",

        /**
         * Determine if a ripple should start depending if its a touch event. For mobile both
         * touchStart and mouseDown are launched so in case is touch we should always trigger
         * but if its not we should check if a touch was already triggered to decide.
         *
         * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
         * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
         */
        value: function rippleShouldTrigger(isTouch) {
          var shouldStart = isTouch ? true : !this.touchCache;
          this.touchCache = isTouch;
          return shouldStart;
        }
        /**
         * Start a ripple animation on an specific point with touch or mouse events. First
         * decides if the animation should trigger. If the ripple is multiple or there is no
         * ripple present, it creates a new key. If it's a simple ripple and already exists,
         * it just restarts the current ripple. The animation happens in two state changes
         * to allow triggering via css.
         *
         * @param {Number} x Coordinate X on the screen where animation should start
         * @param {Number} y Coordinate Y on the screen where animation should start
         * @param {Boolean} isTouch Use events from touch or mouse.
         */

      }, {
        key: "animateRipple",
        value: function animateRipple(x, y, isTouch) {
          var _this3 = this;

          if (this.rippleShouldTrigger(isTouch)) {
            var _this$getDescriptor = this.getDescriptor(x, y),
                top = _this$getDescriptor.top,
                left = _this$getDescriptor.left,
                width = _this$getDescriptor.width;

            var noRipplesActive = Object.keys(this.state.ripples).length === 0;
            var key = this.props.rippleMultiple || noRipplesActive ? this.getNextKey() : this.getLastKey();
            var endRipple = this.addRippleDeactivateEventListener(isTouch, key);
            var initialState = {
              active: false,
              restarting: true,
              top: top,
              left: left,
              width: width,
              endRipple: endRipple
            };
            var runningState = {
              active: true,
              restarting: false
            };
            this.setState(function (state) {
              return {
                ripples: (0, _objectSpread5.default)({}, state.ripples, (0, _defineProperty2.default)({}, key, initialState))
              };
            }, function () {
              if (_this3.rippleNodes[key]) _this3.rippleNodes[key].offsetWidth; // eslint-disable-line

              _this3.setState(function (state) {
                return {
                  ripples: (0, _objectSpread5.default)({}, state.ripples, (0, _defineProperty2.default)({}, key, Object.assign({}, state.ripples[key], runningState)))
                };
              });
            });
          }
        }
        /**
         * Add an event listener to the reference with given key so when the animation transition
         * ends we can be sure that it finished and it can be safely removed from the state.
         * This function is called whenever a new ripple is added to the component.
         *
         * @param {String} rippleKey Is the key of the ripple to add the event.
         */

      }, {
        key: "addRippleRemoveEventListener",
        value: function addRippleRemoveEventListener(rippleKey) {
          var self = this;
          var rippleNode = this.rippleNodes[rippleKey];

          _events.default.addEventListenerOnTransitionEnded(rippleNode, function onOpacityEnd(e) {
            if (e.propertyName === 'opacity') {
              if (self.props.onRippleEnded) self.props.onRippleEnded(e);

              _events.default.removeEventListenerOnTransitionEnded(self.rippleNodes[rippleKey], onOpacityEnd); // self.rippleNodes = dissoc(rippleKey, self.rippleNodes);


              delete self.rippleNodes[rippleKey];
              self.setState({
                ripples: (0, _dissoc.default)(rippleKey, self.state.ripples)
              });
            }
          });
        }
        /**
         * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
         * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
         * ending function is created from a factory function and returned.
         *
         * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
         * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: "addRippleDeactivateEventListener",
        value: function addRippleDeactivateEventListener(isTouch, rippleKey) {
          var eventType = isTouch ? 'touchend' : 'mouseup';
          var endRipple = this.createRippleDeactivateCallback(eventType, rippleKey);
          document.addEventListener(eventType, endRipple);
          return endRipple;
        }
        /**
         * Generates a function that can be called to deactivate a ripple and remove its finishing
         * event listener. If is generated because we need to store it to be called on unmount in case
         * the ripple is still running.
         *
         * @param {String} eventType Is the event type that can be touchend or mouseup
         * @param {String} rippleKey Is the key representing the ripple
         * @return {Function} Callback function that deactivates the ripple and removes the listener
         */

      }, {
        key: "createRippleDeactivateCallback",
        value: function createRippleDeactivateCallback(eventType, rippleKey) {
          var self = this;
          return function endRipple() {
            document.removeEventListener(eventType, endRipple);
            self.setState({
              ripples: (0, _objectSpread5.default)({}, self.state.ripples, (0, _defineProperty2.default)({}, rippleKey, Object.assign({}, self.state.ripples[rippleKey], {
                active: false
              })))
            });
          };
        }
      }, {
        key: "renderRipple",
        value: function renderRipple(key, className, _ref) {
          var _classnames,
              _this4 = this;

          var active = _ref.active,
              left = _ref.left,
              restarting = _ref.restarting,
              top = _ref.top,
              width = _ref.width;
          var scale = restarting ? 0 : 1;
          var transform = "translate3d(".concat(-width / 2 + left, "px, ").concat(-width / 2 + top, "px, 0) scale(").concat(scale, ")");

          var _className = (0, _classnames2.default)(this.props.theme.ripple, (_classnames = {}, (0, _defineProperty2.default)(_classnames, this.props.theme.rippleActive, active), (0, _defineProperty2.default)(_classnames, this.props.theme.rippleRestarting, restarting), _classnames), className);

          return _react.default.createElement("span", (0, _extends2.default)({
            key: key,
            "data-react-toolbox": "ripple",
            className: this.props.theme.rippleWrapper
          }, props), _react.default.createElement("span", {
            className: _className,
            ref: function ref(node) {
              if (node) _this4.rippleNodes[key] = node;
            },
            style: (0, _prefixer.default)({
              transform: transform
            }, {
              width: width,
              height: width
            })
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;

          var _this$props2 = this.props,
              children = _this$props2.children,
              disabled = _this$props2.disabled,
              ripple = _this$props2.ripple,
              onRippleEnded = _this$props2.onRippleEnded,
              rippleCentered = _this$props2.rippleCentered,
              rippleClassName = _this$props2.rippleClassName,
              rippleMultiple = _this$props2.rippleMultiple,
              rippleSpread = _this$props2.rippleSpread,
              theme = _this$props2.theme,
              other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "disabled", "ripple", "onRippleEnded", "rippleCentered", "rippleClassName", "rippleMultiple", "rippleSpread", "theme"]);
          var ripples = this.state.ripples;
          var childRipples = Object.keys(ripples).map(function (key) {
            return _this5.renderRipple(key, rippleClassName, ripples[key]);
          }); // eslint-disable-line max-len

          var childProps = (0, _objectSpread5.default)({
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleTouchStart
          }, other);
          var finalProps = defaultPassthrough ? (0, _objectSpread5.default)({}, childProps, {
            theme: theme,
            disabled: disabled
          }) : childProps;
          return !ripple ? _react.default.createElement(ComposedComponent, finalProps, children) : _react.default.createElement(ComposedComponent, finalProps, [children, childRipples]);
        }
      }]);
      return RippledComponent;
    }(_react.Component);

    (0, _defineProperty2.default)(RippledComponent, "propTypes", {
      children: _propTypes.default.node,
      disabled: _propTypes.default.bool,
      onMouseDown: _propTypes.default.func,
      onRippleEnded: _propTypes.default.func,
      onTouchStart: _propTypes.default.func,
      ripple: _propTypes.default.bool,
      rippleCentered: _propTypes.default.bool,
      rippleClassName: _propTypes.default.string,
      rippleMultiple: _propTypes.default.bool,
      rippleSpread: _propTypes.default.number,
      theme: _propTypes.default.shape({
        ripple: _propTypes.default.string,
        rippleActive: _propTypes.default.string,
        rippleRestarting: _propTypes.default.string,
        rippleWrapper: _propTypes.default.string
      })
    });
    (0, _defineProperty2.default)(RippledComponent, "defaultProps", {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleMultiple: defaultMultiple,
      rippleSpread: defaultSpread
    });
    return (0, _reactCssThemr.themr)(_identifiers.RIPPLE, defaultTheme)(RippledComponent);
  };
};

var _default = rippleFactory;
exports.default = _default;