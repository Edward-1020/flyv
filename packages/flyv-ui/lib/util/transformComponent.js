"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
exports.transformComponentName = transformComponentName;
exports.transformFunctionComponent = transformFunctionComponent;
exports.transformComponent = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
}

function transformComponentName(name) {
  name = 'flyv-' + name;
  return name;
}

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    render: function render(h, context) {
      return pure(h, context);
    }
  };
}

var transformComponent = function transformComponent(name) {
  return function (componentOpts) {
    if (typeof componentOpts === 'function') {
      componentOpts = transformFunctionComponent(componentOpts);
    }

    componentOpts.name = transformComponentName(name);
    componentOpts.install = install;
  };
};

exports.transformComponent = transformComponent;