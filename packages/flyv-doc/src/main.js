import App from './App.vue';
import Container from './pages/container/index';
import Header from './pages/head/index';
import Content from './pages/content/index';
import Nav from './pages/nav/index';
import Simulator from './pages/simulator/index';


const components = [
    App,
    Container,
    Header,
    Content,
    Nav,
    Simulator
];

const FlyDoc = {};

FlyDoc.install = (Vue, opts) => {
    components.map(Component => {
        Vue.component(Component.name, Component);
    });
};

export default FlyDoc;