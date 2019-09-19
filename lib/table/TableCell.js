"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = exports.tableCellFactory = exports.default = void 0;

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

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _FontIcon = _interopRequireDefault(require("../font_icon/FontIcon"));

var ASC = 'asc';
var DESC = 'desc';

var factory = function factory(FontIcon) {
  var TableCell =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(TableCell, _Component);

    function TableCell() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TableCell);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TableCell)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
        var _this$props = _this.props,
            onClick = _this$props.onClick,
            row = _this$props.row,
            column = _this$props.column;
        if (onClick) onClick(event, column, row);
      });
      return _this;
    }

    (0, _createClass2.default)(TableCell, [{
      key: "render",
      value: function render() {
        var _classnames;

        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            numeric = _this$props2.numeric,
            row = _this$props2.row,
            column = _this$props2.column,
            sorted = _this$props2.sorted,
            tagName = _this$props2.tagName,
            theme = _this$props2.theme,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "className", "numeric", "row", "column", "sorted", "tagName", "theme"]);

        var _className = (0, _classnames3.default)(theme.tableCell, (_classnames = {}, (0, _defineProperty2.default)(_classnames, theme.headCell, tagName === 'th'), (0, _defineProperty2.default)(_classnames, theme.rowCell, tagName === 'td'), (0, _defineProperty2.default)(_classnames, theme.sorted, sorted), (0, _defineProperty2.default)(_classnames, theme.numeric, numeric), _classnames), className);

        var props = (0, _objectSpread2.default)({}, other, {
          className: _className,
          onClick: this.handleClick
        });
        return _react.default.createElement(tagName, props, [sorted && _react.default.createElement(FontIcon, {
          className: (0, _classnames3.default)(theme.sortIcon, (0, _defineProperty2.default)({}, theme.asc, sorted === ASC)),
          key: "icon",
          value: "arrow_downward"
        }), children]);
      }
    }]);
    return TableCell;
  }(_react.Component);

  (0, _defineProperty2.default)(TableCell, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    column: _propTypes.default.number,
    numeric: _propTypes.default.bool,
    onClick: _propTypes.default.func,
    row: _propTypes.default.number,
    sorted: _propTypes.default.oneOf([ASC, DESC]),
    tagName: _propTypes.default.oneOf(['td', 'th']),
    theme: _propTypes.default.shape({
      asc: _propTypes.default.string,
      headCell: _propTypes.default.string,
      numeric: _propTypes.default.string,
      rowCell: _propTypes.default.string,
      sorted: _propTypes.default.string,
      sortIcon: _propTypes.default.string,
      tableCell: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(TableCell, "defaultProps", {
    children: _propTypes.default.node,
    className: '',
    numeric: false,
    tagName: 'td'
  });
  return TableCell;
};

exports.tableCellFactory = factory;
var TableCell = factory(_FontIcon.default);
exports.TableCell = TableCell;

var _default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(TableCell);

exports.default = _default;