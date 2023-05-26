import Vue from "vue";
import Vuex from "vuex";

// Modules
// import auth from "@/modules/auth/store/index";

import auth from "@/modules/auth/store/index";
import home from "@/modules/landing/store/index";

// 
import manager from "@/modules/talent//views/competencies/store/manager"
import competencies from "@/modules/talent//views/competencies/store/competencies"

// Configurations
import config from "./configurations";

// CV STORE DATA
import cvEducation from "@/modules/talent/views/resume/store/cv-education";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    home,
    config,

    // CV
    cvEducation,
    manager,
    competencies

  },
});
