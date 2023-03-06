<template>
  <div class="contact--us_section">
    <div class="container">
      <div class="contact--us_form">
        <div class="text-center">
          <h5 class="header--text mb-1">Contact Us</h5>
          <p class="small">
            For further questions, including partnership opportunities, please
            email hello@croxxtalent.com or contact using our contact form.
          </p>
        </div>
        <div class="mt-3">
          <form @submit.prevent="submit">
            <div class="mb-3 w-100">
              <label for="">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                v-model="payload.fullname"
              />
            </div>

            <div class="d-lg-flex w-100" style="gap: 20px">
              <div class="mb-3 w-100">
                <label for="">Email</label>
                <input
                  type="email"
                  placeholder="hello@creative-tim.com"
                  v-model="payload.email"
                />
              </div>
              <div class="mb-3 w-100">
                <label for="">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  v-model="payload.phone"
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                v-model="payload.subject"
              />
            </div>

            <div class="mb-4">
              <label for="">How can we help you?</label>
              <textarea
                rows="8"
                v-model="payload.message"
                placeholder="Describe your problem in at least 250 characters"
              ></textarea>
            </div>

            <div class="text-center">
              <button
                class="primary--button py-3"
                style="font-weight: 300"
                :class="{ 'in-active': loading }"
                :disabled="loading"
              >
                <span v-if="loading">
                  <i-icon icon="eos-icons:bubble-loading" width="20px" />
                </span>

                <span v-else>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Alerts  -->
    <success-alert v-if="result === 'success'" @close="close">
      <p>{{ dataSet }}</p>
    </success-alert>
    <error-alert v-if="result === 'error'" @close="close" @retry="retry">
      <p v-for="item in dataSet" :key="item">{{ item }}</p>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "../alerts/errorAlert.vue";
import successAlert from "../alerts/successAlert.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { successAlert, ErrorAlert },
  data: () => {
    return {
      payload: {
        fullname: "",
        email: "",
        message: "",
        subject: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions("home", ["contact", "removeAlerts"]),
    submit() {
      this.contact(this.payload);
    },
    close() {
      this.removeAlerts();
      this.payload = "";
    },
    retry() {
      this.removeAlerts();
      this.contact(this.payload);
    },
  },

  computed: {
    ...mapState("home", {
      loading: (state) => state.loading,
      result: (state) => state.result,
      dataSet: (state) => state.dataSet,
    }),
  },
};
</script>
<style scoped>
@media only screen and (max-width: 430px) {
  .contact--us_form {
    width: 100% !important;
  }
}
</style>
