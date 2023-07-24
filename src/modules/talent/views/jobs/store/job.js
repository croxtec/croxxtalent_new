import $request from "@/axios";


const getDefaultState = () => {
    return {
                status: {
            success: false
        },
        jobs: []

    }
};

const jobsModule = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
    },
    mutations: {
        SUCCESS(state) {
            state.status.success = true
        },
        FAILURE(state) {
            state.status.success = false
        }

    },
    actions: {

        async getJobs({ commit }){
            try {
                let response = await $request.get(`/jobs`);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
          async getJobsDetails({ commit }, id){
            try {
                let response = await $request.get(`/jobs/${id}`);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
       async getJobsRecommendations({ commit }){
            try {
                let response = await $request.get(`/jobs/recommendations`);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
       async getTopEmployers({ commit }){
            try {
                let response = await $request.get(`/top/employers`);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
       async appliedForJobs({ commit },payload){
            try {
                let response = await $request.post(`/jobs/applied`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
        
       async savedJobs({ commit },payload){
            try {
                let response = await $request.post(`/jobs/saved`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },

    }
}
 
export default jobsModule;
