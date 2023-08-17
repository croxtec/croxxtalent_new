<script>
import settingsHeader from "../components/settingsHeader.vue";
import profilePage from "./profilePage.vue";

export default {
  components: { settingsHeader, profilePage },
  data: () => {
    return {
      sectionName: "settings",
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
<template>
  <div class="settings-main">
    <settingsHeader>
      <template #view1> <profilePage /> </template>
      <template #view2> </template>
      <template #view3> </template>
    </settingsHeader>
  </div>
</template>
<style scoped></style>
