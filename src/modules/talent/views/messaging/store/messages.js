import $axios from '@/realtimeaxois';
import toastify from 'toastify-js';

const getDefaultState = () => {
  return {
    status: {
      success: false,
      error: false
    },
    messages: [],
    loading: false
  };
};

const messagesModule = {
  namespaced: true,
  state: getDefaultState,
  getters: {
    messages: (state) => state.messages,
    isLoading: (state) => state.loading
  },
  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.status.error = false;
      state.status.success = false;
    },
    SUCCESS(state, data) {
      state.messages = data;
      state.status.success = true;
      state.loading = true;
    },
    SET_ERROR(state) {
      state.status.success = false;
      state.loading = true;
    }
  },
  actions: {
    // List All action

    async getMessages({ commit }) {
      NProgress.start();
      commit('SET_LOADING', true);
      try {
        let response = await $axios.get(`/messages`);
        console.log(response.data);
        commit('SUCCESS', response.data); // Pass the messages data to the mutation
        toastify({
          text: `${response?.data?.message}`,
          className: 'info',
          style: {
            background: 'green',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast();
        return Promise.resolve(response.data);
      } catch (errors) {
        commit('SET_ERROR', errors);
        console.log(errors);
      } finally {
        NProgress.done();
      }
    },

  }
};

export default messagesModule;
