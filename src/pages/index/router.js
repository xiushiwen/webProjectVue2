import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['./components/App'], resolve) // vue-router 懒加载
    }
  ]
});
