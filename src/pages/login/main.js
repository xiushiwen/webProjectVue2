// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue';
import {Tabs, TabPane, Input} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from '../../App';
import router from './router.js';
import Vuex from 'vuex';
import store from './vuex/store';

Vue.use(Vuex);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
});
