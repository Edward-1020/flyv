import Vue from 'vue';
import App from './App.vue';
import Header from './pages/head/index';
import Container from './pages/container/index';
import Nav from './pages/nav/index';

const components = [
    App,
    Header,
    Container,
    Nav
];

export default function install () {
    components.map(Component => {
        Vue.component(Component.name, Component);
    });
}

export {
    App,
    Header,
    Container,
    Nav
}