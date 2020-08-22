import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comic: {},
  },
  mutations: {
    SET_COMIC(state, comicSelected) {
      state.comic = comicSelected;
    },
  },
  getters: {
    getComic(state) {
      return state.comic;
    },
  },
  actions: {},
});
