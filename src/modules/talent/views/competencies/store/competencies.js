
import $request from "@/axios";


const getDefaultState = () => {
    return {
        competencies: [],
        assessment: {},
        skills: [],
        experience: [],
        recommended: {}
    }
};

export default {
    namespaced: true,
    state: getDefaultState(),

    getters: {

    },

    mutations: {

        SET_RECOMMENDED_COMPETENCY(state, payload) {
            state.recommended = payload;
        },

        SET_COMPETENCY_SKILL(state, payload) {
            state.skills = payload;
        },

        SET_COMPETENCY_EXPERIENCEL(state, payload) {
            state.experience = payload;
        },

        SET_ASSESSMENT_SUMMARIES(state, payload) {
            state.assessment = payload.assesment;
            state.summaries = payload.summaries;
        },
    },

    actions: {

      async getRecommendedCompetency({ commit }){
            try {
                let response = await $request.get("/talent/competence");
                console.log(response.data.data);
                let responsePayload = response.data.data;
                commit("SET_RECOMMENDED_COMPETENCY", responsePayload);
              } catch (error) {
                console.log(error);
              }
        },

        async getCompetencySkills({ commit }){
            try {
                let response = await $request.get("/talent/competence/skill");
                console.log(response.data.data);
                let responsePayload = response.data.data;
                commit("SET_COMPETENCY_SKILL", responsePayload);
              } catch (error) {
                console.log(error);
              }
        },

        async getCompetencyExperience({ commit }){
            try {
                let response = await $request.get("/talent/competence/experience");
                console.log(response.data.data);
                let responsePayload = response.data.data;
                commit("SET_COMPETENCY_EXPERIENCEL", responsePayload);
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

        async storeSkill({ commit }, payload){
            try {
                let response = await $request.post(`/assesments/${code}/assigned/employees`);
                let responsePayload = response.data.data;
                commit("SET_ASSESSMENT_SUMMARIES", responsePayload);
              } catch (error) {
                console.log(error);
              }
        }

    }
}