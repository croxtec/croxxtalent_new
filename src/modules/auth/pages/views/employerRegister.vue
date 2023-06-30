<template>
  <div class="auth-form">
    <form action="">
      <div class="d-lg-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Organization Name</label>
          <input type="text" placeholder="Enter name of your organization" />
        </div>

        <div class="mb-3 w-100">
          <label for="">Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>
      </div>

      <div class="d-lg-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Industry</label>
          <select name="" id="">
            <option value="" selected disabled>Type of Company</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>

        <div class="mb-3 w-100">
          <label for="">Core Service</label>
          <input type="text" placeholder="What is your service?" />
        </div>
      </div>

      <div class="d-lg-flex" style="gap: 20px">
        <div class="mb-4 w-100">
          <label for="">Organization Size</label>
          <input type="text" placeholder="Number of staffs" />
        </div>

        <div class="mb-4 w-100">
          <label for="">Guarantor's Number</label>
          <input
            type="text"
            placeholder="Phone number of someone we can reach"
          />
        </div>
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
        if (this.credentials.type === "talent") {
          this.$router.replace({ name: "resume" });
        } else {
          let msg =
            "Thank you for registering with Croxxtalent. An admin will reach you by phone/email before your account is activated.";
          this.$wal.fire("", msg, "info").then(function () {
            // window.location.href = config.appUrl + "/app";
            this.$router.replace({ name: "regards" });
          });
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

<!-- if (this.regSuccess !== false && this.regError === false) {
        let msg =
          "Thank you for registering with Croxxtalent. An admin will reach you by phone/email before your account is activated.";
        this.$toastify.fire("", msg, "info").then(function () {
          window.location.href = config.appUrl + "/app";
          // vm.$router.replace({ name: "regards" });
        });
      } -->
