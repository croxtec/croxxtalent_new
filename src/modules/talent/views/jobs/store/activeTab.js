import $request from '@/axios';
import toastify from 'toastify-js';

const getDefaultState = () => {
  return {
    activetab: '1' // Initial activetab value
  };
};

const activeTabModule = {
  namespaced: true,
  state: getDefaultState,
  getters: {
    activetab: (state) => state.activetab // Getter to access activetab value
  },
  mutations: {
    setActiveTab(state, tab) {
      state.activetab = tab;
    }
  },
  actions: {
    // List All action
    updateActiveTab({ commit }, tab) {
      commit('setActiveTab', tab);
    }
  }
};

export default activeTabModule;
