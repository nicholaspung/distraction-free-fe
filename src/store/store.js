import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    redditPosts: [],
    titles: [],
    posts: [],
    websitePosts: [],
  },
  getters: {},
  mutations: {
    saveData(state, { key, data }) {
      state[key] = data;
    },
  },
  actions: {},
});

export default store;
