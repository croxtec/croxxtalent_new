<template>
  <div class="auth-form-container container-fluid">
    <div class="text-center">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>

    <div class="auth-content">
      <h4 class="text-center">Welcome Back</h4>
      <button
        class="blue-border justify-content-center d-flex align-items-center w-100 my-4"
        style="gap: 10px"
      >
        <span> <img src="@/assets/img/google.png" width="20" alt="" /> </span>
        <span> Login with Google</span>
      </button>
      <el-divider content-position="center">
        <h6>or login with email</h6>
      </el-divider>

      <form action="" @submit.prevent="userLogin">
        <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
        <div class="mb-3">
          <label for="">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            v-model="credentials.login"
          />
          <small class="text-danger" v-for="item in errors.login" :key="item"
            >* {{ item }}</small
          >
        </div>

        <div class="mb-3">
          <label for="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            v-model="credentials.password"
          />
          <small class="text-danger" v-for="item in errors.password" :key="item"
            >* {{ item }}</small
          >
        </div>

        <div class="mb-3 d-flex align-items-center" style="gap: 10px">
          <input type="checkbox" />
          <label for="" id="remember-me">Remember Me</label>
        </div>

        <div class="mb-3">
          <!-- <button class="primary--button w-100">Login</button> -->
          <button
            class="primary--button w-100 py-3"
            style="font-weight: 500"
            :class="{ 'in-active': loading }"
            :disabled="loading"
          >
            <span v-if="loading">
              <i-icon icon="eos-icons:bubble-loading" width="20px" />
            </span>

            <span v-else>Login</span>
          </button>
        </div>

        <div class="mb-2">
          <router-link class="auth-text" to="/forget-password"
            >Forgotten your password?</router-link
          >
        </div>

        <div class="d-flex align-items-center" style="gap: 4px">
          <span class="auth-text">Don’t have an account?</span>
          <router-link class="auth-link" to="/register">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      credentials: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    userLogin() {
      let formData = new FormData();
      formData.append("login", this.credentials.login);
      formData.append("password", this.credentials.password);

      this.loginUser(formData).then(() => {
        if (this.success !== false && this.error === false) {
          // console.log(this.$route.query.returnTo);
          if (this.$route.query.returnTo) {
            this.$router.replace(this.$route.query.returnTo);
          } else {
            if (this.user.type === "talent") {
              this.$router.replace({
                name: "talent-home",
              });
            } else {
              window.location = "https://google.com";
            }
          }
        }
      });
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
    }),
  },
};
</script>
