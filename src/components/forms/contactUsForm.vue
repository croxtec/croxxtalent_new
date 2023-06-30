<template>
    <div class="contact-us-section">
      <div class="container">
        <div class="contact-us-form">
          <div class="text-center">
            <!-- <h5 class="header--text mb-1">Contact Us</h5> -->
            <p class="small" style="font-weight:600">
              For further questions, including partnership opportunities, please
              email hello@croxxtalent.com or contact using our contact form.
            </p>
          </div>
          <div class="mt-3">
            <form @submit.prevent="submit">
              <div class="d-lg-flex w-100" style="gap: 20px">
                <div class="mb-3 w-100">
                <!-- <label for="">Full Name</label> -->
                <input
                  type="text"
                  placeholder="Full Name"
                  v-model="payload.fullname"
                />
              </div>
                <div class="mb-3 w-100">
                  <!-- <label for="">Email</label> -->
                  <input
                    type="email"
                    placeholder="hello@creative-tim.com"
                    v-model="payload.email"
                  />
                </div>
                <!-- <div class="mb-3 w-100">
                  <label for="">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    v-model="payload.phone"
                  />
                </div> -->
              </div>
  
              <!-- <div class="mb-3">
                <label for="">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  v-model="payload.subject"
                />
              </div> -->
  
              <div class="mb-4">
                <!-- <label for="">How can we help you?</label> -->
                <textarea
                  rows="8"
                  v-model="payload.message"
                  placeholder="How can we help you?"
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
  
                  <span v-else>Proceed</span>
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
  .contact-us-section {
    min-height: 500px;
    display: grid;
    display: -ms-inline-grid;
    display: -moz-grid;
    align-items: center ;
    background: url('@/assets/img/hero-g-g.svg') center center no-repeat;
    background-size: 100% 100%;
}

.contact-us-form {
    width: 55%;
    padding: 2rem;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.52);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9.8px);
-webkit-backdrop-filter: blur(9.8px);
border: 1px solid rgba(255, 255, 255, 0.3);
}

.contact--us_form form label {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0;
}

.contact--us_form form input, .contact--us_form form textarea, .contact--us_form form input {
    width: 100%;
    padding: 0.4rem;
    border: 0.13rem solid #D2D6DA;
    border-radius: 5px;
}

.contact--us_form form input::placeholder, .contact--us_form form textarea::placeholder {
    color: #D2D6DA;
    font-size: 0.8rem;
    font-weight: 300;
}

.contact--us_form form textarea {
    outline: none;
}
  @media only screen and (max-width: 990px) {
    .contact-us-form {
      width: 100% !important;
    }
  }
  </style>
  