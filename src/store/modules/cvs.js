/* src/store/modules/talent/resume.js */

import $http from "../../axios";

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
    uploadProgress: null
  };
}

const storeModule = {
  namespaced: true,

  state: initialState,

  getters: {
    isLoading: state => state.loading,
    isLoadingDataSet: state => state.loadingDataSet,
    getData: state => state.data
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
      state.loading = false;
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
      // console.log(state.data.cv_skills, payload.data.cv_skills)
    },

    SET_DATASET(state, payload) {
      state.dataSet = payload.data;
      state.dataSetTotal = payload.total;
      state.dataSetLastPage = payload.last_page;
      state.loadingDataSet = false;
    },

    SET_UPLOAD_PROGRESS(state, payload) {
      state.uploadProgress = payload;
    },

    REMOVE_UPLOAD_PROGRESS(state) {
      state.uploadProgress = null;
    }
  },

  actions: {
    // List All action
    async list({ commit }, payload) {
      try {
        commit("SET_LOADING_DATASET");
        let response = await $http.get("/talent/resume", {
          params: payload
        });
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
      } catch (error) {
        //
      }
    },


    // View action
    async view({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.get(`/talent/resume/${id}`);
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload);
        // console.log(responsePayload)
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
      }
    },

    // Update action
    async updateResumeTitle({ commit }, {  payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/talent/resume`, payload);
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
      }
    },

    async updateResumeContact({ commit }, {  payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/talent/resume/contact`, payload);
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
      }
    },

    // Delete action
    async delete({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.delete(`/talent/resume/${id}`);
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
      }
    },

    // Delete Multiple action
    async deleteMultiple({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/talent/resume/delete-multiple`, payload);
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
      }
    },

    // Upload photo action
    async uploadPhoto({ commit }, { id, payload }) {
      commit("SET_LOADING");
      try {
        let response = await $http.post(`/talent/resume/${id}/photo`, payload, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function(progressEvent) {
            let percentCompleted = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
            commit("SET_UPLOAD_PROGRESS", percentCompleted);
          }.bind(this)
        });
        let responsePayload = response.data;
        commit("SET_DATA", responsePayload.data.cv);
        commit("SET_SUCCESS", responsePayload.message);
        commit("REMOVE_UPLOAD_PROGRESS");
      } catch (error) {
        commit("REMOVE_UPLOAD_PROGRESS");
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

    // Publish action
    async publish({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(`/talent/resume/${id}/publish`);
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
      }
    },

    // Unpublish action
    async unpublish({ commit }, id) {
      commit("SET_LOADING");
      try {
        let response = await $http.patch(`/talent/resume/${id}/unpublish`);
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
      }
    }
  }
};
export default storeModule;
