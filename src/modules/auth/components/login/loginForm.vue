<template>
  <div class="auth-form-container container-fluid">
    <div class="text-center">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>

    <div class="auth-form">
      <h4 class="text-center">Welcome Back</h4>
      <button
        class="blue-border justify-content-center d-flex align-items-center w-100 my-4"
        style="gap: 10px"
      >
        <span> <img src="@/assets/img/google.png" width="20" alt="" /> </span>
        <span> Login with Google</span>
      </button>
      <el-divider content-position="center">
        <h6>or login with email</h6>
      </el-divider>

      <form action="">
        <div class="mb-3">
          <label for="">Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div class="mb-3">
          <label for="">Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <div class="mb-3 d-flex align-items-center" style="gap: 10px">
          <input type="checkbox" />
          <label for="" id="remember-me">Remember Me</label>
        </div>

        <div class="mb-3">
          <button class="primary--button w-100">Login</button>
        </div>

        <div class="mb-2">
          <router-link class="auth-text" to="/forgot-password"
            >Forgotten your password?</router-link
          >
        </div>

        <div class="d-flex align-items-center" style="gap: 4px">
          <span class="auth-text">Don’t have an account?</span>
          <router-link class="auth-link" to="/register">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
