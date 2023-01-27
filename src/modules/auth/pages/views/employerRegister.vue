<template>
  <div class="auth-form">
    <!-- <button
      class="blue-border justify-content-center d-flex align-items-center w-100 my-4"
      style="gap: 10px"
    >
      <span> <img src="@/assets/img/google.png" width="20" alt="" /> </span>
      <span>Signup with Google</span>
    </button>
    <el-divider content-position="center">
      <h6>or signup with email</h6>
    </el-divider> -->

    <form action="">
      <div class="mb-3">
        <label for="">Full Name</label>
        <input type="text" placeholder="Enter Full Name" />
      </div>

      <div class="mb-3">
        <label for="">Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div class="mb-3">
        <label for="">Company Name</label>
        <input type="text" placeholder="Enter Company Name" />
      </div>

      <div class="mb-3">
        <label for="">Password</label>
        <input type="password" placeholder="Enter password" />
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
