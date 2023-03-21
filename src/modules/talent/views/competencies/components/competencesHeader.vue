<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="competences-header-container">
        <span
          role="button"
          class="report-header-item"
          :class="{ 'active-item': activeEl === '1' }"
          @click="switchSection('1')"
          >Skills</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '2' }"
          role="button"
          @click="switchSection('2')"
          >Experience</span
        >
        <span
          class="report-header-item"
          :class="{ 'active-item': activeEl === '3' }"
          role="button"
          @click="switchSection('3')"
          >Manager</span
        >
      </div>
      <button
        @click="competencesModal = !competencesModal"
        v-if="activeEl === '1'"
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
      activeEl: "1",
      competencesModal: false,
    };
  },
  methods: {
    switchSection(value) {
      this.activeEl = value;
      this.$emit("switchData", value);
    },
  },
};
</script>

<style></style>
