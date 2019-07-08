import App from './App.vue';
import Container from './container/index';
import Header from './head/index';
import Content from './content/index';
import Nav from './nav/index';
import Simulator from './simulator/index';


const components = [
    App,
    Container,
    Header,
    Content,
    Nav,
    Simulator
];

export default function install (Vue, opts) {
    components.map(Component => {
        Vue.component(Component.name, Component);
    });
};