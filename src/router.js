import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('./views/Comics.vue'),
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('./views/Characters.vue'),
    },
  ],
});
