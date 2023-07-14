import $request from "@/axios";


const getDefaultState = () => {
    return {
                status: {
            success: false
        }

    }
};

const assessmentModule = {
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

        async publishAssesmentsAnswers({ commit }, { id, payload }){
            try {
                let response = await $request.patch(`/assesments/${id}/talent/publish`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
        async submitAssesmentAnswers({ commit }, payload){
            try {
                let response = await $request.post(`/assesments/talent/answer`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
        async markAssessment({ commit }, payload){
            try {
                let response = await $request.post(`/assesments/management/scoresheet`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
        async submitManagerFeedback({ commit },id, payload){
            try {
                let response = await $request.patch(`/assesments/${id}/management/feedback`,payload);
                commit('SUCCESS')
                return Promise.resolve(response.data.data);
              } catch (errors) {
                commit('FAILURE')
                console.log(errors);
              }
        },
    }
}
 
export default assessmentModule;
