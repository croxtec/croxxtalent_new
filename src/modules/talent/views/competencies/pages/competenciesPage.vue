<template>
  <div class="pb-4">
    <competences-header @switchData="switchData" />

    <div class="mt-4">
      <skills-data v-if="sectionName === '1'" />
      <experience-data v-if="sectionName === '2'" />
      <manager-data v-if="sectionName === '3'" />
    </div>
  </div>
</template>

<script>
import competencesHeader from "../components/competencesHeader.vue";
import ExperienceData from "../components/experienceData.vue";
import ManagerData from "../components/managerData.vue";
import SkillsData from "../components/skillsData.vue";

export default {
  components: { competencesHeader, SkillsData, ExperienceData, ManagerData },
  data: () => {
    return {
      sectionName: "1",
    };
  },

  methods: {
    switchData(value) {
      this.sectionName = value;
    },

  },
};
</script>

<style></style>
