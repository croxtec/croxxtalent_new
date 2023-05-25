
import $request from "@/axios";


const getDefaultState = () => {
    return {
        competencies: []
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

    }
}