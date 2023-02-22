<template>
  <div>
    <AppLayout>
      <router-view />
    </AppLayout>
    <!-- Success and Error Alerts -->
    <!-- <SuccessAlert />
    <ErrorAlert /> -->
  </div>
</template>

<script>
// import ErrorAlert from "./components/alerts/errorAlert.vue";
// import SuccessAlert from "./components/alerts/successAlert.vue";
import AppLayout from "./layouts/AppLayout.vue";
export default {
  components: {
    AppLayout,
    // , SuccessAlert, ErrorAlert
  },
};
</script>

<style></style>
