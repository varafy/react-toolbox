"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardTitle = exports.CardText = exports.CardMedia = exports.CardActions = exports.Card = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Card = require("./Card");

var _CardActions = require("./CardActions");

var _CardMedia = require("./CardMedia");

var _CardText = require("./CardText");

var _CardTitle = require("./CardTitle");

var _avatar = require("../avatar");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var CardTitle = (0, _CardTitle.cardTitleFactory)(_avatar.Avatar);
var ThemedCard = (0, _reactCssThemr.themr)(_identifiers.CARD, _themeModule.default)(_Card.Card);
exports.Card = ThemedCard;
var ThemedCardActions = (0, _reactCssThemr.themr)(_identifiers.CARD, _themeModule.default)(_CardActions.CardActions);
exports.CardActions = ThemedCardActions;
var ThemedCardMedia = (0, _reactCssThemr.themr)(_identifiers.CARD, _themeModule.default)(_CardMedia.CardMedia);
exports.CardMedia = ThemedCardMedia;
var ThemedCardText = (0, _reactCssThemr.themr)(_identifiers.CARD, _themeModule.default)(_CardText.CardText);
exports.CardText = ThemedCardText;
var ThemedCardTitle = (0, _reactCssThemr.themr)(_identifiers.CARD, _themeModule.default)(CardTitle);
exports.CardTitle = ThemedCardTitle;
var _default = ThemedCard;
exports.default = _default;