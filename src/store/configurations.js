/* eslint-disable no-undef */
import $request from "@/axios";

// import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    // timezones: [],
    countries: [],
    states: [],
    statesTotal: 0,
    course_of_studies: [],
    certification_courses: [],
    competence: [],
    industries: [],
    job_titles: [],
    degrees: [],
    languages: [],
    skills: null,
    domains: [],
    cores: null,
    levels: [
      {
        id: 1,
        name: "Beginner",
        value: "beginner",
      },
      {
        id: 2,
        name: "Intermediate",
        value: "intermediate",
      },
      {
        id: 3,
        name: "Advance",
        value: "advance",
      },
      {
        id: 4,
        name: "Expert",
        value: "expert",
      },
    ],
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {},

  mutations: {
    SET_COUNTRIES_DATA(state, payload) {
      state.countries = payload;
    },
    SET_STATES_DATASET(state, payload) {
      state.states = payload.data;
      state.statesTotal = payload.total;
    },
    SET_COURSES(state, payload) {
      state.course_of_studies = payload;
    },
    SET_INDUSTRIES_DATA(state, payload) {
      state.industries = payload;
    },
    SET_JOB_TITLES(state, payload) {
      state.job_titles = payload;
    },
    SET_DEGREES(state, payload) {
      state.degrees = payload;
    },
    SET_DOMAINS(state, payload) {
      state.domains = payload;
    },
    SET_CORES(state, payload) {
      state.cores = payload;
    },
    SET_SKILLS(state, payload) {
      state.skills = payload;
    },
    SET_LANGUAGES(state, payload) {
      state.languages = payload;
    },
  },
  actions: {
    // get Countries
    async getCountries({ commit }) {
      try {
        let response = await $request.get("settings/countries");
        let responsePayload = response.data.data;
        commit("SET_COUNTRIES_DATA", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // List A Country's States
    async getCountryStates({ commit }, { id, payload }) {
      try {
        let response = await $request.get(`/settings/countries/${id}/states`, {
          params: payload,
        });
        let responsePayload = response.data;
        commit("SET_STATES_DATASET", responsePayload);
      } catch (error) {
        //
      }
    },

    async getDomains({ commit }) {
      try {
        let response = await $request.get("settings/competence");
        console.log(response.data.data);
        let responsePayload = response.data.data;
        commit("SET_DOMAINS", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    async getCore({ commit }, domain) {
      try {
        console.log(domain);
        let response = await $request.get(`settings/competence/core/${domain}`);
        console.log(response.data.data);
        let responsePayload = response.data.data.core;
        commit("SET_CORES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    async getSkills({ commit }, core) {
      try {
        let response = await $request.get(`settings/competence/skill/${core}`);
        console.log(response.data.data);
        let responsePayload = response.data.data;
        commit("SET_SKILLS", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Countries
    async getCourses({ commit }) {
      try {
        let response = await $request.get("settings/course-of-studies");
        let responsePayload = response.data.data;
        commit("SET_COURSES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Industries
    async getIndustries({ commit }) {
      try {
        let response = await $request.get("settings/industries");
        let responsePayload = response.data.data;
        commit("SET_INDUSTRIES_DATA", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Job Titles
    async getJobTitles({ commit }) {
      try {
        let response = await $request.get("settings/job-titles");
        let responsePayload = response.data.data;
        commit("SET_JOB_TITLES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Degrees
    async getDegrees({ commit }) {
      try {
        let response = await $request.get("settings/degrees");
        let responsePayload = response.data.data;
        commit("SET_DEGREES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },

    // get Languages
    async getLanguages({ commit }) {
      try {
        let response = await $request.get("settings/languages");
        let responsePayload = response.data.data;
        console.log(responsePayload);
        commit("SET_LANGUAGES", responsePayload);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
