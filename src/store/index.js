import Vue from "vue";
import Vuex from "vuex";

// Modules
// import auth from "@/modules/auth/store/index";

import auth from "@/modules/auth/store/index";
import home from "@/modules/landing/store/index";

// 
import manager from "@/modules/talent/views/competencies/store/manager";
import competencies from "@/modules/talent/views/competencies/store/competencies";
import assessmentModule from "@/modules/talent/views/assessment/store/assessment";
// Configurations
import config from "./configurations";
// JOBS
import jobsModule from '@/modules/talent/views/jobs/store/job';
import messagesModule from '@/modules/talent/views/messaging/store/messages';
// ACTIVE TAB 
import activeTabModule from '@/modules/talent/views/jobs/store/activeTab';
// CV STORE DATA
import cvs from "./modules/cvs";
import cvEducation from "@/modules/talent/views/resume/store/cv-education";
import cvCertification from "@/modules/talent/views/resume/store/cv-certification";
import cvCompetency from "@/modules/talent/views/resume/store/cv-competency";
import cvWorkHistory from "@/modules/talent/views/resume/store/cv-work-history";
import cvHobby from "@/modules/talent/views/resume/store/cv-hobbies";
import cvLanguages from "@/modules/talent/views/resume/store/cv-languages";
import cvAwards from "@/modules/talent/views/resume/store/cv-honours";
import cvReferences from "@/modules/talent/views/resume/store/cv-references";

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
    cvs,
    cvEducation,
    cvCertification,
    cvCompetency,
    cvWorkHistory,
    cvHobby,
    cvLanguages,
    cvAwards,
    cvReferences,
    messagesModule,
    jobsModule,
    cvWorkHistory,
    cvHobby,

    manager,
    competencies,

    assessmentModule,
    activeTabModule
  }
});
