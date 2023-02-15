<template>
  <div class="text-center">
    <div class="text-center py-5">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>
    <h4 class="py-3">RESET PASSWORD</h4>
    <p class="py-5 mt-2">
      Please enter the email address associated <br />with your account
    </p>
    <div class="pb-5">
      <input
        type="text"
        placeholder="Enter email address"
        class="p-3 rounded-pill border-secondary border"
      />
    </div>
    <router-link to="password-resetcode" class="rounded-pill btns btn">
      Proceed
    </router-link>
  </div>
</template>

<script>
export default {};
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
</style>
