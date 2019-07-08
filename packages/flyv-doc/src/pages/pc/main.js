import App from './App.vue';
import Container from './container/index';
import Header from './head/index';
import Content from './content/index';
import Nav from './nav/index';
import Simulator from './simulator/index';

import { installComponent } from '../../util/component';


const components = [
    App,
    Container,
    Header,
    Content,
    Nav,
    Simulator
];

export default function install (Vue, opts) {
    installComponent(components, Vue, opts)
};