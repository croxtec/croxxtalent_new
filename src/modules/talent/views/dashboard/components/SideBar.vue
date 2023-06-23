<template>
  <div id="side-bar" class="bordered">
    <div
      class="bordered sidebar-card linker icon-text"
      @click.prevent="gotoMyJobs"
    >
      <h6>Applied</h6>
      <h1 class="">5</h1>
    </div>

    <div
      class="bordered sidebar-card linker icon-user"
      @click.prevent="gotoMyJobs"
    >
      <h6>Saved</h6>
      <h1 class="">45</h1>
    </div>

    <div
      class="bordered sidebar-card linker icon-text"
      @click.prevent="gotoMyJobs"
    >
      <h6>CroxxTalent Invitations</h6>
      <h1 class="">2</h1>
    </div>

    <div
      class="bordered sidebar-card linker icon-user"
      @click.prevent="gotoMyJobs"
    >
      <h6>In Progress</h6>
      <h1 class="">7</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoMyJobs() {
      return this.$router.push({ name: "my-jobs" });
    },

    gotoManagers() {
      return this.$router.push({ name: "Managers" });
    },
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
