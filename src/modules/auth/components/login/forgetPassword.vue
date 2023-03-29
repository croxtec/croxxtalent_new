<template>
  <div class="text-center">
    <div class="modal-mask" v-if="errorMessage">
      <div class="modal-content error">
        <img src="@/assets/icons/error.svg" class="modal-icon" alt="" />
        <h5 class="text-center modal-title">Error</h5>
        <div class="modal-body text-center">
          <h5>{{ messageError }}</h5>
        </div>

        <div
          class="mt-2 modal-actions d-flex align-items-center justify-content-center"
          style="gap: 10px"
        >
          <button class="primary--button_border" @click="closeError">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="modal-mask" v-if="success">
      <div class="modal-content success">
        <img src="@/assets/icons/success.svg" class="modal-icon" alt="" />
        <h5 class="text-center modal-title">Success</h5>
        <div class="modal-body text-center">
          <h5>{{ successMessage }}</h5>
        </div>

        <div class="modal-actions mt-2 text-center">
          <button class="primary--button_border" @click="proceed">
            Continue
          </button>
        </div>
      </div>
    </div>
    <div class="text-center py-5">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>
    <h4 class="py-3">RESET PASSWORD</h4>
    <p class="py-5 mt-2">
      Please enter the email address associated <br />with your account
    </p>
    <form @submit.prevent="sendEmail">
      <div class="pb-5">
        <input
          type="email"
          placeholder="Enter email address"
          class="p-3 rounded-pill border-secondary border"
          v-model="resetEmail"
          required
        />
      </div>
      <input type="submit" class="rounded-pill btns btn" value="Proceed" />
    </form>
  </div>
</template>

<script>
import $request from "@/axios";
export default {
  data() {
    return {
      resetEmail: "",
      errorMessage: false,
      messageError: "",
      successMessage: "",
      success: false,
    };
  },
  methods: {
    async sendEmail() {
      localStorage.setItem('email', this.resetEmail)
      try {
        let res = await $request.post(`/auth/forgot-passwword`, {
          email: this.resetEmail,
        });
        if (res.data.status === true) {
          this.successMessage = res.data.message;
          this.success = true;
        }
      } catch (error) {
        this.errorMessage = true;
        this.messageError = error.data.message;
        console.log(error.data.message);
      }
    },
    closeError() {
      this.errorMessage = false;
      this.resetEmail = "";
    },
    proceed() {
      this.$router.push("/password-resetcode");
    },
  },
};
</script>

<style scoped>
input {
  width: 408px;
}
.btns {
  background: #0040a1;
  color: white;
  width: 408px;
  padding: 12px 24px;
}
input::placeholder {
  color: gray;
  opacity: 1 !important;
  font-size: 15px;
}
.btn:hover {
  color: white;
}
</style>
