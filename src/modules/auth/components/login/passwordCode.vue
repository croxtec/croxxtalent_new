<template>
  <div class="text-center">
    <div class="text-center py-5">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>
    <div v-if="successAlert === true">
      <div class="text-center py-5">
        <img src="@/assets/img/tick-circle.png" width="250" alt="" />
        <p class="verify">Verified</p>
      </div>
    </div>
    <div v-if="auth === true">
      <h4 class="py-3">RESET PASSWORD</h4>
      <p class="py-5 mt-2">Please enter the code sent to your email</p>
      <div class="pb-5">
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(1)"
        />
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(2)"
        />
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(3)"
        />
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(4)"
        />
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(5)"
        />
        <input
          type="number"
          class="p-3 mr-2 rounded border-secondary border"
          maxlength="1"
          @keyup="tabChange(6)"
        />
      </div>
      <button class="rounded-pill btns btn" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: true,
      successAlert: false,
    };
  },
  methods: {
    submit() {
      this.auth = false;
      this.successAlert = true;
      setTimeout(() => {
        this.$router.push({ name: "new-password" });
      }, 3000);
    },
    tabChange(val) {
      let ele = document.querySelectorAll("input");
      if (ele[val - 1].value != "") {
        ele[val].focus();
      } else if (ele[val - 1].value == "") {
        ele[val - 2].focus();
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 50px;
  font-size: 30px;
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
}
.btn:hover {
  color: white;
}
input[type="number"]:focus {
  outline: 2px solid #0040a1;
}
input[type="text"] {
  background-color: rgba(128, 128, 128, 0.147);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.verify {
  color: #0040a1;
  font-weight: 500;
}
</style>
