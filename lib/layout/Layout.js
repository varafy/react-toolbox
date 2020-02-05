"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = exports.layoutFactory = exports.default = void 0;

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

var _utils = require("../utils/utils");

var _filterReactChildren = _interopRequireDefault(require("../utils/filter-react-children"));

var _isComponentOfType = _interopRequireDefault(require("../utils/is-component-of-type"));

var _AppBar = _interopRequireDefault(require("../app_bar/AppBar"));

var _NavDrawer = _interopRequireDefault(require("./NavDrawer"));

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _isBrowser = _interopRequireDefault(require("../utils/is-browser"));

var _breakpoints = _interopRequireDefault(require("../utils/breakpoints"));

var _identifiers = require("../identifiers");

var factory = function factory(AppBar, NavDrawer, Sidebar) {
  var isNavDrawer = function isNavDrawer(child) {
    return (0, _isComponentOfType.default)(NavDrawer, child);
  };

  var isSidebar = function isSidebar(child) {
    return (0, _isComponentOfType.default)(Sidebar, child);
  };

  var isAppBar = function isAppBar(child) {
    return (0, _isComponentOfType.default)(AppBar, child);
  };

  var isUnknown = function isUnknown(child) {
    return !isNavDrawer(child) && !isSidebar(child) && !isAppBar(child);
  };

  var Layout =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(Layout, _Component);

    function Layout() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Layout);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
        width: (0, _isBrowser.default)() && (0, _utils.getViewport)().width
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleResize", function () {
        _this.setState({
          width: (0, _utils.getViewport)().width
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "isPinned", function (sideNav) {
        if (sideNav) {
          var _sideNav$props = sideNav.props,
              permanentAt = _sideNav$props.permanentAt,
              pinned = _sideNav$props.pinned;
          var width = _this.state.width;
          return width > _breakpoints.default[permanentAt] || pinned;
        }

        return undefined;
      });
      return _this;
    }

    (0, _createClass2.default)(Layout, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.state.width) this.handleResize();
        window.addEventListener('resize', this.handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }
    }, {
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            theme = _this$props.theme,
            rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "theme"]);
        var appBar = (0, _filterReactChildren.default)(children, isAppBar)[0];
        var navDrawer = (0, _filterReactChildren.default)(children, isNavDrawer)[0];
        var sidebar = (0, _filterReactChildren.default)(children, isSidebar)[0];
        var unknown = (0, _filterReactChildren.default)(children, isUnknown);
        var appBarFixed = appBar && appBar.props.fixed;
        var navDrawerPinned = this.isPinned(navDrawer);
        var navDrawerClipped = navDrawer && navDrawer.props.clipped;
        var sidebarWidth = sidebar && sidebar.props.width;
        var sidebarPinned = this.isPinned(sidebar);
        var sidebarClipped = sidebar && sidebar.props.clipped;
        var clonedAppBar = appBar && (0, _react.cloneElement)(appBar, {
          theme: theme,
          themeNamespace: 'appbar'
        });
        var clonedLeftSideNav = navDrawer && (0, _react.cloneElement)(navDrawer, {
          clipped: navDrawerClipped,
          pinned: navDrawerPinned
        });
        var clonedRightSideNav = sidebar && (0, _react.cloneElement)(sidebar, {
          clipped: sidebarClipped,
          pinned: sidebarPinned
        });

        var _className = (0, _classnames2.default)(theme.layout, theme["sidebarWidth".concat(sidebarWidth)], (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.navDrawerPinned, navDrawerPinned), (0, _defineProperty2.default)(_classnames, theme.navDrawerClipped, navDrawerClipped), (0, _defineProperty2.default)(_classnames, theme.sidebarPinned, sidebarPinned), (0, _defineProperty2.default)(_classnames, theme.sidebarClipped, sidebarClipped), (0, _defineProperty2.default)(_classnames, theme.appbarFixed, appBarFixed), _classnames), className);

        return _react.default.createElement("div", (0, _extends2.default)({}, rest, {
          className: _className
        }), clonedLeftSideNav, clonedAppBar, unknown, clonedRightSideNav);
      }
    }]);
    return Layout;
  }(_react.Component);

  (0, _defineProperty2.default)(Layout, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    theme: _propTypes.default.shape({
      appbarFixed: _propTypes.default.string,
      layout: _propTypes.default.string,
      navDrawerClipped: _propTypes.default.string,
      navDrawerPinned: _propTypes.default.string,
      sidebarClipped: _propTypes.default.string,
      sidebarPinned: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(Layout, "defaultProps", {
    className: ''
  });
  return Layout;
};

exports.layoutFactory = factory;
var Layout = factory(_AppBar.default, _NavDrawer.default, _Sidebar.default);
exports.Layout = Layout;

var _default = (0, _reactCssThemr.themr)(_identifiers.LAYOUT)(Layout);

exports.default = _default;