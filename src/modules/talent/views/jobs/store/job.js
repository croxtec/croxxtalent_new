import $request from "@/axios";
import toastify from "toastify-js";


const getDefaultState = () => {
    return {
        status: {
          success: false,
          error: false
        },
        jobs: [],
        loading: false,


    }
};

const jobsModule = {
    namespaced: true,
    state: getDefaultState,
    getters: {
          jobs: (state) => state.jobs,
          isLoading: state => state.loading,


    },
    mutations: {
        SET_LOADING(state) {
          state.loading = true;
          state.status.error = false;
          state.status.success = false;
        },
        SUCCESS(state, data) {
        state.jobs = data;
        state.status.success = true;
        state.loading = true;

        },
        SET_ERROR(state) {
            state.status.success = false
            state.loading = true;
        }

    },
    actions: {
      // List All action

        async getJobs({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
              try {
                let response = await $request.get(`/jobs`);
                commit('SUCCESS', response.data.data.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('SET_ERROR',errors)
                console.log(errors);
              } finally {
          NProgress.done();
        }
        },
          async getJobsDetails({ commit }, id){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/jobs/${id}`);
                commit('SUCCESS', response.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
       async getJobsRecommendations({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/jobs/recommendations`);
                commit('SUCCESS')
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
       async getTopEmployers({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/top/employers`);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }
        },
       async applyForJobs({ commit },payload){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.post(`/jobs/applied`,payload);
                commit('SUCCESS')
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
        
       async savedJobs({ commit },payload){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.post(`/jobs/saved`,payload);
                commit('SUCCESS')
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
        async getAppliedJobs({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/myjob/applied`);
                commit('SUCCESS', response.data.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
        async getSavedJobs({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/myjob/saved`);
                commit('SUCCESS', response.data.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
        async getJobsInvitations({ commit }){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/job-invitations`);
                commit('SUCCESS', response.data.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },
        async viewJobsInvitations({ commit },id){
                NProgress.start();
                commit("SET_LOADING", true);
            try {
                let response = await $request.get(`/job-invitations/${id}`);
                commit('SUCCESS', response.data.data); // Pass the jobs data to the mutation
                toastify({
                  text: `${response.data.message}`,
                  className: "info",
                  style: {
                    background: "green",
                    fontSize: "12px",
                    borderRadius: "5px",
                  },
                }).showToast();
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('SET_ERROR')
                console.log(errors);
              }finally {
          NProgress.done();
        }
        },

    }
}
 
export default jobsModule;
