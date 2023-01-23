<template>
  <div class="login-page auth-container">
    <LoginForm />
    <LoginBanner />
  </div>
</template>

<script>
import LoginBanner from "../components/login/loginBanner.vue";
import LoginForm from "../components/login/loginForm.vue";
export default {
  components: {
    LoginForm,
    LoginBanner,
  },
};
</script>
