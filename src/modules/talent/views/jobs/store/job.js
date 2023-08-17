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
    state: getDefaultState,
    getters: {
          jobs: (state) => state.jobs,

    },
    mutations: {
        SUCCESS(state, jobs) {
        state.jobs = jobs;
        state.status.success = true;
    },
        FAILURE(state) {
            state.status.success = false
        }

    },
    actions: {
      // List All action

        async getJobs({ commit }){
            try {
                let response = await $request.get(`/jobs`);
                commit('SUCCESS', response.data.data.data); // Pass the jobs data to the mutation
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
          async getJobsDetails({ commit }, id){
            try {
                let response = await $request.get(`/jobs/${id}`);
                commit('SUCCESS', response.data); // Pass the jobs data to the mutation
                return Promise.resolve(response.data);
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
       async applyForJobs({ commit },id){
            try {
                let response = await $request.post(`/jobs/applied`,id);
                commit('SUCCESS')
                return Promise.resolve(response.data.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
        
       async savedJobs({ commit },id){
            try {
                let response = await $request.post(`/jobs/saved`,id);
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
