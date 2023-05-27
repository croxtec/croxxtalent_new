
import $request from "@/axios";


const getDefaultState = () => {
    return {
        competencies: [],
        assessment: {},
        summaries: []
    }
};

export default {
    namespaced: true,
    state: getDefaultState(),

    getters: {

    },

    mutations: {
        SET_MANAGER_COMPETENCY(state, payload) {
            state.competencies = payload;
        },

        SET_ASSESSMENT_SUMMARIES(state, payload) {
            state.assessment = payload.assesment;
            state.summaries = payload.summaries;
        },
    },

    actions: {
        async getManagerCompetency({ commit }){
            try {
                // talent/competence/manager
                let response = await $request.get("/assesments");
                // console.log(response.data.data);
                let responsePayload = response.data.data;
                commit("SET_MANAGER_COMPETENCY", responsePayload);
              } catch (error) {
                console.log(error);
              }
        },

        async getAssesmentSummaries({ commit }, code){
            try {
                let response = await $request.get(`/assesments/${code}/assigned/employees`);
                let responsePayload = response.data.data;
                commit("SET_ASSESSMENT_SUMMARIES", responsePayload);
              } catch (error) {
                console.log(error);
              }
        },

    }
}