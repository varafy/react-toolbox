"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Avatar = require("./Avatar");

var _FontIcon = require("../font_icon/FontIcon");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var Avatar = (0, _Avatar.avatarFactory)(_FontIcon.FontIcon);
var ThemedAvatar = (0, _reactCssThemr.themr)(_identifiers.AVATAR, _themeModule.default)(Avatar);
exports.Avatar = ThemedAvatar;
var _default = ThemedAvatar;
exports.default = _default;