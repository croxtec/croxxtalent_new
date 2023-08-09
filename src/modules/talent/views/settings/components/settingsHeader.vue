<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="competences-header-container">
        <span
          role="button"
          class="report-header-item"
          @click="activetab = '1'"
          :class="[activetab === '1' ? 'active-item' : '']"
          >Profile</span
        >
        <span
          class="report-header-item"
          @click="activetab = '2'"
          :class="[activetab === '2' ? 'active-item' : '']"
          role="button"
          >Security</span
        >
        <span
          class="report-header-item"
          @click="activetab = '3'"
          :class="[activetab === '3' ? 'active-item' : '']"
          role="button"
          >Notifications</span
        >
      </div>
    </div>
    <div>
      <div v-if="activetab === '1'">
        <slot name="view1"></slot>
      </div>
      <div v-if="activetab === '2'">
        <slot name="view2"></slot>
      </div>
      <div v-if="activetab === '3'">
        <slot name="view3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activetab: "1",
      //   competencesModal: false,
    };
  },
  methods: {
    // switchSection(value) {
    //   this.activetab = value;
    //   this.$emit("switchData", value);
    // },
    // gotoCompetences() {
    //   this.activetab = "competencies";
    //   this.$router.push("/competencies");
    // },
    // gotoExperience() {
    //   this.activetab = "experience";
    //   this.$router.push("/experience");
    // },
  },
};
</script>

<style></style>
