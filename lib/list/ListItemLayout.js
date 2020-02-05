"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemLayout = exports.listItemLayoutFactory = exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = require("../font_icon/FontIcon");

var _Avatar = _interopRequireDefault(require("../avatar/Avatar"));

var _ListItemContent = _interopRequireDefault(require("./ListItemContent"));

var _ListItemActions = _interopRequireDefault(require("./ListItemActions"));

var factory = function factory(Avatar, ListItemContent, ListItemActions) {
  var ListItemLayout = function ListItemLayout(props) {
    var _classnames;

    var className = (0, _classnames2.default)(props.theme.item, (_classnames = {}, (0, _defineProperty2.default)(_classnames, props.theme.disabled, props.disabled), (0, _defineProperty2.default)(_classnames, props.theme.selectable, props.selectable), _classnames), props.className);
    var leftActions = [props.leftIcon && _react.default.createElement(_FontIcon.FontIcon, {
      value: props.leftIcon,
      key: "leftIcon"
    }), props.avatar && _react.default.createElement(Avatar, {
      image: props.avatar,
      key: "avatar"
    })].concat((0, _toConsumableArray2.default)(props.leftActions));
    var rightActions = [props.rightIcon && _react.default.createElement(_FontIcon.FontIcon, {
      value: props.rightIcon,
      key: "rightIcon"
    })].concat((0, _toConsumableArray2.default)(props.rightActions));

    var emptyActions = function emptyActions(item) {
      return !item[0] && !item[1] && !item[2];
    };

    var content = props.itemContent || _react.default.createElement(ListItemContent, {
      theme: props.theme,
      caption: props.caption,
      legend: props.legend
    });

    return _react.default.createElement("span", {
      className: className
    }, !emptyActions(leftActions) > 0 && _react.default.createElement(ListItemActions, {
      type: "left",
      theme: props.theme
    }, leftActions), content, !emptyActions(rightActions) > 0 && _react.default.createElement(ListItemActions, {
      type: "right",
      theme: props.theme
    }, rightActions));
  };

  ListItemLayout.propTypes = {
    avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    caption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    className: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    itemContent: _propTypes.default.element,
    leftActions: _propTypes.default.arrayOf(_propTypes.default.node),
    leftIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    legend: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    rightActions: _propTypes.default.arrayOf(_propTypes.default.node),
    rightIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    selectable: _propTypes.default.bool,
    theme: _propTypes.default.shape({
      disabled: _propTypes.default.string,
      item: _propTypes.default.string,
      selectable: _propTypes.default.string
    })
  };
  ListItemLayout.defaultProps = {
    disabled: false,
    selectable: false
  };
  return ListItemLayout;
};

exports.listItemLayoutFactory = factory;
var ListItemLayout = factory(_Avatar.default, _ListItemContent.default, _ListItemActions.default);
exports.ListItemLayout = ListItemLayout;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(ListItemLayout);

exports.default = _default;