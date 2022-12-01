<template>
  <div class="navbar-transparent sticky-top bg-white shadow-lg">
    <div class="container py-3">
      <div class="d-flex align-items-center justify-content-between">
        <div class="app-logo">
          <router-link to="/"
            ><img src="@/assets/img/logo.png" width="200" alt=""
          /></router-link>
        </div>
        <ul
          class="m-0 app--nav_items d-flex align-items-center"
          style="gap: 30px"
        >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about-us">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>

        <div
          class="call--to_action d-flex align-items-center"
          style="gap: 20px"
        >
          <el-popover placement="bottom-start" width="200" trigger="hover">
            <div class="p-3">
              <ul class="mb-0 d-flex flex-column" style="gap: 20px">
                <li>
                  <router-link to="/app/login" class="text-dark"
                    >Talent</router-link
                  >
                </li>
                <li>
                  <router-link to="/app/login/employer" class="text-dark"
                    >Employer</router-link
                  >
                </li>
                <li>
                  <router-link to="/app/login/affiliate" class="text-dark"
                    >Affiliate</router-link
                  >
                </li>
              </ul>
            </div>
            <button class="primary--button" slot="reference">Login</button>
            <!-- <el-button>Click to activate</el-button> -->
          </el-popover>
          <router-link to="/register"
            ><button class="primary--button_border">
              Register
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
