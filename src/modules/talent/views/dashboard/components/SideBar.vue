<template>
  <div id="side-bar" class="bordered">
    <div class="bordered sidebar-card icon-text">
      <h6>Applied</h6>
      <h1 class="">45</h1>
    </div>

    <div class="bordered sidebar-card icon-user">
      <h6>Saved</h6>
      <h1 class="">45</h1>
    </div>

    <div class="bordered sidebar-card icon-text">
      <h6>CroxxTalent Invitations</h6>
      <h1 class="">45</h1>
    </div>

    <div class="bordered sidebar-card icon-user">
      <h6>In Progress</h6>
      <h1 class="">45</h1>
    </div>

    <el-dropdown trigger="click">
      <button class="el-dropdown-link primary--button d-flex align-items-center" style="gap:20px">
       <i-icon icon="carbon:settings"/>  <span>Settings</span> <i class="el-icon-arrow-down el-icon--right"></i>
      </button>
      <el-dropdown-menu slot="dropdown"  class="settings-dropdown">
        <el-dropdown-item>
          <span>Manager</span>
          <span class="info-card">3</span>
          <i-icon icon="material-symbols:arrow-forward" />
        </el-dropdown-item>

        <el-dropdown-item>
          <span>Manager</span>
          <span class="info-card">3</span>
          <i-icon icon="material-symbols:arrow-forward" />
        </el-dropdown-item>

        <el-dropdown-item>
          <span>Manager</span>
          <span class="info-card">3</span>
          <i-icon icon="material-symbols:arrow-forward" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>