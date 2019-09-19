"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.tabsFactory = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var _isComponentOfType = _interopRequireDefault(require("../utils/is-component-of-type"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var factory = function factory(Tab, TabContent, FontIcon) {
  var isTab = function isTab(child) {
    return (0, _isComponentOfType.default)(Tab, child);
  };

  var isTabContent = function isTabContent(child) {
    return (0, _isComponentOfType.default)(TabContent, child);
  };

  var Tabs =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Tabs, _Component);

    function Tabs() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Tabs);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        pointer: {},
        arrows: {}
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleHeaderClick", function (idx) {
        if (_this.props.onChange) {
          _this.props.onChange(idx);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleResize", function () {
        if (_this.resizeTimeout) clearTimeout(_this.resizeTimeout);
        _this.resizeTimeout = setTimeout(function () {
          _this.updatePointer(_this.props.index);

          _this.updateArrows();
        }, 100);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updatePointer", function (idx) {
        if (_this.navigationNode && _this.navigationNode.children[idx]) {
          _this.updatePointerAnimationFrame = window.requestAnimationFrame(function () {
            var nav = _this.navigationNode.getBoundingClientRect();

            var label = _this.navigationNode.children[idx].getBoundingClientRect();

            var scrollLeft = _this.navigationNode.scrollLeft;

            _this.setState({
              pointer: {
                top: "".concat(nav.height, "px"),
                left: "".concat(label.left + scrollLeft - nav.left, "px"),
                width: "".concat(label.width, "px")
              }
            });
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateArrows", function () {
        var idx = _this.navigationNode.children.length - 2;

        if (idx >= 0) {
          var scrollLeft = _this.navigationNode.scrollLeft;

          var nav = _this.navigationNode.getBoundingClientRect();

          var lastLabel = _this.navigationNode.children[idx].getBoundingClientRect();

          _this.setState({
            arrows: {
              left: scrollLeft > 0,
              right: nav.right < lastLabel.right - 5
            }
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "scrollNavigation", function (factor) {
        var oldScrollLeft = _this.navigationNode.scrollLeft;
        _this.navigationNode.scrollLeft += factor * _this.navigationNode.clientWidth;

        if (_this.navigationNode.scrollLeft !== oldScrollLeft) {
          _this.updateArrows();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "scrollRight", function () {
        return _this.scrollNavigation(-1);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "scrollLeft", function () {
        return _this.scrollNavigation(+1);
      });
      return _this;
    }

    (0, _createClass2.default)(Tabs, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props = this.props,
            index = _this$props.index,
            children = _this$props.children;
        var prevIndex = prevProps.index,
            prevChildren = prevProps.children;

        if (index !== prevIndex || children !== prevChildren) {
          this.updatePointer(index);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
        if (this.updatePointerAnimationFrame) cancelAnimationFrame(this.updatePointerAnimationFrame);
      }
    }, {
      key: "parseChildren",
      value: function parseChildren() {
        var _this2 = this;

        var headers = [];
        var contents = [];

        _react.default.Children.forEach(this.props.children, function (item) {
          if (isTab(item)) {
            headers.push(item);

            if (item.props.children) {
              contents.push(_react.default.createElement(TabContent, {
                theme: _this2.props.theme
              }, item.props.children));
            }
          } else if (isTabContent(item)) {
            contents.push(item);
          }
        });

        return {
          headers: headers,
          contents: contents
        };
      }
    }, {
      key: "renderHeaders",
      value: function renderHeaders(headers) {
        var _this3 = this;

        return headers.map(function (item, idx) {
          return _react.default.cloneElement(item, {
            children: null,
            key: idx,
            // eslint-disable-line
            index: idx,
            theme: _this3.props.theme,
            active: _this3.props.index === idx,
            onClick: function onClick(event, index) {
              _this3.handleHeaderClick(index);

              if (item.props.onClick) item.props.onClick(event);
            }
          });
        });
      }
    }, {
      key: "renderContents",
      value: function renderContents(contents) {
        var _this4 = this;

        var contentElements = contents.map(function (item, idx) {
          return _react.default.cloneElement(item, {
            key: idx,
            // eslint-disable-line
            theme: _this4.props.theme,
            active: _this4.props.index === idx,
            hidden: _this4.props.index !== idx && _this4.props.hideMode === 'display',
            tabIndex: idx
          });
        });
        return this.props.hideMode === 'display' ? contentElements : contentElements.filter(function (item, idx) {
          return idx === _this4.props.index;
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames2,
            _this5 = this;

        var _this$props2 = this.props,
            className = _this$props2.className,
            disableAnimatedBottomBorder = _this$props2.disableAnimatedBottomBorder,
            theme = _this$props2.theme,
            fixed = _this$props2.fixed,
            inverse = _this$props2.inverse;
        var _this$state$arrows = this.state.arrows,
            hasLeftArrow = _this$state$arrows.left,
            hasRightArrow = _this$state$arrows.right;

        var _this$parseChildren = this.parseChildren(),
            headers = _this$parseChildren.headers,
            contents = _this$parseChildren.contents;

        var classNamePointer = (0, _classnames3.default)(theme.pointer, (0, _defineProperty2.default)({}, theme.disableAnimation, disableAnimatedBottomBorder));
        var classNames = (0, _classnames3.default)(theme.tabs, (_classnames2 = {}, (0, _defineProperty2.default)(_classnames2, theme.fixed, fixed), (0, _defineProperty2.default)(_classnames2, theme.inverse, inverse), _classnames2), className);
        return _react.default.createElement("div", {
          "data-react-toolbox": "tabs",
          className: classNames
        }, _react.default.createElement("div", {
          className: theme.navigationContainer
        }, hasLeftArrow && _react.default.createElement("div", {
          className: theme.arrowContainer,
          onClick: this.scrollRight
        }, _react.default.createElement(FontIcon, {
          className: theme.arrow,
          value: "keyboard_arrow_left"
        })), _react.default.createElement("div", {
          className: theme.navigation,
          role: "tablist",
          ref: function ref(node) {
            _this5.navigationNode = node;
          }
        }, this.renderHeaders(headers), _react.default.createElement("span", {
          className: classNamePointer,
          style: this.state.pointer
        })), hasRightArrow && _react.default.createElement("div", {
          className: theme.arrowContainer,
          onClick: this.scrollLeft
        }, _react.default.createElement(FontIcon, {
          className: theme.arrow,
          value: "keyboard_arrow_right"
        }))), this.renderContents(contents));
      }
    }]);
    return Tabs;
  }(_react.Component);

  (0, _defineProperty2.default)(Tabs, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disableAnimatedBottomBorder: _propTypes.default.bool,
    fixed: _propTypes.default.bool,
    hideMode: _propTypes.default.oneOf(['display', 'unmounted']),
    index: _propTypes.default.number,
    inverse: _propTypes.default.bool,
    onChange: _propTypes.default.func,
    theme: _propTypes.default.shape({
      arrow: _propTypes.default.string,
      arrowContainer: _propTypes.default.string,
      disableAnimation: _propTypes.default.string,
      fixed: _propTypes.default.string,
      inverse: _propTypes.default.string,
      navigation: _propTypes.default.string,
      navigationContainer: _propTypes.default.string,
      pointer: _propTypes.default.string,
      tabs: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Tabs, "defaultProps", {
    index: 0,
    fixed: false,
    inverse: false,
    hideMode: 'unmounted'
  });
  return Tabs;
};

exports.tabsFactory = factory;
var Tabs = factory(_Tab.default, _TabContent.default, _FontIcon.default);
exports.Tabs = Tabs;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABS)(Tabs);

exports.default = _default;