import axios from '@/message.js';
import toastify from 'toastify-js';

const getDefaultState = () => {
  return {
    status: {
      success: false,
      error: false
    },
    messages: [],
    chats: {},
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
    SET_CHAT(state, data) {
      state.chats = data;
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
      const accessToken = localStorage.getItem('realtimeToken');
      try {
        let res = await axios.get(`/messages`, {
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        });
        console.log(res.data);
        commit('SUCCESS', res.data); // Pass the messages data to the mutation
        toastify({
          text: `${res?.data?.message}`,
          className: 'info',
          style: {
            background: 'green',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast();
        return Promise.resolve(res.data);
      } catch (errors) {
        commit('SET_ERROR', errors);
        console.log(errors);
      } finally {
        NProgress.done();
      }
    },
    async showConversation({ commit }, id) {
      NProgress.start();
      commit('SET_LOADING', true);
      const accessToken = localStorage.getItem('realtimeToken');
      try {
        let res = await axios.get(`/messages/${id}`, {
          headers: {
            Authorization: 'Bearer ' + accessToken
          }
        });
        console.log(res.data);
        commit('SET_CHAT', res.data); // Pass the messages data to the mutation
        toastify({
          text: `${res?.data?.message}`,
          className: 'info',
          style: {
            background: 'green',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast();
        return Promise.resolve(res.data);
      } catch (errors) {
        commit('SET_ERROR', errors);
        console.log(errors);
      } finally {
        NProgress.done();
      }
    }
  }
};

export default messagesModule;
