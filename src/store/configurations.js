/* eslint-disable no-undef */
import $request from "@/axios";

// import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    // timezones: [],
    countries: [],
    states: [],
    course_of_studies: [],
    certification_courses: [],
    competence: [],
    industries: [],
    job_titles: [],
    degrees: [],
    languages: [],
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
  },
};
