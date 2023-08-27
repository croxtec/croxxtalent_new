/* eslint-disable no-undef */
import Vue from "vue";
import $request from "@/axios";
import Cookies from "js-cookie";
import config from "@/config.js";
import { auth }  from '@/firebase.js';
import router from "@/router"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

Vue.use(require("vue-moment"));

import toastify from "toastify-js";

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    regError: false,
    regSuccess: false,
    validationErrors: {},
    user: {},
    loggedIn: false,
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
    isLoggedIn(state) {
      return state.loggedIn
        ? state.loggedIn
        : !!Cookies.get(config.accessTokenStorageKey);
    },
    getAccessToken() {
      return Cookies.get(config.accessTokenStorageKey);
    },
    getAccessTokenExpiresAt() {
      return Cookies.get(config.accessTokenExpiresAtStorageKey);
    },
    getAccessTokenExpiresIn() {
      return Cookies.get(config.accessTokenExpiresInStorageKey);
    },
    getUser: (state) => state.user,
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
      state.regSuccess = true;
      state.regError = false;
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

    LOGIN(state, payload) {
      state.loading = false;
      state.loggedIn = true;

      Cookies.set(config.accessTokenStorageKey, payload.accessToken, {
        expires: new Date(payload.accessTokenExpiresAt),
        path: "home/",
        domain: window.location.hostname,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      Cookies.set(
        config.accessTokenExpiresInStorageKey,
        payload.accessTokenExpiresIn,
        {
          expires: new Date(payload.accessTokenExpiresAt),
          path: "/home",
          domain: window.location.hostname,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        }
      );
      Cookies.set(
        config.accessTokenExpiresAtStorageKey,
        payload.accessTokenExpiresAt,
        {
          expires: new Date(payload.accessTokenExpiresAt),
          path: "/home",
          domain: window.location.hostname,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        }
      );
    },

    SET_USER(state, payload) {
      state.user = payload;
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
    // Authenticate Session action
    async authenticateSession({ commit, dispatch, getters }, toRoute) {
      const accessToken = Cookies.get(config.accessTokenStorageKey);
      const accessTokenExpiresIn = Cookies.get(
        config.accessTokenExpiresInStorageKey
      );
      const accessTokenExpiresAt = Cookies.get(
        config.accessTokenExpiresAtStorageKey
      );
      if (accessToken) {
        commit("LOGIN", {
          accessToken: accessToken,
          accessTokenExpiresIn: accessTokenExpiresIn,
          accessTokenExpiresAt: accessTokenExpiresAt,
        });
        // fetch authenticated user's profile
        try {
          let response = await $http.get("/auth/user");
          let responsePayload = response.data;
          // console.log(responsePayload);
          commit("SET_USER", responsePayload.data);
          // monitor and refresh token before expiry
          setInterval(function () {
            let nowTs = Vue.moment().unix();
            let expiryTs = Vue.moment(
              Cookies.get(config.accessTokenExpiresAtStorageKey)
            ).unix();
            let tokenLifetimeLeft = expiryTs - nowTs;
            if (
              tokenLifetimeLeft <=
              config.accessTokenExpiryTimeLeftForFrontendAutoRefresh
            ) {
              if (getters.isLoading === false) {
                dispatch("refreshToken").then(() => {
                  //
                });
              }
            }
          }, 5000);
        } catch (error) {
          if (error.status && error.status === 401) {
            commit("LOGOUT");
          }
          if (toRoute.name !== "login") {
            location.replace(toRoute.fullPath);
          }
        }
      } else {
        commit("LOGOUT");
        if (toRoute.name !== "login") {
          location.replace(toRoute.fullPath);
        }
      }
    },

    // Login request
    async loginUser({ commit }, payload) {
      NProgress.start();
      commit("SET_LOADING", true);
      try {
        let res = await $request.post(`/auth/login`, payload);
        Cookies.set("token", res.data.data);
        console.log(res.data);
        let responsePayload = res.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at,
        });
        commit("SET_USER", responsePayload.data.user);
        commit("SET_SUCCESS", responsePayload.message);

        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        return res;
      } catch (error) {
        console.log(error.data);
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              console.log(errorPayload.errors);
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.response;
      } finally {
        NProgress.done();
      }
    },

    // Register request
    async registerUser({ commit }, payload) {
      commit("SET_LOADING");
      try {
        let response = await $request.post("/auth/register", payload);
        let responsePayload = response.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at,
        });
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();
        // commit("SET_USER", responsePayload.data.user);
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

    // signInWithGoogle request
  async signInWithGoogle({ commit }) {
          NProgress.start();
      commit("SET_LOADING", true);

    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

          // Send user data to your login endpoint
        const res = await $request.post('/auth/login', {
          password: user.uid,
          login: user.email,
        });
        Cookies.set("token", res.data.data);
        console.log(res.data);
        let responsePayload = res.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at,
        });
        commit("SET_USER", responsePayload.data.user);
        commit("SET_SUCCESS", responsePayload.message);
        if (responsePayload.status === true ) {
          if (this.$route.query.returnTo) {
            this.$router.replace(this.$route.query.returnTo);
          } else {
            if (responsePayload.data.user.type === "talent") {
              this.$router.replace({
                name: "talent-home",
              });
            } else {
              console.log(responsePayload.data.user);
              let type = responsePayload.data.user.type;
              let company = responsePayload.data.user.company_name;
              let sessionId = window.btoa(user.uid);
              let UserId = window.btoa(user.email);
              window.open(
                `https://croxxtalent-employers-yc63o.ondigitalocean.app/redirecting?userType=${type}&sessionId=${sessionId}&userID=${UserId}&company=${company}`,
                "_blank"
              );
            }
          }
        }else if (responsePayload.status === false) { 
          console.log(responsePayload.message); 
        }      
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();

        return res;

    } catch (error) {
        console.log(error.data);
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              console.log(errorPayload.errors);
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.response;
      } finally {
        NProgress.done();
      }
  },

  // sign Up with google 
      // signInWithGoogle request
  async signUpWithGoogle({ commit }) {
          NProgress.start();
      commit("SET_LOADING", true);

    try {
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
          // Send user data to your login endpoint
      const res = await $request.post('/auth/register', {
        type: "talent",
        first_name: userCredential._tokenResponse.firstName,
        last_name: userCredential._tokenResponse.lastName,
        email: user.email,
        password: user.uid,
      });
        Cookies.set("token", res.data.data);
        console.log(res.data);
        let responsePayload = res.data;
        commit("LOGIN", {
          accessToken: responsePayload.data.access_token,
          accessTokenExpiresIn: responsePayload.data.expires_in,
          accessTokenExpiresAt: responsePayload.data.expires_at,
        });
        commit("SET_USER", responsePayload.data.user);
        commit("SET_SUCCESS", responsePayload.message);
        if (responsePayload.status === true ) {
          this.$router.replace({ name: "cvBuilder" });
        }else if (responsePayload.status === false) { 
          console.log(responsePayload.message); 
        }      
        toastify({
          text: `${responsePayload.message}`,
          className: "info",
          style: {
            background: "green",
            fontSize: "12px",
            borderRadius: "5px",
          },
        }).showToast();

        return res;

    } catch (error) {
        console.log(error.data);
        if (error.data) {
          let errorPayload = error.data;
          if (errorPayload.message) {
            commit("SET_ERROR", errorPayload.message);
            if (errorPayload.errors) {
              console.log(errorPayload.errors);
              commit("SET_VALIDATION_ERRORS", errorPayload.errors);
            }
            return;
          }
        }
        commit("SET_ERROR", "Internal connection error, please try again.");
        return error.response;
      } finally {
        NProgress.done();
      }
  },

    // Logout
    // Logout Request
    async logout({ commit }) {
      commit("RESET");
      localStorage.clear();
      Cookies.set(config.accessTokenStorageKey, {
        path: "/",
        domain: window.location.hostname,
      });
      Cookies.remove("token");
      toastify({
        text: `Logged Out`,
        className: "info",
        style: {
          background: "green",
          fontSize: "12px",
          borderRadius: "5px",
        },
      }).showToast();
      router.push("/login");
    },
  },
};
