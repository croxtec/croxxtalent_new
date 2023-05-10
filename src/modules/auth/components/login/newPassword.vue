<template>
  <div class="text-center">
    <div class="text-center py-5">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>
    <div v-if="successAlert === true">
      <div class="text-center py-5">
        <img src="@/assets/img/tick-circle.png" width="250" alt="" />
        <p class="verify py-3">Password Updated!</p>
        <router-link to="login" class="rounded-pill btns btn">
          Go to login
        </router-link>
      </div>
    </div>
    <div v-if="password === true">
      <h4 class="py-3">NEW PASSWORD</h4>
      <p class="py-5 mt-2">Please enter a new password</p>
      <div class="pb-5">
        <input
          type="password"
          v-model="new_password"
          placeholder="Enter a new password"
          class="p-2 rounded-pill border-secondary border"
        />
      </div>
      <button class="rounded-pill btns btn" @click="submitPassword">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import $request from "@/axios";
export default {
  data() {
    return {
      new_password: "",
      password: true,
      successAlert: false,
    };
  },
  methods: {
    async submitPassword() {
      let email = localStorage.getItem("email");
      let password_reset_code = localStorage.getItem("password_reset_code");
      try {
        let res = await $request.post(`/auth/reset-password`, {
          email: email,
          password_reset_code: password_reset_code,
          new_password: this.new_password,
        });
        this.password = false;
        this.successAlert = true;
        localStorage.removeItem('email')
        localStorage.removeItem('password_reset_code')
      } catch (error) {
        console.log(error.data.message);
      }
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
  font-size: 10px;
}
.btn:hover {
  color: white;
}
.verify {
  color: #0040a1;
  font-weight: 500;
}
</style>
