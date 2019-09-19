"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

/**
 * Looks through a collection of React children elements, filtering them
 * according to the predicate passed.
 *
 * @param {Array/Object} children - colleciton of >=1 react elements
 * @param {function} predicate - function returning true when provided with an entry as argument
 */
function _default(children, predicate) {
  var _this = this;

  if (children) {
    var result = [];

    _react.default.Children.forEach(children, function (entry, idx) {
      if (predicate && predicate.call(_this, entry, idx)) {
        result.push(entry);
      }
    });

    return result;
  }

  return undefined;
}