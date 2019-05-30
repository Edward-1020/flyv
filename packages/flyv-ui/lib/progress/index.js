"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transformComponent = require("../util/transformComponent");

var _dom = require("../util/dom");

var PROGRESS_BTN_WIDTH = 16;
var transformPrefix = (0, _dom.prefixStyle)('transform');

function Progress(h, ctx) {
  var _ref = {};

  var handleClick = function handleClick() {
    console.log(_ref);
  };

  return h("div", {
    "ref": function ref(vnode) {
      return _ref = vnode;
    },
    "on": {
      "click": handleClick
    }
  }, ["11111"]);
}

Progress.props = {
  percent: String
};

var _default = (0, _transformComponent.transformComponent)('progress')(Progress);

exports["default"] = _default;