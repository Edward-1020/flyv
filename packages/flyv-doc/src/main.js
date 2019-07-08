import App from './App.vue';
import Container from './pages/pc/container/index';
import Header from './pages/pc/head/index';
import Content from './pages/pc/content/index';
import Nav from './pages/pc/nav/index';
import Simulator from './pages/pc/simulator/index';


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