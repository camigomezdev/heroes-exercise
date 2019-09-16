import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/comics',
      name: 'comics',
      component: () => import('./views/Comics.vue'),
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () => import('./views/SuperHeroes.vue'),
    },
  ],
});
