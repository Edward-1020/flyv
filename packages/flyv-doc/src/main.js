import Vue from 'vue';
import App from './App.vue';
import Header from './pages/head/index';
import Content from './pages/content/index';
import Nav from './pages/nav/index';

const components = [
    App,
    Header,
    Content,
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