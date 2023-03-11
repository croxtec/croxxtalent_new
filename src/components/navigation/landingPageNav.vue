<template>
  <div class="app-nav sticky-top">
    <div class="navbar-transparent bg-white">
      <div class="container py-4">
        <div class="d-flex align-items-center justify-content-between">
          <div class="app-logo w-100">
            <router-link to="/"
              ><img src="@/assets/img/logo.png" width="40%" alt=""
            /></router-link>
          </div>
          <ul
            class="m-0 app--nav_items d-flex align-items-center w-100 justify-content-end"
            style="gap: 30px"
          >
            <li>
              <router-link to="/employers">For Employers</router-link>
            </li>
            <li>
              <router-link to="/talents">For Talents</router-link>
            </li>
            <li>
              <router-link to="/services">Services</router-link>
            </li>
            <li>
              <router-link to="/about-us">About Us</router-link>
            </li>
            <li>
              <button class="primary--button" @click="buttonClick">
                {{ loggedIn ? "Home" : "Login" }}
              </button>
              <!-- <cx-button @buttonClicked="goToLogin"
                ><slot>Login</slot></cx-button
              > -->
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
    <!-- Drawer  -->
    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      direction="rtl"
      size="92%"
      :withHeader="false"
    >
      <!-- style="max-width: 400px;" -->
      <div
        class="top container-fluid pt-4 pb-2 d-flex align-items-center justify-content-between"
      >
        <img src="@/assets/img/CroxxWhite.svg" alt="" />
        <span role="button" @click="drawer = false">
          <i-icon icon="mingcute:close-circle-line" color="#fff" width="30px" />
        </span>
      </div>

      <hr style="border-top: 1px solid #fff" />

      <div class="container-fluid">
        <ul
          class="m-0 d-flex flex-column justify-content-end mt-5"
          style="gap: 30px"
        >
          <li>
            <router-link to="/employers">For Employers</router-link>
          </li>
          <li>
            <router-link to="/talents">For Talents</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            <router-link to="/about-us">About Us</router-link>
          </li>
          <li>
            <!-- <cx-button @buttonClicked="goToLogin"><slot>Login</slot></cx-button> -->
            <button class="primary--button" @click="buttonClick">
              {{ loggedIn ? "Home" : "Login" }}
            </button>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import config from "@/config";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    buttonClick() {
      this.loggedIn ? this.goToDashboard() : this.goToLogin();
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToDashboard() {
      this.$router.push("/home");
    },
  },
  computed: {
    loggedIn() {
      const accessToken = Cookies.get(config.accessTokenStorageKey);
      return accessToken;
    },
  },
};
</script>
