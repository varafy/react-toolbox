"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = exports.appBarFactory = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _IconButton = _interopRequireDefault(require("../button/IconButton"));

var factory = function factory(IconButton) {
  var AppBar =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(AppBar, _React$Component);

    function AppBar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, AppBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        hidden: false,
        height: 0
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleScroll", function () {
        var scrollDiff = _this.curScroll - window.scrollY;

        _this.setState(function (state) {
          return {
            hidden: scrollDiff < 0 && window.scrollY !== undefined && window.scrollY > state.height
          };
        });

        _this.curScroll = window.scrollY;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "initializeScroll", function () {
        window.addEventListener('scroll', _this.handleScroll);

        var _this$rootNode$getBou = _this.rootNode.getBoundingClientRect(),
            height = _this$rootNode$getBou.height;

        _this.curScroll = window.scrollY;

        _this.setState({
          height: height
        }); // eslint-disable-line react/no-unused-state

      });
      return _this;
    }

    (0, _createClass2.default)(AppBar, [{
      key: "componentDidMount",
      // eslint-disable-line react/no-unused-state
      value: function componentDidMount() {
        if (this.props.scrollHide) {
          this.initializeScroll();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.scrollHide && nextProps.scrollHide) {
          this.initializeScroll();
        }

        if (this.props.scrollHide && !nextProps.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.scrollHide) {
          this.endScroll();
        }
      }
    }, {
      key: "endScroll",
      value: function endScroll() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }, {
      key: "render",
      value: function render() {
        var _cn,
            _this2 = this;

        var _this$props = this.props,
            children = _this$props.children,
            leftIcon = _this$props.leftIcon,
            onLeftIconClick = _this$props.onLeftIconClick,
            onRightIconClick = _this$props.onRightIconClick,
            rightIcon = _this$props.rightIcon,
            theme = _this$props.theme,
            title = _this$props.title;
        var className = (0, _classnames.default)(theme.appBar, (_cn = {}, (0, _defineProperty2.default)(_cn, theme.fixed, this.props.fixed), (0, _defineProperty2.default)(_cn, theme.flat, this.props.flat), (0, _defineProperty2.default)(_cn, theme.scrollHide, this.state.hidden), _cn), this.props.className);
        var renderedTitle = typeof title === 'string' ? _react.default.createElement("h1", {
          className: (0, _classnames.default)(theme.title)
        }, title) : title;

        var renderedLeftIcon = leftIcon && _react.default.createElement(IconButton, {
          inverse: true,
          className: (0, _classnames.default)(theme.leftIcon),
          onClick: onLeftIconClick,
          icon: leftIcon
        });

        var renderedRightIcon = rightIcon && _react.default.createElement(IconButton, {
          inverse: true,
          className: (0, _classnames.default)(theme.rightIcon),
          onClick: onRightIconClick,
          icon: rightIcon
        });

        return _react.default.createElement("header", {
          className: className,
          "data-react-toolbox": "app-bar",
          ref: function ref(node) {
            _this2.rootNode = node;
          }
        }, _react.default.createElement("div", {
          className: theme.inner
        }, renderedLeftIcon, renderedTitle, children, renderedRightIcon));
      }
    }]);
    return AppBar;
  }(_react.default.Component);

  (0, _defineProperty2.default)(AppBar, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    fixed: _propTypes.default.bool,
    flat: _propTypes.default.bool,
    leftIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    onLeftIconClick: _propTypes.default.func,
    onRightIconClick: _propTypes.default.func,
    rightIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    scrollHide: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      appBar: _propTypes.default.string,
      fixed: _propTypes.default.string,
      flat: _propTypes.default.string,
      inner: _propTypes.default.string,
      leftIcon: _propTypes.default.string,
      rightIcon: _propTypes.default.string,
      scrollHide: _propTypes.default.string,
      title: _propTypes.default.string
    }),
    title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
  });
  (0, _defineProperty2.default)(AppBar, "defaultProps", {
    className: '',
    fixed: false,
    flat: false,
    scrollHide: false
  });
  return AppBar;
};

exports.appBarFactory = factory;
var AppBar = factory(_IconButton.default);
exports.AppBar = AppBar;

var _default = (0, _reactCssThemr.themr)(_identifiers.APP_BAR)(AppBar);

exports.default = _default;