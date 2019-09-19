"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemContent = exports.listItemContentFactory = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItemText = _interopRequireDefault(require("./ListItemText"));

var types = ['auto', 'normal', 'large'];

var factory = function factory(ListItemText) {
  var ListItemContent =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(ListItemContent, _Component);

    function ListItemContent() {
      (0, _classCallCheck2.default)(this, ListItemContent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItemContent).apply(this, arguments));
    }

    (0, _createClass2.default)(ListItemContent, [{
      key: "getType",
      value: function getType() {
        var _this$props = this.props,
            type = _this$props.type,
            children = _this$props.children,
            caption = _this$props.caption,
            legend = _this$props.legend;

        var count = _react.default.Children.count(children);

        [caption, legend].forEach(function (s) {
          count += s ? 1 : 0;
        });
        var typeIndex = Math.min(count, types.length);
        return type || types[typeIndex];
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            children = _this$props2.children,
            caption = _this$props2.caption,
            legend = _this$props2.legend,
            theme = _this$props2.theme;
        var contentType = this.getType();
        var className = (0, _classnames2.default)(theme.itemContentRoot, (0, _defineProperty2.default)({}, theme[contentType], theme[contentType]));
        return _react.default.createElement("span", {
          className: className
        }, caption && _react.default.createElement(ListItemText, {
          theme: theme,
          primary: true
        }, caption), legend && _react.default.createElement(ListItemText, {
          theme: theme
        }, legend), children);
      }
    }]);
    return ListItemContent;
  }(_react.Component);

  (0, _defineProperty2.default)(ListItemContent, "propTypes", {
    caption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    children: _propTypes.default.node,
    legend: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    theme: _propTypes.default.shape({
      auto: _propTypes.default.string,
      itemContentRoot: _propTypes.default.string,
      large: _propTypes.default.string,
      normal: _propTypes.default.string
    }),
    type: _propTypes.default.oneOf(types)
  });
  return ListItemContent;
};

exports.listItemContentFactory = factory;
var ListItemContent = factory(_ListItemText.default);
exports.ListItemContent = ListItemContent;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemContent);

exports.default = _default;