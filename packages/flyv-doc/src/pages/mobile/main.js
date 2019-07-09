import App from './App.vue';
import Header from './head/index';

import { installComponent } from '../../util/component';
import { syncPath } from '../../util/iframe';

const components = [
    App,
    Header
];

export default function install (Vue, opts) {
    installComponent(components, Vue, opts)
};

syncPath('mobile');