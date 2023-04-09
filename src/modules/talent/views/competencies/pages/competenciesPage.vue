<template>
  <div class="pb-4">
    <competences-header />

    <div class="mt-4">
      <skills-data  />
    </div>
  </div>
</template>

<script>
import competencesHeader from "../components/competencesHeader.vue";

import ManagerData from "../components/managerData.vue";
import SkillsData from "../components/skillsData.vue";

export default {
  components: { competencesHeader, SkillsData, ManagerData },
  data: () => {
    return {
      sectionName: "competencies",
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
