<script>
import settingsHeader from "../components/settingsHeader.vue";
import profilePage from "./profilePage.vue";
import Notifications from "../../notifications/pages/Notifications.vue";

export default {
  components: { settingsHeader, profilePage, Notifications },
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
      <template #view3> <Notifications /></template>
    </settingsHeader>
  </div>
</template>
<style scoped></style>
