/* eslint-disable no-undef */
import $request from "@/axios";
import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    validationErrors: {},
    dataSet: null,
    singleDataSet: null,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_VALIDATION_ERRORS(state, payload) {
      state.loading = false;
      state.validationErrors = payload;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_DATA(state, payload) {
      state.dataSet = payload;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
      state.success = false;
    },

    SET_SINGLE_DATA(state, payload) {
      state.singleDataSet = payload;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
      state.success = false;
    },
  },
  actions: {
    // Get Education List
    async list({ commit }) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(`talent/resume/work-experiences`);
        console.log(res.data);
        let responsePayload = res.data.data;
        commit("SET_DATA", responsePayload);
        return res;
      } catch (error) {
        console.log(error);
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.response;
      } finally {
        NProgress.done();
      }
    },

    // Single Education Data
    async view({ commit }, id) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.get(`talent/resume/educations/${id}`);
        console.log(res.data);
        let responsePayload = res.data.data;
        commit("SET_SINGLE_DATA", responsePayload);
        return res;
      } catch (error) {
        console.log(error);

        return error.response;
      } finally {
        NProgress.done();
      }
    },

    // Create Work Experience
    async create({ commit, dispatch }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $request.post("talent/resume/work-experiences", payload);
        console.log(response);
        let responsePayload = response.data;
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_SUCCESS", true);
        dispatch("list");
      } catch (error) {
        console.log(error.data);
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    },

    // Update Work Experience
    async update({ commit, dispatch }, {id, payload}) {
      commit("SET_LOADING");
      try {
        let response = await $request.put("talent/resume/work-experiences/"+id, payload);
        console.log(response);
        let responsePayload = response.data;
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        commit("SET_SUCCESS", true);
        dispatch("list");
      } catch (error) {
        console.log(error.data);
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      }
    },
  },
};
