import request from "@/config/http";

const getDefaultState = () => {
  return {};
};

export default {
  namespaced: true,
  // plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    // auth: (state) => state.auth,
  },
  mutations: {
    SET_USER(state, data) {
      // console.log(data);
      state.user = data;
      state.token = data.auth_token;
    },
    UPDATE_USER(state, data) {
      // console.log(data);
      state.user.user = data;
    },
    async LOGOUT(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("vuex");
      localStorage.clear();
    },
    RESET(state) {
      Object.keys(state).forEach((key) => {
        Object.assign(state[key], null);
      });
    },
  },
  actions: {
    // Login request
    loginUser({ commit }, payload) {
      alert("hello");
      request()
        .post(`/auth/login`, payload)
        .then((res) => {
          commit("SET_USER", res);
        })
        .catch((err) => {
          console.log(err);
        });
      // try {
      //   let res = await request().post(`/auth/login`, payload);
      //   commit("SET_USER", res);
      //   sessionStorage.setItem("vuex", res);
      //   console.log(res);
      //   return res;
      // } catch (error) {
      //   return error.response;
      // }
    },

    // Talent register request
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
  },
};
