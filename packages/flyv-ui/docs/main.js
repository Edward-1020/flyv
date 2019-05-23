import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FlyvDoc from '@flyv/doc';
import '@flyv/doc/lib/style.css';
import routes from './config/routes/index';

Vue.config.productionTip = false;
Vue.use(VueRouter).use(FlyvDoc);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
