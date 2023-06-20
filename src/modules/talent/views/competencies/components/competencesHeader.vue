<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="competences-header-container">
        <span
          role="button"
          class="report-header-item"
          :class="{ 'active-item': $router?.currentRoute.name == 'competencies' }"
          @click="gotoCompetences()"
          >Skills</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': $router?.currentRoute.name == 'Experience' }"
          role="button"
          @click="gotoExperience()"
          >Experience</span
        >
      </div>
      <button
        @click="competencesModal = !competencesModal"
        v-if="$router?.currentRoute.name == 'competencies'" 
        class="primary--button d-flex align-items-center"
        style="
          gap: 10px;
          background-color: var(--dark-color);
          border-color: var(--dark-color);
        "
      >
        <i-icon icon="ic:baseline-plus" />
        <span>Add Competence</span>
      </button>
    </div>

    <!-- Add Competence Modal -->
    <add-competence
      v-if="competencesModal"
      @close="competencesModal = !competencesModal"
    />
  </div>
</template>

<script>
import addCompetence from "./modal/addCompetence.vue";
export default {
  components: { addCompetence },
  data: () => {
    return {
      // activeEl: this.$router?.currentRoute.path ,
      competencesModal: false,
    };
  },
  methods: {
    gotoCompetences(){
      this.$router.push("/competencies");
    },

    gotoExperience(){
      this.$router.push("/experience");
    }
  },

  computed: {
   
  }
  
};
</script>

<style></style>
