import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faInstagram);
library.add(faTwitter);
library.add(faChevronRight);
library.add(faChevronLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
