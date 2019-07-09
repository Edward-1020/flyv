import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FlyvDoc from '@flyv/doc';
import FlyvSimulator from '@flyv/doc/lib/index.mobile.js';
import '@flyv/doc/lib/style.mobile.css';
import routes from '../config/routes/index.mobile.ts';
import { rem } from '../../packages/util/rem';

rem()();
Vue.config.productionTip = false;
Vue.use(VueRouter).use(FlyvDoc).use(FlyvSimulator);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');