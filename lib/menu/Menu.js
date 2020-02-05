"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.menuFactory = exports.default = void 0;

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

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _utils = require("../utils");

var _utils2 = require("../utils/utils");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
};

var factory = function factory(MenuItem) {
  var Menu =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Menu, _Component);

    function Menu() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Menu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        active: _this.props.active,
        rippled: false
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleDocumentClick", function (event) {
        if (_this.state.active && !_utils.events.targetIsDescendant(event, _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))))) {
          _this.setState({
            active: false,
            rippled: false
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (item, event) {
        var _item$props = item.props,
            value = _item$props.value,
            onClick = _item$props.onClick;
        if (onClick) event.persist();

        _this.setState({
          active: false,
          rippled: _this.props.ripple
        }, function () {
          if (onClick) onClick(event);
          if (_this.props.onSelect) _this.props.onSelect(value);
        });
      });
      return _this;
    }

    (0, _createClass2.default)(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.positionTimeoutHandle = setTimeout(function () {
          var _this2$menuNode$getBo = _this2.menuNode.getBoundingClientRect(),
              width = _this2$menuNode$getBo.width,
              height = _this2$menuNode$getBo.height;

          var position = _this2.props.position === POSITION.AUTO ? _this2.calculatePosition() : _this2.props.position;

          _this2.setState({
            position: position,
            width: width,
            height: height
          });
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        if (this.props.position !== nextProps.position) {
          var position = nextProps.position === POSITION.AUTO ? this.calculatePosition() : nextProps.position;
          this.setState({
            position: position
          });
        }
        /**
         * If the menu is going to be activated via props and its not active, verify
         * the position is appropriated and then show it recalculating position if its
         * wrong. It should be shown in two consecutive setState.
         */


        if (!this.props.active && nextProps.active && !this.state.active) {
          if (nextProps.position === POSITION.AUTO) {
            var _position = this.calculatePosition();

            if (this.state.position !== _position) {
              this.setState({
                position: _position,
                active: false
              }, function () {
                _this3.activateTimeoutHandle = setTimeout(function () {
                  _this3.show();
                }, 20);
              });
            } else {
              this.show();
            }
          } else {
            this.show();
          }
        }
        /**
         * If the menu is being deactivated via props and the current state is
         * active, it should be hid.
         */


        if (this.props.active && !nextProps.active && this.state.active) {
          this.hide();
        }
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _utils.events.addEventsToDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          if (this.props.onHide) this.props.onHide();

          _utils.events.removeEventsFromDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        } else if (!prevState.active && this.state.active && this.props.onShow) {
          this.props.onShow();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.active) {
          _utils.events.removeEventsFromDocument({
            click: this.handleDocumentClick,
            touchstart: this.handleDocumentClick
          });
        }

        clearTimeout(this.positionTimeoutHandle);
        clearTimeout(this.activateTimeoutHandle);
      }
    }, {
      key: "getMenuStyle",
      value: function getMenuStyle() {
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height,
            position = _this$state.position;

        if (position !== POSITION.STATIC) {
          if (this.state.active) {
            return {
              clip: "rect(0 ".concat(width, "px ").concat(height, "px 0)")
            };
          }

          if (position === POSITION.TOP_RIGHT) {
            return {
              clip: "rect(0 ".concat(width, "px 0 ").concat(width, "px)")
            };
          }

          if (position === POSITION.BOTTOM_RIGHT) {
            return {
              clip: "rect(".concat(height, "px ").concat(width, "px ").concat(height, "px ").concat(width, "px)")
            };
          }

          if (position === POSITION.BOTTOM_LEFT) {
            return {
              clip: "rect(".concat(height, "px 0 ").concat(height, "px 0)")
            };
          }

          if (position === POSITION.TOP_LEFT) {
            return {
              clip: 'rect(0 0 0 0)'
            };
          }
        }

        return undefined;
      }
    }, {
      key: "getRootStyle",
      value: function getRootStyle() {
        return this.state.position !== POSITION.STATIC ? {
          width: this.state.width,
          height: this.state.height
        } : undefined;
      }
    }, {
      key: "calculatePosition",
      value: function calculatePosition() {
        var _ReactDOM$findDOMNode = _reactDom.default.findDOMNode(this),
            parentNode = _ReactDOM$findDOMNode.parentNode;

        if (!parentNode) return undefined;

        var _parentNode$getBoundi = parentNode.getBoundingClientRect(),
            top = _parentNode$getBoundi.top,
            left = _parentNode$getBoundi.left,
            height = _parentNode$getBoundi.height,
            width = _parentNode$getBoundi.width;

        var _getViewport = (0, _utils2.getViewport)(),
            wh = _getViewport.height,
            ww = _getViewport.width;

        var toTop = top < wh / 2 - height / 2;
        var toLeft = left < ww / 2 - width / 2;
        return "".concat(toTop ? 'top' : 'bottom').concat(toLeft ? 'Left' : 'Right');
      }
    }, {
      key: "show",
      value: function show() {
        var _this$menuNode$getBou = this.menuNode.getBoundingClientRect(),
            width = _this$menuNode$getBou.width,
            height = _this$menuNode$getBou.height;

        this.setState({
          active: true,
          width: width,
          height: height
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        this.setState({
          active: false
        });
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this4 = this;

        return _react.default.Children.map(this.props.children, function (item) {
          if (!item) return item;

          if (item.type === MenuItem) {
            return _react.default.cloneElement(item, {
              ripple: item.props.ripple || _this4.props.ripple,
              selected: typeof item.props.value !== 'undefined' && _this4.props.selectable && item.props.value === _this4.props.selected,
              onClick: _this4.handleSelect.bind(_this4, item)
            });
          }

          return _react.default.cloneElement(item);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames,
            _this5 = this;

        var theme = this.props.theme;
        var outlineStyle = {
          width: this.state.width,
          height: this.state.height
        };
        var className = (0, _classnames2.default)([theme.menu, theme[this.state.position]], (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.active, this.state.active), (0, _defineProperty2.default)(_classnames, theme.rippled, this.state.rippled), _classnames), this.props.className);
        return _react.default.createElement("div", {
          "data-react-toolbox": "menu",
          className: className,
          style: this.getRootStyle()
        }, this.props.outline ? _react.default.createElement("div", {
          className: theme.outline,
          style: outlineStyle
        }) : null, _react.default.createElement("ul", {
          ref: function ref(node) {
            _this5.menuNode = node;
          },
          className: theme.menuInner,
          style: this.getMenuStyle()
        }, this.renderItems()));
      }
    }]);
    return Menu;
  }(_react.Component);

  (0, _defineProperty2.default)(Menu, "propTypes", {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    onHide: _propTypes.default.func,
    onSelect: _propTypes.default.func,
    onShow: _propTypes.default.func,
    outline: _propTypes.default.bool,
    position: _propTypes.default.oneOf(Object.keys(POSITION).map(function (key) {
      return POSITION[key];
    })),
    ripple: _propTypes.default.bool,
    selectable: _propTypes.default.bool,
    selected: _propTypes.default.node,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      bottomLeft: _propTypes.default.string,
      bottomRight: _propTypes.default.string,
      menu: _propTypes.default.string,
      menuInner: _propTypes.default.string,
      outline: _propTypes.default.string,
      rippled: _propTypes.default.string,
      static: _propTypes.default.string,
      topLeft: _propTypes.default.string,
      topRight: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Menu, "defaultProps", {
    active: false,
    outline: true,
    position: POSITION.STATIC,
    ripple: true,
    selectable: true
  });
  return Menu;
};

exports.menuFactory = factory;
var Menu = factory(_MenuItem.default);
exports.Menu = Menu;

var _default = (0, _reactCssThemr.themr)(_identifiers.MENU)(Menu);

exports.default = _default;