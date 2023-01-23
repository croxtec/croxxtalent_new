<template>
  <div class="auth-form-container container-fluid">
    <div class="text-center">
      <img src="@/assets/img/logo.png" width="250" alt="" />
    </div>

    <div class="auth-form">
      <h4 class="text-center">Welcome Back</h4>
      <button
        class="bordered-btn d-flex align-items-center w-100 my-5"
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
      </form>
    </div>
  </div>
</template>
