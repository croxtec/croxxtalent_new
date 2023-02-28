import Vue from "vue";
import Vuex from "vuex";

// Modules
// import auth from "@/modules/auth/store/index";

import auth from "@/modules/auth/store/index";
import home from "@/modules/landing/store/index";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    name: "hello",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    home,
  },
});
