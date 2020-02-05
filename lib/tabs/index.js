"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _Tabs = require("./Tabs");

var _TabContent = require("./TabContent");

var _Tab = require("./Tab");

var _ripple = _interopRequireDefault(require("../ripple"));

var _FontIcon = require("../font_icon/FontIcon");

var _themeModule = _interopRequireDefault(require("./theme.module.css"));

var applyTheme = function applyTheme(Component) {
  return (0, _reactCssThemr.themr)(_identifiers.TABS, _themeModule.default)(Component);
};

var ThemedTabContent = applyTheme(_TabContent.TabContent);
var ThemedTab = applyTheme((0, _Tab.tabFactory)((0, _ripple.default)({
  centered: false
}), _FontIcon.FontIcon));
exports.Tab = ThemedTab;
var ThemedTabs = applyTheme((0, _Tabs.tabsFactory)(ThemedTab, ThemedTabContent, _FontIcon.FontIcon));
exports.Tabs = ThemedTabs;