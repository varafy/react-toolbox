"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = exports.default = void 0;

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

var TabContent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TabContent, _Component);

  function TabContent() {
    (0, _classCallCheck2.default)(this, TabContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabContent).apply(this, arguments));
  }

  (0, _createClass2.default)(TabContent, [{
    key: "render",
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var className = (0, _classnames2.default)(this.props.theme.tab, (0, _defineProperty2.default)({}, this.props.theme.active, this.props.active), this.props.className);
      return _react.default.createElement("section", {
        className: className,
        role: "tabpanel",
        "aria-expanded": this.props.hidden
      }, this.props.children);
    }
  }]);
  return TabContent;
}(_react.Component);

exports.TabContent = TabContent;
(0, _defineProperty2.default)(TabContent, "propTypes", {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  hidden: _propTypes.default.bool,
  theme: _propTypes.default.shape({
    active: _propTypes.default.string,
    tab: _propTypes.default.string
  })
});
(0, _defineProperty2.default)(TabContent, "defaultProps", {
  active: false,
  className: '',
  hidden: true
});

var _default = (0, _reactCssThemr.themr)(_identifiers.TABS)(TabContent);

exports.default = _default;