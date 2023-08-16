/* src/store/modules/cv-skills.js */

import $request from "@/axios";
import toastify from "toastify-js";

function initialState() {
  return {
    loading: false,
    loadingDataSet: false,
    error: false,
    success: false,
    validationErrors: {},
    data: {},
    dataSet: [],
    dataSetTotal: 0,
    dataSetLastPage: 1,
  };
}

const storeModule = {
  namespaced: true,
  state: initialState,

  getters: {
    isLoading: (state) => state.loading,
    isLoadingDataSet: (state) => state.loadingDataSet,
    getData: (state) => state.data,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.validationErrors = {};
    },

    SET_LOADING_DATASET(state) {
      state.loadingDataSet = true;
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
      state.validationErrors = payload;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_DATA(state, payload) {
      state.data = payload.data;
    },

    SET_DATASET(state, payload) {
      state.dataSet = payload.data;
      state.dataSetTotal = payload.total;
      state.dataSetLastPage = payload.last_page;
      state.loadingDataSet = false;
    },
  },

  actions: {
    // List All action
    async list({ commit }) {
      NProgress.start();
      try {
        commit("SET_LOADING_DATASET");
        let response = await $request.get(`talent/resume/competence`);
        let responsePayload = response.data;
        console.log(responsePayload);
        commit("SET_DATASET", responsePayload);
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
      } catch (error) {
        //
      } finally {
        NProgress.done();
      }
    },

    // Create action
    async create({ commit }, payload) {
      NProgress.start();
      commit("SET_LOADING");
      try {
        let response = await $request.post(`talent/resume/competence`, payload);
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
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
      } finally {
        NProgress.done();
      }
    },

    // View action
    async view({ commit }, { work_experience_id }) {
      commit("SET_LOADING");
      try {
        let response = await $request.get(
          `talent/resume/competences/${work_experience_id}`
        );
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      } finally {
        NProgress.done();
      }
    },

    // Update action
    async update({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $request.put(
          `talent/resume/competences/${id}`,
          payload
        );
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
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
      } finally {
        NProgress.done();
      }
    },

    // Delete action
    async deleteCompetency({ commit }, id) {
      NProgress.start();
      try {
        let response = await $request.delete(`talent/resume/competences/${id}`);
        let responsePayload = response.data;
        commit("SET_SUCCESS", responsePayload.message);
      } catch (error) {
        if (error && error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
      } finally {
        NProgress.done();
      }
    },
  },
};
export default storeModule;
