// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue';
import {Button, Card, Carousel, CarouselItem, Row, Col} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from '../../App';
import router from './router.js';
import Vuex from 'vuex';
import store from './vuex/store';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://234c3f0188c84ca69992f7e335d6bb75@sentry.io/152611')
    .addPlugin(RavenVue, Vue)
    .install();
Vue.use(Vuex);
Vue.use(Button);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Col);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});
