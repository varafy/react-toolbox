"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var _utils = require("../utils/utils");

var _identifiers = require("../identifiers");

var _events = _interopRequireDefault(require("../utils/events"));

var POSITION = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical'
};
var defaults = {
  className: '',
  delay: 0,
  hideOnClick: true,
  passthrough: true,
  showOnClick: false,
  position: POSITION.VERTICAL,
  theme: {}
};

var tooltipFactory = function tooltipFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = (0, _objectSpread2.default)({}, defaults, options),
      defaultClassName = _defaults$options.className,
      defaultDelay = _defaults$options.delay,
      defaultHideOnClick = _defaults$options.hideOnClick,
      defaultShowOnClick = _defaults$options.showOnClick,
      defaultPassthrough = _defaults$options.passthrough,
      defaultPosition = _defaults$options.position,
      defaultTheme = _defaults$options.theme;

  return function (ComposedComponent) {
    var TooltippedComponent =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(TooltippedComponent, _Component);

      function TooltippedComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, TooltippedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TooltippedComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
          active: false,
          position: _this.props.tooltipPosition,
          visible: false
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onTransformEnd", function (e) {
          if (e.propertyName === 'transform') {
            _events.default.removeEventListenerOnTransitionEnded(_this.tooltipNode, _this.onTransformEnd);

            _this.setState({
              visible: false
            });
          }
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseEnter", function (event) {
          _this.activate(_this.calculatePosition(event.currentTarget));

          if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMouseLeave", function (event) {
          _this.deactivate();

          if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
          if (_this.props.tooltipHideOnClick && _this.state.active) {
            _this.deactivate();
          }

          if (_this.props.tooltipShowOnClick && !_this.state.active) {
            _this.activate(_this.calculatePosition(event.currentTarget));
          }

          if (_this.props.onClick) _this.props.onClick(event);
        });
        return _this;
      }

      (0, _createClass2.default)(TooltippedComponent, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.tooltipNode) {
            _events.default.removeEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);
          }

          if (this.timeout) clearTimeout(this.timeout);
        }
      }, {
        key: "getPosition",
        value: function getPosition(element) {
          var tooltipPosition = this.props.tooltipPosition;

          if (tooltipPosition === POSITION.HORIZONTAL) {
            var origin = element.getBoundingClientRect();

            var _getViewport = (0, _utils.getViewport)(),
                ww = _getViewport.width;

            var toRight = origin.left < ww / 2 - origin.width / 2;
            return toRight ? POSITION.RIGHT : POSITION.LEFT;
          }

          if (tooltipPosition === POSITION.VERTICAL) {
            var _origin = element.getBoundingClientRect();

            var _getViewport2 = (0, _utils.getViewport)(),
                wh = _getViewport2.height;

            var toBottom = _origin.top < wh / 2 - _origin.height / 2;
            return toBottom ? POSITION.BOTTOM : POSITION.TOP;
          }

          return tooltipPosition;
        }
      }, {
        key: "activate",
        value: function activate(_ref) {
          var _this2 = this;

          var top = _ref.top,
              left = _ref.left,
              position = _ref.position;
          if (this.timeout) clearTimeout(this.timeout);
          this.setState({
            visible: true,
            position: position
          });
          this.timeout = setTimeout(function () {
            _this2.setState({
              active: true,
              top: top,
              left: left
            });
          }, this.props.tooltipDelay);
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          if (this.timeout) clearTimeout(this.timeout);

          if (this.state.active) {
            _events.default.addEventListenerOnTransitionEnded(this.tooltipNode, this.onTransformEnd);

            this.setState({
              active: false
            });
          } else if (this.state.visible) {
            this.setState({
              visible: false
            });
          }
        }
      }, {
        key: "calculatePosition",
        value: function calculatePosition(element) {
          var position = this.getPosition(element);

          var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              left = _element$getBoundingC.left,
              height = _element$getBoundingC.height,
              width = _element$getBoundingC.width;

          var xOffset = window.scrollX || window.pageXOffset;
          var yOffset = window.scrollY || window.pageYOffset;

          if (position === POSITION.BOTTOM) {
            return {
              top: top + height + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          }

          if (position === POSITION.TOP) {
            return {
              top: top + yOffset,
              left: left + width / 2 + xOffset,
              position: position
            };
          }

          if (position === POSITION.LEFT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + xOffset,
              position: position
            };
          }

          if (position === POSITION.RIGHT) {
            return {
              top: top + height / 2 + yOffset,
              left: left + width + xOffset,
              position: position
            };
          }

          return undefined;
        }
      }, {
        key: "render",
        value: function render() {
          var _classnames,
              _this3 = this;

          var _this$state = this.state,
              active = _this$state.active,
              left = _this$state.left,
              top = _this$state.top,
              position = _this$state.position,
              visible = _this$state.visible;
          var positionClass = "tooltip".concat(position.charAt(0).toUpperCase() + position.slice(1));
          var _this$props = this.props,
              children = _this$props.children,
              className = _this$props.className,
              theme = _this$props.theme,
              onClick = _this$props.onClick,
              onMouseEnter = _this$props.onMouseEnter,
              onMouseLeave = _this$props.onMouseLeave,
              tooltip = _this$props.tooltip,
              tooltipDelay = _this$props.tooltipDelay,
              tooltipHideOnClick = _this$props.tooltipHideOnClick,
              tooltipPosition = _this$props.tooltipPosition,
              tooltipShowOnClick = _this$props.tooltipShowOnClick,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "theme", "onClick", "onMouseEnter", "onMouseLeave", "tooltip", "tooltipDelay", "tooltipHideOnClick", "tooltipPosition", "tooltipShowOnClick"]);

          var _className = (0, _classnames2.default)(theme.tooltip, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.tooltipActive, active), (0, _defineProperty2.default)(_classnames, theme[positionClass], theme[positionClass]), _classnames));

          var childProps = (0, _objectSpread2.default)({}, other, {
            className: className,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          });
          var shouldPass = typeof ComposedComponent !== 'string' && defaultPassthrough;
          var finalProps = shouldPass ? (0, _objectSpread2.default)({}, childProps, {
            theme: theme
          }) : childProps;
          return _react.default.createElement(ComposedComponent, finalProps, children, visible && _react.default.createElement(_Portal.default, null, _react.default.createElement("span", {
            ref: function ref(node) {
              _this3.tooltipNode = node;
            },
            className: _className,
            "data-react-toolbox": "tooltip",
            style: {
              top: top,
              left: left
            }
          }, _react.default.createElement("span", {
            className: theme.tooltipInner
          }, tooltip))));
        }
      }]);
      return TooltippedComponent;
    }(_react.Component);

    (0, _defineProperty2.default)(TooltippedComponent, "propTypes", {
      children: _propTypes.default.node,
      className: _propTypes.default.string,
      onClick: _propTypes.default.func,
      onMouseEnter: _propTypes.default.func,
      onMouseLeave: _propTypes.default.func,
      theme: _propTypes.default.shape({
        tooltip: _propTypes.default.string,
        tooltipActive: _propTypes.default.string,
        tooltipWrapper: _propTypes.default.string
      }),
      tooltip: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      tooltipDelay: _propTypes.default.number,
      tooltipHideOnClick: _propTypes.default.bool,
      tooltipPosition: _propTypes.default.oneOf(Object.keys(POSITION).map(function (key) {
        return POSITION[key];
      })),
      tooltipShowOnClick: _propTypes.default.bool
    });
    (0, _defineProperty2.default)(TooltippedComponent, "defaultProps", {
      className: defaultClassName,
      tooltipDelay: defaultDelay,
      tooltipHideOnClick: defaultHideOnClick,
      tooltipPosition: defaultPosition,
      tooltipShowOnClick: defaultShowOnClick
    });
    return (0, _reactCssThemr.themr)(_identifiers.TOOLTIP, defaultTheme)(TooltippedComponent);
  };
};

var _default = tooltipFactory;
exports.default = _default;