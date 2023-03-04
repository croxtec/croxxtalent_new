<template>
  <div class="subscribe-to-newsletter">
    <div class="container">
      <div class="subscribe-form">
        <h4 class="mb-3 font-weight-bolder">
          Let’s bring the jobs <br /> to you

        </h4>
        <p class="desc--text w-100">
          We know you're busy. Join our newsletter and we'll send you a <br> fresh batch of new jobs every day.
        </p>
        <div class="subscibe-input">
          <input
            type="text"
            placeholder="Email Address"
            v-model="payload.email"
          />
          <button
            class="primary--button py-3"
            style="font-weight: 300"
            @click="requestNewsletter"
            :class="{ 'in-active': loading }"
            :disabled="loading"
          >
            <span v-if="loading">
              <i-icon icon="eos-icons:bubble-loading" width="20px" />
            </span>

            <span v-else>Subscribe</span>
          </button>
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
import { mapActions, mapState } from "vuex";
import ErrorAlert from "../alerts/errorAlert.vue";
import successAlert from "../alerts/successAlert.vue";
export default {
  components: { successAlert, ErrorAlert },
  data: () => {
    return {
      payload: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("home", ["newsLetter", "removeAlerts"]),
    requestNewsletter() {
      this.newsLetter(this.payload);
    },
    close() {
      this.removeAlerts();
      this.payload = "";
    },
    retry() {
      this.removeAlerts();
      this.newsLetter(this.payload);
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
<style>
@media only screen and (max-width:430px) {
  .subscibe-input {
    width: 100% !important;
  }
}
</style>