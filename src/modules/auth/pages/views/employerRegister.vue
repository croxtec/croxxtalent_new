<template>
  <div class="auth-form">
    <!-- <form action="" @submit.prevent="register"> -->
    <fieldset v-if="slide === 1">
      <div class="d-lg-flex" style="gap: 25px">
        <div class="mb-3 w-100">
          <label for="">First Name</label>
          <input
            type="text"
            v-model="credentials.first_name"
            placeholder="Enter First Name"
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
            v-model="credentials.last_name"
            placeholder="Enter Last Name"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.last_name"
            :key="item"
            >* {{ item }}</small
          >
        </div>
      </div>
      <div class="d-lg-flex" style="gap: 25px">
        <div class="mb-3 w-100">
          <label for="">Email Address</label>
          <input
            type="email"
            v-model="credentials.email"
            placeholder="Company email address"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.email"
            :key="item"
            >* {{ item }}</small
          >
        </div>

        <div class="mb-3 w-100">
          <label for="">Phone Number</label>
          <input
            type="tel"
            v-model="credentials.phone"
            placeholder="Phone number of someone we can reach"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.phone"
            :key="item"
            >* {{ item }}</small
          >
        </div>
      </div>
    </fieldset>

    <fieldset v-if="slide === 2">
      <div class="mb-3 w-100">
        <label for="">Organization Name</label>
        <input
          type="text"
          v-model="credentials.company_name"
          placeholder="Enter name of your organization"
        />
        <small
          class="text-danger"
          v-for="item in validationErrors.company_name"
          :key="item"
          >* {{ item }}</small
        >
      </div>
      <div class="d-lg-flex" style="gap: 25px">
        <div class="mb-3 w-100">
          <label for="">Industry</label>
          <select name="" v-model="credentials.industry_id" id="">
            <option value="" selected disabled>Select Industry</option>
            <option
              v-for="(item, index) in industries"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <small
            class="text-danger"
            v-for="item in validationErrors.industry_id"
            :key="item"
            >* {{ item }}</small
          >
        </div>

        <div class="mb-3 w-100">
          <label for="">Core Service</label>
          <input
            type="text"
            v-model="credentials.services"
            placeholder="What is your core service?"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.services"
            :key="item"
            >* {{ item }}</small
          >
        </div>
      </div>

      <div class="d-lg-flex" style="gap: 25px">
        <div class="mb-4 w-100">
          <label for="">Organization Size</label>
          <select name="" v-model="credentials.company_size" id="">
            <option value="" selected disabled>Select Number of Staffs</option>
            <option v-for="(item, index) in ranges" :key="index" :value="item">
              {{ item }}
            </option>
          </select>
          <small
            class="text-danger"
            v-for="item in validationErrors.company_size"
            :key="item"
            >* {{ item }}</small
          >
        </div>

        <div class="mb-4 w-100">
          <label for="">Password</label>
          <input
            type="password"
            v-model="credentials.password"
            placeholder="Password"
          />
          <small
            class="text-danger"
            v-for="item in validationErrors.password"
            :key="item"
            >* {{ item }}</small
          >
        </div>
      </div>
    </fieldset>

    <div class="d-lg-flex" style="gap: 30px">
      <div class="mb-3 mt-3 w-100">
        <button
          @click="goBack"
          class="secondary-btn w-100 py-3"
          style="font-weight: 500"
        >
          Previous
        </button>
      </div>
      <div class="mb-3 mt-3 w-100">
        <button
          class="primary--button w-100 py-3"
          style="font-weight: 500"
          :class="{ 'in-active': loading, 'secondary-btn': slide === 1 }"
          :disabled="loading"
          @click="register"
        >
          <span v-if="loading">
            <i-icon icon="eos-icons:bubble-loading" width="25px" />
          </span>
          <span v-else> {{ slide === 1 ? "Next" : "Submit" }} </span>
        </button>
      </div>
    </div>
    <!-- </form> -->

    <div class="d-flex align-items-center mb-3" style="gap: 4px">
      <span class="auth-text">Already have an account?</span>
      <router-link class="auth-link" to="/login">Login</router-link>
    </div>

    <div>
      <span class="continue-text small">
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

    <employer-register-success v-if="successModal">
      <h5>{{ msg }}</h5>
    </employer-register-success>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EmployerRegisterSuccess from "../../components/register/EmployerRegisterSuccess.vue";
export default {
  components: {
    EmployerRegisterSuccess,
  },
  data: () => {
    return {
      slide: 1,
      credentials: {
        type: "employer",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        company_name: "",
        company_size: "",
        industry_id: "",
        phone: "",
        services: "",
      },
      ranges: [
        "1 - 20",
        "20 - 50",
        "51 - 100",
        "100 - 250",
        "251 - 500",
        "501 - 1000",
        "> 1000",
      ],
      msg: "",
      successModal: false,
    };
  },

  methods: {
    ...mapActions("auth", ["registerUser"]),
    ...mapActions("config", ["getIndustries"]),

    register() {
      this.slide === 1 ? this.goToNext() : this.registerEmployer();
    },

    goBack() {
      console.log("Prev Page");
      if (this.slide === 2) {
        console.log(this.slide);
        this.slide--;
      }
    },

    goToNext() {
      console.log("Next Page");
      if (this.slide === 1) {
        console.log(this.slide);
        this.slide++;
      }
    },

    registerEmployer() {
      this.registerUser(this.credentials).then(() => {
        if (this.regSuccess !== false && this.regError === false) {
          this.successModal = true;
          this.msg =
            "Thank you for registering with Croxxtalent. An admin will reach you by phone/email before your account is activated.";
          console.log(this.msg);
        }
      });
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
    this.getIndustries();
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      regError: (state) => state.regError,
      regSuccess: (state) => state.regSuccess,
      validationErrors: (state) => state.validationErrors,
    }),

    ...mapState("config", {
      industries: (state) => state.industries,
    }),
  },
};
</script>

<style>
.auth-form form label {
  font-size: 13px;
  color: var(--gray-500);
  font-size: 600;
}

.auth-form form input {
  font-size: 14px;
}

.auth-form form input::placeholder {
  font-size: 12.7px;
}
</style>
