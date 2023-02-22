import request from "@/config/http";

const getDefaultState = () => {
  return {
    result: null,
    loading: false,
    dataSet: null,
  };
};

export default {
  namespaced: true,
  strict: true,
  // plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    // auth: (state) => state.auth,
  },
  mutations: {
    SET_DATA(state, data) {
      // console.log(data);
      state.result = data.result;
      state.loading = false;
      state.dataSet = data.res;
    },

    SET_LOADING_STATUS(state, data) {
      // console.log(data);
      state.loading = data;
    },

    REMOVE_ALERTS(state, data) {
      state.result = data;
    },
  },
  actions: {
    // Newsleter request
    async newsLetter({ commit }, data) {
      commit("SET_LOADING_STATUS", true);
      try {
        let res = await request().post(`/croxtec/newsletter`, data);
        commit("SET_DATA", { res: res.data.message, result: "success" });
        console.log(res.data.message);
        return res;
      } catch (error) {
        commit("SET_DATA", {
          res: error.response.data.errors.email,
          result: "error",
        });
        console.log(error.response.data.errors.email);
        return error.response;
      }
    },

    // Contact Us request
    async registerUser({ commit }, payload) {
      try {
        let res = await request().post(`/auth/register`, payload);
        commit("SET_USER", res);
        // sessionStorage.setItem("vuex", res);
        console.log(res);
        return res;
      } catch (error) {
        return error.response;
      }
    },

    removeAlerts({ commit }) {
      commit("REMOVE_ALERTS", null);
    },
  },
};
