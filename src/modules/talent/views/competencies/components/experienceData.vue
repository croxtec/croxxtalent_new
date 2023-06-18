<template>
  
  <div class="pb-4">
    <competences-header />
    <div class="mt-4" v-if="experience">
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
      experience: (state) => state.experience
    })
  },

  mounted(){
    this.getCompetencyExperience()
  }

};
</script>

<style></style>
