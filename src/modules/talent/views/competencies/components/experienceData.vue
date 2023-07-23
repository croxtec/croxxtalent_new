<template>
  
  <div class="pb-4">
    <competences-header />

    <div v-if="loading">
      <span>Retrieving Data</span>
      <i-icon
        icon="eos-icons:three-dots-loading"
        style="color: var(--primary-500)"
        width="60px"
      />
    </div>
    <div v-else>
      <div
        class="d-flex justify-content-center"
        v-if="!experience"
      >
        <img src="@/assets/img/empty.svg" alt="" />
      </div>
      <div v-else>
        <div class="mt-4">
          <div class="skills">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item  v-for="(employee, key) in experience" :key="employee.id"
                :title="employee.employer.display_name +' - '+ employee.job_code.job_title " :name="key">
                <div class="skills-content mt-3">
                  <CompetenciesCard class="col-md-4"  v-for="skill in employee.competence" :key="skill.id" :cxCompetence="skill"/>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import competencesHeader from "../components/competencesHeader.vue";
import CompetenciesCard from '@/components/cards/CompetenciesCard.vue';

export default {
  components: {  competencesHeader, CompetenciesCard },

  data() {
    return {
      activeNames: [0, 1, 2],
      customColor: "#0040A1"
    };
  },

  methods: {
    ...mapActions("competencies", ["getCompetencyExperience"]),

    handleChange(val) {
      console.log(val);
    },
  },

  computed: {
    ...mapState("competencies", {
      experience: (state) => state.experience,
      loading : (state) => state.loading
    })
  },

  mounted(){
    this.getCompetencyExperience()
  }

};
</script>

<style></style>
