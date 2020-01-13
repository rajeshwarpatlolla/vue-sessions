import Vue from 'vue';
import Vuex from 'vuex';
import services from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    getPostsMutation(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async getPostsAction(state) {
      const response = await services.getPostsService();
      state.commit('getPostsMutation', response);
    },
  },
  getters: {
    getPostsGetter(state) {
      return state.posts;
    },
  },
  modules: {},
});
