<template>
  <div class="">
    <div class="form-steps">
      <div class="step-items" v-for="(item, index) in steps" :key="index">
        <!-- <div class="step-icons"></div> -->
        <span class="step-level text-uppercase">{{ "step " + item.id }}</span>
        <span class="step-title">{{ item.name }}</span>
        <span
          class="step-status"
          :class="stepNum + 1 > item.id ? 'completed' : 'pending'"
          >{{ stepNum + 1 > item.id ? "Completed" : "Pending" }}</span
        >
      </div>
    </div>
    
    <div class="form-data mt-4">
      <div class="form-content p-4" >
        <CreateCVTitle v-if="stepNum === 1" />
        <ContactInfo v-if="stepNum === 2" />
        <WorkHistory v-if="stepNum === 3" />
        <CreateCVEducation v-if="stepNum === 4" />
        <CreateCVSkills v-if="stepNum === 5" />
        <ProfessionalSummary v-if="stepNum === 6" />
      </div>
      <div class="cv-preview">
        <CvPreview />
      </div>
    </div>

    <div class="step-buttons my-4">
      <button class="primary--button_border" @click="prev">Prev Step</button>
      <button class="primary--button" @click="next">Next Step</button>
    </div>
  </div>
</template>

<script>
import cvBuilderSteps from "@/api/cvBuilderSteps";
import ContactInfo from "../components/cv/cv-buider/contactInfo.vue";
import CreateCVEducation from "../components/cv/cv-buider/createCVEducation.vue";
import CreateCVSkills from "../components/cv/cv-buider/createCVSkills.vue";
import CreateCVTitle from "../components/cv/cv-buider/createCVTitle.vue";
import WorkHistory from "../components/cv/cv-buider/workHistory.vue";
import ProfessionalSummary from "../components/cv/cv-buider/professionalSummary.vue";
import CvPreview from "../components/cv/cv-templates/cvPreviewer.vue";

import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ContactInfo,
    CreateCVEducation,
    CreateCVSkills,
    CreateCVTitle,
    ProfessionalSummary,
    WorkHistory,
    CvPreview,
  },

  data: () => {
    return {
      steps: cvBuilderSteps,
      stepNum: 1,
    };
  },

  methods: {
    // ...mapActions("manager", ["getAssesmentSummaries"]),

    prev() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },

    next() {
      if (this.stepNum < this.steps.length) {
        this.stepNum++;
      }
    },

    loadResume() {
      this.$store.dispatch("cvs/list", {}).then(() => {
        // this.recordsLoading = false;
      });
    }, 
  },

  beforeMount(){
    this.loadResume();
  }
};
</script>
