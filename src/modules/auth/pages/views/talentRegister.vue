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
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            v-model="credentials.first_name"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            v-model="credentials.last_name"
          />
        </div>
      </div>

      <div class="mb-3">
        <label for="">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          v-model="credentials.email"
        />
      </div>

      <div class="mb-3">
        <label for="">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          v-model="credentials.password"
        />
      </div>

      <div class="mb-3">
        <button class="primary--button w-100">Continue</button>
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
import { mapActions } from "vuex";
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
      // alert("hello world");
      // this.$store.dispatch("auth/register", this.credentials);
      this.registerUser(this.credentials);
    },
  },
};
</script>
