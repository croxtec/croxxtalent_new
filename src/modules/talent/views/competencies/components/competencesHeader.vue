<template>
  <div class="">
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
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeEl: "1",
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
