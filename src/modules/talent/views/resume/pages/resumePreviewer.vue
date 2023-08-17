<template>
  <div class="d-flex flex-column justify-content-between h-100">
    <div class="mb-4 text-center">
      <h6 style="font-weight: 700">Choose an option that best suits you</h6>
      <button
        class="primary--button mt-2 d-flex align-items-center mx-auto"
        style="gap: 10px"
      >
        <img class="linkedin" src="@/assets/icons/linkedin.svg" alt="" />
        <span>Import Linkedin Profile</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeEl: "1",
    };
  },
  methods: {
  },

  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    })
  },
};
</script>

<style>
  @media (max-width: 990px) {
    .create-cv {
      flex-direction: column;
  }

  .cv-option {
    width: 100%;
  }
  }
</style>
