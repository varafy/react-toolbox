"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.listItemFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

var _ListItemLayout = _interopRequireDefault(require("./ListItemLayout"));

var _Ripple = _interopRequireDefault(require("../ripple/Ripple"));

var factory = function factory(ripple, ListItemLayout, ListItemContent) {
  var ListItem =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(ListItem, _Component);

    function ListItem() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ListItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
        if (_this.props.onClick && !_this.props.disabled) {
          _this.props.onClick(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(ListItem, [{
      key: "groupChildren",
      value: function groupChildren() {
        var children = {
          leftActions: [],
          rightActions: [],
          ignored: []
        };

        _react.default.Children.forEach(this.props.children, function (child, i) {
          if (!_react.default.isValidElement(child)) {
            return undefined;
          }

          var _child$props = child.props,
              listItemIgnore = _child$props.listItemIgnore,
              rest = (0, _objectWithoutProperties2.default)(_child$props, ["listItemIgnore"]);
          var strippedChild = (0, _objectSpread2.default)({}, child, {
            props: rest
          });

          if (listItemIgnore) {
            children.ignored.push(strippedChild);
            return undefined;
          }

          if (child.type === ListItemContent) {
            children.itemContent = strippedChild;
            return undefined;
          }

          var bucket = children.itemContent ? 'rightActions' : 'leftActions';
          children[bucket].push((0, _objectSpread2.default)({}, strippedChild, {
            key: i
          }));
          return undefined;
        });

        return children;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            hasRipple = _this$props.ripple,
            onClick = _this$props.onClick,
            onMouseDown = _this$props.onMouseDown,
            onTouchStart = _this$props.onTouchStart,
            theme = _this$props.theme,
            to = _this$props.to,
            other = (0, _objectWithoutProperties2.default)(_this$props, ["className", "ripple", "onClick", "onMouseDown", "onTouchStart", "theme", "to"]);
        var children = this.groupChildren();

        var content = _react.default.createElement(ListItemLayout, (0, _extends2.default)({
          theme: theme
        }, children, other));

        return _react.default.createElement("li", {
          className: "".concat(theme.listItem, " ").concat(className),
          onClick: this.handleClick,
          onMouseDown: onMouseDown,
          onTouchStart: onTouchStart
        }, to ? _react.default.createElement("a", {
          href: this.props.to
        }, content) : content, children.ignored);
      }
    }]);
    return ListItem;
  }(_react.Component);

  (0, _defineProperty2.default)(ListItem, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    hasRipple: _propTypes.default.bool,
    onClick: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    onTouchStart: _propTypes.default.func,
    ripple: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      listItem: _propTypes.default.string
    }),
    to: _propTypes.default.string
  });
  (0, _defineProperty2.default)(ListItem, "defaultProps", {
    className: '',
    disabled: false,
    ripple: false
  });
  return ripple(ListItem);
};

exports.listItemFactory = factory;
var ripple = (0, _Ripple.default)({
  centered: false,
  listItemIgnore: true
});
var ListItem = factory(ripple, _ListItemLayout.default, _ListItemContent.default);
exports.ListItem = ListItem;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItem);

exports.default = _default;