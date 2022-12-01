<template>
  <div id="app">
    <mobile-nav v-if="screenSize" />
    <app-nav v-else />

    <router-view />
    <app-footer />
  </div>
</template>

<style></style>

<script>
import AppFooter from "./components/static/AppFooter.vue";
import AppNav from "./components/static/AppNav.vue";
import MobileNav from "./components/static/mobileNav.vue";
export default {
  components: { AppFooter, AppNav, MobileNav },

  computed: {
    screenSize() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
