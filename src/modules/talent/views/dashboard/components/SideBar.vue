<template>
  <div id="side-bar" class="bordered">
    <div class="bordered sidebar-card linker icon-text" @click.prevent="gotoAppliedJobs">
      <h6>Applied</h6>
      <h1 class="">{{ appliedJobsLength }}</h1>
    </div>

    <div class="bordered sidebar-card linker icon-user" @click.prevent="gotoSavedJobs">
      <h6>Saved</h6>
      <h1 class="">{{ savedJobsLength }}</h1>
    </div>

    <div class="bordered sidebar-card linker icon-text" @click.prevent="gotoJobsInvite">
      <h6>Profile View</h6>
      <h1 class="">{{ jobInvitationsLength }}</h1>
    </div>

    <div class="bordered sidebar-card linker icon-user" @click.prevent="gotoAppliedJobs">
      <h6>In Progress</h6>
      <h1 class="">{{ appliedJobsLength }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appliedJobsLength: 0,
      savedJobsLength: 0,
      jobInvitationsLength: 0,
    };
  },

  methods: {
    gotoAppliedJobs() {
      this.updateActivetab("1"); // Update activetab to '1' (In Applied Jobs) and navigate
    },
    gotoSavedJobs() {
      this.updateActivetab("2"); // Update activetab to '2' (In Saved Jobs) and navigate
    },
    gotoJobsInvite() {
      this.updateActivetab("4"); // Update activetab to '4' (In Croxxtalent Invite) and navigate
    },
    updateActivetab(tab) {
      this.$store.dispatch("activeTabModule/updateActiveTab", tab); // Dispatch action to update activetab in Vuex store
      this.$router.push({ name: "my-jobs" }); // Navigate to the "my-jobs" route
    },

    gotoManagers() {
      return this.$router.push({ name: "Managers" });
    },
    async fetchData() {
      try {
        const appliedJobsResponse = await this.$store.dispatch(
          "jobsModule/getAppliedJobs"
        );
        const savedJobsResponse = await this.$store.dispatch("jobsModule/getSavedJobs");
        const jobInvitationsResponse = await this.$store.dispatch(
          "jobsModule/getJobsInvitations"
        );

        this.appliedJobsLength = appliedJobsResponse.length;
        this.savedJobsLength = savedJobsResponse.length;
        this.jobInvitationsLength = jobInvitationsResponse.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
@media (max-width: 990px) {
  .settings-dropdown {
    width: 80% !important;
  }
}
</style>
