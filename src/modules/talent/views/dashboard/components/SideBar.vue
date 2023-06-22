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

    <el-dropdown trigger="click">
      <button
        class="el-dropdown-link primary--button d-flex align-items-center"
        style="gap: 20px"
      >
        <i-icon icon="carbon:settings" /> <span>Settings</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </button>
      <el-dropdown-menu slot="dropdown" class="settings-dropdown">
        <el-dropdown-item>
          <span class="d-flex" style="gap: 5px" @click.prevent="gotoManagers()">
            <span>Manager</span>
            <span class="info-card">3</span>
            <i-icon icon="material-symbols:arrow-forward" />
          </span>
        </el-dropdown-item>

        <el-dropdown-item>
          <span class="d-flex" style="gap: 5px" >
            <span>Professionals</span>
            <span class="info-card">3</span>
            <i-icon icon="material-symbols:arrow-forward" />
          </span>
        </el-dropdown-item>

        <el-dropdown-item>
          <span>Affilate</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
