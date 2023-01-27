<template>
  <div class="register-page auth-container">
    <div class="auth-content">
      <RegisterNav />
      <router-view />
    </div>
    <RegisterBanner />
  </div>
</template>

<script>
import RegisterBanner from "../components/register/registerBanner.vue";
import RegisterNav from "../components/register/registerNav.vue";

export default {
  data() {
    return {};
  },
  components: { RegisterBanner, RegisterNav },
};
</script>
