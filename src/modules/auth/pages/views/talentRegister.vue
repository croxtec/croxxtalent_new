<template>
  <div class="auth-form">
    <button
      class="blue-border justify-content-center d-flex align-items-center w-100 my-4"
      style="gap: 10px"
    >
      <span> <img src="@/assets/img/google.png" width="20" alt="" /> </span>
      <span>Signup with Google</span>
    </button>
    <el-divider content-position="center">
      <h6>or signup with email</h6>
    </el-divider>

    <form action="" @submit.prevent="registerTalent()">
      <span v-if="regError" class="mb-3 error-alert">{{ regError }}</span>
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            v-model="credentials.first_name"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.first_name"
            :key="item"
            >* {{ item }}</small
          >
        </div>
        <div class="mb-3 w-100">
          <label for="">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            v-model="credentials.last_name"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.last_name"
            :key="item"
            >* {{ item }}</small
          >
        </div>
      </div>

      <div class="mb-3">
        <label for="">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          v-model="credentials.email"
        />
        <small
          class="text-danger"
          v-for="item in validationErrors.email"
          :key="item"
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
        <small
          class="text-danger"
          v-for="item in validationErrors.password"
          :key="item"
          >* {{ item }}</small
        >
      </div>

      <div class="mb-3">
        <button
          class="primary--button w-100 py-3"
          style="font-weight: 500"
          :class="{ 'in-active': loading }"
          :disabled="loading"
        >
          <span v-if="loading">
            <i-icon icon="eos-icons:bubble-loading" width="20px" />
          </span>

          <span v-else>Continue</span>
        </button>
      </div>

      <div class="d-flex align-items-center mb-3" style="gap: 4px">
        <span class="auth-text">Already have an account?</span>
        <router-link class="auth-link" to="/login">Login</router-link>
      </div>

      <div>
        <span class="continue-text">
          By clicking 'Continue', you acknowledge that you have read and accept
          the
          <router-link class="auth-link" to="/privacy-policy"
            >Terms of Service</router-link
          >
          and
          <router-link class="auth-link" to="/privacy-policy"
            >Privacy Policy</router-link
          >.
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      credentials: {
        type: "talent",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["registerUser"]),
    registerTalent() {
      // this.$store.dispatch("auth/registerUser", this.credentials);
      this.registerUser(this.credentials);

      if (this.regSuccess !== false && this.regError === false) {
        if (this.credentials.type == "talent") {
          this.$router.replace({ name: "cvBuilder" });
        }
      }
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      regError: (state) => state.regError,
      regSuccess: (state) => state.regSuccess,
      validationErrors: (state) => state.validationErrors,
    }),
  },
};
</script>
