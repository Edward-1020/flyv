export function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
}
export function transformComponentName(name) {
  name = 'flyv-' + name;
  return name;
}
export function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    render: function render(h, context) {
      return pure(h, context);
    }
  };
}
export var transformComponent = function transformComponent(name) {
  return function (componentOpts) {
    if (typeof componentOpts === 'function') {
      componentOpts = transformFunctionComponent(componentOpts);
    }

    componentOpts.name = transformComponentName(name);
    componentOpts.install = install;
    return componentOpts;
  };
};