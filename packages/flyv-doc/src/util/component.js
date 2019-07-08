export function installComponent (components, Vue, opts) {
    components.map(Component => {
        Vue.component(Component.name, Component);
    });
};
