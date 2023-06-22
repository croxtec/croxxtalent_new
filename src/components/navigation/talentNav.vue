<template>
  <div>
    <div class="talent-nav">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center py-3" style="gap:50px">
          <img src="@/assets/img/logo.png" width="20%" alt=""
        />

          <ul class="mb-0 w-100 talent-nav_items">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link
                to="/resume"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'resume',
                }"
                >Resume</router-link
              >
            </li>
            <!-- <li>
          <router-link
            to="/competencies"
            :class="{
              'router-link-exact-active':
                this.$route.meta.parent === 'competencies',
            }"
            >Competencies</router-link
          >
        </li> -->
            <li>
              <router-link
                to="/competencies"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'competencies',
                }"
                >Competencies</router-link
              >
            </li>
            <li>
              <router-link
                to="/jobs"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'jobs',
                }"
                >Jobs</router-link
              >
            </li>
            <li>
              <router-link
                to="/training"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'training',
                }"
                >Training</router-link
              >
            </li>
            <li>
              <div class="search">
                <i-icon icon="ri:search-2-line" class="nav-icon" />
                <input type="search" placeholder="Search" />
              </div>
            </li>
            <li>
              <div class="menu-icon-container">
                <router-link to="/messages">
                  <i-icon icon="tabler:message-2" class="menu-icon" />
                </router-link>
              </div>
            </li>

            <li>
              <div class="menu-icon-container">
                <router-link
                  to="/notifications"
                  :class="{
                    'router-link-border-active':
                      this.$route.meta.parent === 'notifications',
                  }"
                >
                  <i-icon icon="nimbus:notification" class="menu-icon" />
                </router-link>
              </div>
            </li>

            <li>
              <div class="user-avatar">
                <router-link to="/profile">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
                    alt=""
                  />
                </router-link>
              </div>
            </li>
          </ul>

          <div class="mobile-menu">
            <span role="button" @click="drawer = true">
              <i-icon icon="material-symbols:menu-sharp" width="30px" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Drawer -->
    <el-drawer
      :visible.sync="drawer"
      direction="rtl"
      size="90%"
      :withHeader="false"
    >
      <div
        class="top container-fluid pt-4 pb-2 d-flex align-items-center justify-content-between"
      >
        <img src="@/assets/img/CroxxWhite.svg" width="40%" alt="" />
        <span role="button" @click="drawer = false">
          <i-icon icon="mingcute:close-circle-line" color="#fff" width="30px" />
        </span>
      </div>

      <hr style="border-top: 1px solid #fff" />

      <div class="container mobile-talent-nav">
        <ul class="mb-0">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link
                to="/resume"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'resume',
                }"
                >Resume</router-link
              >
            </li>
            <!-- <li>
          <router-link
            to="/competencies"
            :class="{
              'router-link-exact-active':
                this.$route.meta.parent === 'competencies',
            }"
            >Competencies</router-link
          >
        </li> -->
            <li>
              <router-link
                to="/competencies"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'competencies',
                }"
                >Competencies</router-link
              >
            </li>
            <li>
              <router-link
                to="/jobs"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'jobs',
                }"
                >Jobs</router-link
              >
            </li>
            <li>
              <router-link
                to="/training"
                :class="{
                  'router-link-exact-active':
                    this.$route.meta.parent === 'training',
                }"
                >Training</router-link
              >
            </li>
            <!-- <li>
              <div class="search">
                <i-icon icon="ri:search-2-line" class="nav-icon" />
                <input type="search" placeholder="Search" />
              </div>
            </li> -->
            <!-- <li>
              <div class="menu-icon-container">
                <router-link to="/messages">
                  <i-icon icon="tabler:message-2" class="menu-icon" />
                </router-link>
              </div>
            </li> -->

            <!-- <li>
              <div class="menu-icon-container">
                <router-link
                  to="/notifications"
                  :class="{
                    'router-link-border-active':
                      this.$route.meta.parent === 'notifications',
                  }"
                >
                  <i-icon icon="nimbus:notification" class="menu-icon" />
                </router-link>
              </div>
            </li> -->

            <!-- <li>
              <div class="user-avatar">
                <router-link to="/profile">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
                    alt=""
                  />
                </router-link>
              </div>
            </li> -->
          </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
    };
  },

  // computed: {

  // }
};
</script>

<style>

.mobile-menu {
  display: none;
}
.search {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
}

.mobile-talent-nav ul {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap:10px
}

.mobile-talent-nav ul li a {
  display: block;
  padding: 10px;
}

.mobile-talent-nav ul li a.router-link-exact-active {
  background: var(--blue-100);
  color: #000 !important;
  border-radius: 10px;
}

@media (max-width:990px) {
  .mobile-menu {
    display: block;
  }
}
</style>