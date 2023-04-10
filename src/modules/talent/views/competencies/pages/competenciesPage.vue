<template>
  <div class="pb-4">
    <competences-header />

    <div class="mt-4">
      <skills-data  />
    </div>
  </div>
</template>

<script>
// import ManagerData from "../components/managerData.vue";
import competencesHeader from "../components/competencesHeader.vue";
import SkillsData from "../components/skillsData.vue";

export default {
  components: { competencesHeader, SkillsData },
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
