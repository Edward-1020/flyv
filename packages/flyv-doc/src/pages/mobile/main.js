import App from './App.vue';
import Header from './head/index';

import { installComponent } from '../../util/component';


const components = [
    App,
    Header
];

export default function install (Vue, opts) {
    installComponent(components, Vue, opts)
};