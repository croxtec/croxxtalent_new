<template>
  <div>
    <div class="talent-nav">
      <div class="container">
        <div
          class="d-flex justify-content-between align-items-center py-3"
          style="gap: 25px"
        >
          <img src="@/assets/img/logo.png" width="175" alt="" />

          <ul class="mb-0 w-100 talent-nav_items">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link
                to="/resume"
                :class="{
                  'router-link-exact-active': this.$route.meta.parent === 'resume',
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
                  'router-link-exact-active': this.$route.meta.parent === 'competencies',
                }"
                >Competencies</router-link
              >
            </li>
            <li>
              <router-link
                to="/jobs"
                :class="{
                  'router-link-exact-active': this.$route.meta.parent === 'jobs',
                }"
                >Jobs</router-link
              >
            </li>
            <li class="" disabeled>
              <router-link
                to="/training"
                :class="{
                  'router-link-exact-active': this.$route.meta.parent === 'training',
                }"
                >Trainings
                <sup class="coming-soon">soon</sup>
              </router-link>
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
                  <sup class="coming-soon">soon</sup>
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
                  <sup class="coming-soon">soon</sup>
                </router-link>
              </div>
            </li>

            <li>
              <!-- <div class="user-avatar">
                <router-link to="/profile">
                  
                </router-link>
              </div> -->
              <el-dropdown trigger="click">
                <div class="el-dropdown-link d-flex align-items-center" style="gap: 1px">
                  <!-- <i-icon icon="carbon:settings" /> <span>Settings</span> -->
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
                    alt=""
                    style="border-radius: 50%"
                    width="35px"
                  />
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown" class="settings-dropdown">
                  <el-dropdown-item>
                    <router-link
                      to="/profile"
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                    >
                      <span>Profile</span>
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </router-link>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <router-link
                      to="/settings"
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                    >
                      <span
                        >Settings
                        <sup class="coming-soon" style="position: relative">soon</sup>
                      </span>
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </router-link>
                  </el-dropdown-item>

                  <el-divider class="my-0"></el-divider>

                  <el-dropdown-item>
                    <span
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                      @click.prevent="gotoManagers()"
                    >
                      <span>Manager</span>
                      <!-- <span class="info-card">3</span> -->
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </span>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <span class="d-flex justify-content-between w-100" style="gap: 5px">
                      <span
                        >Professionals
                        <sup class="coming-soon" style="position: relative">soon</sup>
                      </span>
                      <!-- <span class="info-card">3</span> -->
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </span>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <router-link to="/affiliate">
                      <span class="d-flex justify-content-between w-100" style="gap: 5px">
                        <span
                          >Affiliate
                          <sup class="coming-soon" style="position: relative">soon</sup>
                        </span>
                        <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                      </span>
                    </router-link>
                  </el-dropdown-item>

                  <el-divider class="my-0"></el-divider>

                  <el-dropdown-item>
                    <router-link to="/logout">
                      <span class="d-flex justify-content-between w-100" style="gap: 5px">
                        <span>Logout</span>
                        <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                      </span>
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>

          <div class="mobile-menu">
            <div class="d-flex align-items-center" style="gap: 20px">
              <router-link to="/">
                <i-icon icon="ri:search-line" class="mobile-menu-icon" />
                <sup class="coming-soon">soon</sup>
              </router-link>
              <router-link to="/">
                <i-icon icon="tabler:message-2" class="mobile-menu-icon" />
                <sup class="coming-soon">soon</sup>
              </router-link>

              <el-dropdown trigger="click">
                <div class="el-dropdown-link d-flex align-items-center" style="gap: 1px">
                  <!-- <i-icon icon="carbon:settings" /> <span>Settings</span> -->
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
                    alt=""
                    style="border-radius: 50%"
                    width="40px"
                  />
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                </div>
                <el-dropdown-menu slot="dropdown" class="settings-dropdown">
                  <el-dropdown-item>
                    <router-link
                      to="/profile"
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                    >
                      <span>Profile</span>
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </router-link>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <router-link
                      to="/settings"
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                    >
                      <span
                        >Settings
                        <sup class="coming-soon" style="position: relative">soon</sup>
                      </span>
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </router-link>
                  </el-dropdown-item>

                  <el-divider class="my-0"></el-divider>

                  <el-dropdown-item>
                    <span
                      class="d-flex justify-content-between w-100"
                      style="gap: 5px"
                      @click.prevent="gotoManagers()"
                    >
                      <span>Manager</span>
                      <!-- <span class="info-card">3</span> -->
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </span>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <span class="d-flex justify-content-between w-100" style="gap: 5px">
                      <span
                        >Professionals
                        <sup class="coming-soon" style="position: relative">soon</sup>
                      </span>
                      <!-- <span class="info-card">3</span> -->
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </span>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <span class="d-flex justify-content-between w-100" style="gap: 5px">
                      <span
                        >Affiliate
                        <sup class="coming-soon" style="position: relative">soon</sup>
                      </span>
                      <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                    </span>
                  </el-dropdown-item>

                  <el-divider class="my-0"></el-divider>

                  <el-dropdown-item>
                    <router-link to="/logout">
                      <span class="d-flex justify-content-between w-100" style="gap: 5px">
                        <span>Logout</span>
                        <!-- <i-icon icon="material-symbols:arrow-forward" /> -->
                      </span>
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Drawer -->
    <el-drawer :visible.sync="drawer" direction="rtl" size="90%" :withHeader="false">
      <div
        class="top container-fluid pt-4 pb-2 d-flex align-items-center justify-content-between"
      >
        <img src="@/assets/img/CroxxWhite.svg" width="40%" alt="" />
        <span role="button" @click="drawer = false">
          <!-- <i-icon icon="mingcute:close-circle-line" color="#fff" width="30px" /> -->
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
                'router-link-exact-active': this.$route.meta.parent === 'resume',
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
                'router-link-exact-active': this.$route.meta.parent === 'competencies',
              }"
              >Competencies</router-link
            >
          </li>

          <li>
            <router-link
              to="/jobs"
              :class="{
                'router-link-exact-active': this.$route.meta.parent === 'jobs',
              }"
              >Jobs</router-link
            >
          </li>

          <li>
            <router-link
              to="/training"
              :class="{
                'router-link-exact-active': this.$route.meta.parent === 'training',
              }"
              >Trainings
              <sup class="coming-soon" style="position: relative">soon</sup>
            </router-link>
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

  methods: {
    logout() {
      alert("Hello");
      // return this.$router.push('/logout')
    },

    gotoMyJobs() {
      return this.$router.push({ name: "my-jobs" });
    },

    gotoManagers() {
      return this.$router.push({ name: "Managers" });
    },
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
  gap: 10px;
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

.mobile-menu a .mobile-menu-icon {
  font-size: 25px;
  color: var(--primary-color);
}

@media (max-width: 990px) {
  .mobile-menu {
    display: block;
  }
}
</style>
