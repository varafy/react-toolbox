"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.listFactory = exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssThemr = require("react-css-themr");

var _identifiers = require("../identifiers");

var _ListItem = _interopRequireDefault(require("./ListItem"));

var mergeProp = function mergeProp(propName, child, parent) {
  return child[propName] !== undefined ? child[propName] : parent[propName];
};

var factory = function factory(ListItem) {
  var List =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(List, _Component);

    function List() {
      (0, _classCallCheck2.default)(this, List);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
    }

    (0, _createClass2.default)(List, [{
      key: "renderItems",
      value: function renderItems() {
        var _this = this;

        return _react.default.Children.map(this.props.children, function (item) {
          if (item === null || item === undefined) {
            return item;
          }

          if (item.type === ListItem) {
            var selectable = mergeProp('selectable', item.props, _this.props);
            var ripple = mergeProp('ripple', item.props, _this.props);
            return _react.default.cloneElement(item, {
              selectable: selectable,
              ripple: ripple
            });
          }

          return _react.default.cloneElement(item);
        });
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement("ul", {
          "data-react-toolbox": "list",
          className: (0, _classnames.default)(this.props.theme.list, this.props.className)
        }, this.renderItems());
      }
    }]);
    return List;
  }(_react.Component);

  (0, _defineProperty2.default)(List, "propTypes", {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    ripple: _propTypes.default.bool,
    // eslint-disable-line react/no-unused-prop-types
    selectable: _propTypes.default.bool,
    // eslint-disable-line react/no-unused-prop-types
    theme: _propTypes.default.shape({
      list: _propTypes.default.string
    })
  });
  (0, _defineProperty2.default)(List, "defaultProps", {
    className: '',
    ripple: false,
    selectable: false
  });
  return List;
};

exports.listFactory = factory;
var List = factory(_ListItem.default);
exports.List = List;

var _default = (0, _reactCssThemr.themr)(_identifiers.LIST)(List);

exports.default = _default;