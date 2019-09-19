"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogFactory = exports.Dialog = exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssThemr = require("react-css-themr");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _identifiers = require("../identifiers");

var _Portal = _interopRequireDefault(require("../hoc/Portal"));

var _ActivableRenderer = _interopRequireDefault(require("../hoc/ActivableRenderer"));

var _Button = _interopRequireDefault(require("../button/Button"));

var _Overlay = _interopRequireDefault(require("../overlay/Overlay"));

/* eslint-disable jsx-a11y/aria-role */
var factory = function factory(Overlay, Button) {
  var Dialog = function Dialog(props) {
    var actions = props.actions.map(function (action, idx) {
      var className = (0, _classnames3.default)(props.theme.button, (0, _defineProperty2.default)({}, action.className, action.className));
      return _react.default.createElement(Button, (0, _extends2.default)({
        key: idx
      }, action, {
        className: className
      })); // eslint-disable-line
    });
    var className = (0, _classnames3.default)([props.theme.dialog, props.theme[props.type]], (0, _defineProperty2.default)({}, props.theme.active, props.active), props.className);
    return _react.default.createElement(_Portal.default, {
      className: props.theme.wrapper
    }, _react.default.createElement(Overlay, {
      active: props.active,
      className: props.theme.overlay,
      onClick: props.onOverlayClick,
      onEscKeyDown: props.onEscKeyDown,
      onMouseDown: props.onOverlayMouseDown,
      onMouseMove: props.onOverlayMouseMove,
      onMouseUp: props.onOverlayMouseUp,
      theme: props.theme,
      themeNamespace: "overlay"
    }), _react.default.createElement("div", {
      "data-react-toolbox": "dialog",
      className: className
    }, _react.default.createElement("section", {
      role: "body",
      className: props.theme.body
    }, props.title ? _react.default.createElement("h6", {
      className: props.theme.title
    }, props.title) : null, props.children), actions.length ? _react.default.createElement("nav", {
      className: props.theme.navigation
    }, actions) : null));
  };

  Dialog.propTypes = {
    actions: _propTypes.default.arrayOf(_propTypes.default.shape({
      children: _propTypes.default.node,
      className: _propTypes.default.string,
      label: _propTypes.default.string
    })),
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    onEscKeyDown: _propTypes.default.func,
    onOverlayClick: _propTypes.default.func,
    onOverlayMouseDown: _propTypes.default.func,
    onOverlayMouseMove: _propTypes.default.func,
    onOverlayMouseUp: _propTypes.default.func,
    theme: _propTypes.default.shape({
      active: _propTypes.default.string,
      body: _propTypes.default.string,
      button: _propTypes.default.string,
      dialog: _propTypes.default.string,
      navigation: _propTypes.default.string,
      overflow: _propTypes.default.string,
      overlay: _propTypes.default.string,
      title: _propTypes.default.string,
      wrapper: _propTypes.default.string
    }),
    title: _propTypes.default.string,
    type: _propTypes.default.string
  };
  Dialog.defaultProps = {
    actions: [],
    active: false,
    type: 'normal'
  };
  return (0, _ActivableRenderer.default)()(Dialog);
};

exports.dialogFactory = factory;
var Dialog = factory(_Overlay.default, _Button.default);
exports.Dialog = Dialog;

var _default = (0, _reactCssThemr.themr)(_identifiers.DIALOG)(Dialog);

exports.default = _default;