<template>
  <div class="register-options-container">
    <div
      class="mb-4 register-options"
      :class="selected === '1' ? 'active' : ''"
      role="button"
      @click="selectItem('1')"
    >
      <img src="@/assets/icons/talent-avatar.png" alt="" />
      <span>I'm looking for work (Talent)</span>
      <i-icon
        :icon="
          selected === '1'
            ? 'material-symbols:check-circle-rounded'
            : 'mdi:checkbox-blank-circle-outline'
        "
        width="20px"
      />
    </div>

    <div
      class="mb-5 register-options"
      :class="selected === '2' ? 'active' : ''"
      role="button"
      @click="selectItem('2')"
    >
      <img src="@/assets/icons/employer-avatar.png" alt="" />
      <span>I'm hiring (Employer)</span>
      <i-icon
        :icon="
          selected === '2'
            ? 'material-symbols:check-circle-rounded'
            : 'mdi:checkbox-blank-circle-outline'
        "
        width="20px"
      />
    </div>

    <div class="my-5" v-if="selected">
      <button class="primary--button w-100" @click="continueToPage">
        Continue
      </button>
    </div>

    <div class="d-flex align-items-center" style="gap: 4px">
      <span class="auth-text">Already have an account?</span>
      <router-link class="auth-link" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    selectItem(value) {
      this.selected = value;
    },
    continueToPage() {
      this.$router.push(
        this.selected === "1"
          ? "/register/talent-register"
          : "/register/employer-register"
      );
    },
  },
};
</script>
