"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = exports.chipFactory = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Avatar = _interopRequireDefault(require("../avatar/Avatar"));

var factory = function factory(Avatar) {
  var Chip = function Chip(_ref) {
    var _classnames;

    var children = _ref.children,
        className = _ref.className,
        deletable = _ref.deletable,
        onDeleteClick = _ref.onDeleteClick,
        theme = _ref.theme,
        other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "deletable", "onDeleteClick", "theme"]);
    var hasAvatar = false;

    if (_react.default.Children.count(children)) {
      var flatChildren = _react.default.Children.toArray(children);

      var firstChild = flatChildren[0];
      hasAvatar = firstChild && firstChild.type && firstChild.type === Avatar;
    }

    var classes = (0, _classnames2.default)(theme.chip, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.deletable, !!deletable), (0, _defineProperty2.default)(_classnames, theme.avatar, !!hasAvatar), _classnames), className);
    return _react.default.createElement("div", (0, _extends2.default)({
      "data-react-toolbox": "chip",
      className: classes
    }, other), typeof children === 'string' ? _react.default.createElement("span", null, children) : children, deletable ? _react.default.createElement("span", {
      className: theme.delete,
      onClick: onDeleteClick
    }, _react.default.createElement("svg", {
      viewBox: "0 0 40 40",
      className: theme.deleteIcon
    }, _react.default.createElement("path", {
      className: theme.deleteX,
      d: "M 12,12 L 28,28 M 28,12 L 12,28"
    }))) : null);
  };

  Chip.propTypes = {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    deletable: _propTypes.default.bool,
    onDeleteClick: _propTypes.default.func,
    theme: _propTypes.default.shape({
      avatar: _propTypes.default.string,
      chip: _propTypes.default.string,
      deletable: _propTypes.default.string,
      delete: _propTypes.default.string,
      deleteIcon: _propTypes.default.string,
      deleteX: _propTypes.default.string
    })
  };
  Chip.defaultProps = {
    className: '',
    deletable: false
  };
  return Chip;
};

exports.chipFactory = factory;
var Chip = factory(_Avatar.default);
exports.Chip = Chip;

var _default = (0, _reactCssThemr.themr)(_identifiers.CHIP)(Chip);

exports.default = _default;