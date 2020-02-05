"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = exports.TableRow = exports.TableHead = exports.Table = exports.default = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _checkbox = require("../checkbox");

var _font_icon = require("../font_icon");

var _Table = require("./Table");

var _TableHead = require("./TableHead");

var _TableRow = require("./TableRow");

var _TableCell = require("./TableCell");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_identifiers.TABLE, _themeModule.default)(Component);
};

var ThemedTableCell = applyTheme((0, _TableCell.tableCellFactory)(_font_icon.FontIcon));
exports.TableCell = ThemedTableCell;
var ThemedTableHead = applyTheme((0, _TableHead.tableHeadFactory)(_checkbox.Checkbox, ThemedTableCell));
exports.TableHead = ThemedTableHead;
var ThemedTableRow = applyTheme((0, _TableRow.tableRowFactory)(_checkbox.Checkbox, ThemedTableCell));
exports.TableRow = ThemedTableRow;
var ThemedTable = applyTheme((0, _Table.tableFactory)(ThemedTableHead, ThemedTableRow));
exports.Table = ThemedTable;
var _default = ThemedTable;
exports.default = _default;