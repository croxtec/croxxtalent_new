<template>
  <div class="talent-nav">
    <div class="container">
      <ul class="mb-0">
        <li>
          <router-link to="/">
            <img src="@/assets/img/logo.png" width="180px" alt="" />
          </router-link>
        </li>
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
              'router-link-exact-active': this.$route.meta.parent === 'jobs',
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
            <router-link  to="/messages" >
              <i-icon icon="tabler:message-2" class="menu-icon" />
            </router-link>
          </div>
        </li>

        <li>
          <div class="menu-icon-container">
            <router-link
            to="/notifications"
            :class="{ 'router-link-border-active':
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
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },

  // computed: {

  // }
};
</script>
