<template>
  <div>
    <div class="mb-4 text-center">
      <div>
        {{ user }}
      </div>
      <h6 style="font-weight: 700">Choose an option that best suits you</h6>
      <button
        class="primary--button mt-2 d-flex align-items-center mx-auto"
        style="gap: 10px"
      >
        <img class="linkedin" src="@/assets/icons/linkedin.svg" alt="" />
        <span>Import Linkedin Profile</span>
      </button>
    </div>
    <div class="create-cv">
      <div class="create-new-cv cv-option">
        <div
          class="option-image"
          role="button"
          :class="{ active: activeEl === '1' }"
          @click="chooseSelection('1')"
        >
          <div class="text-right">
            <i-icon
              :icon="
                activeEl === '1'
                  ? 'material-symbols:check-circle-rounded'
                  : 'ic:round-radio-button-unchecked'
              "
              class="cv-icon"
              :class="{ active: activeEl === '1' }"
            />
            <!-- <i-icon icon="material-symbols:check-circle-rounded" /> -->
          </div>
          <img src="@/assets/img/createCv.png" alt="" />
        </div>
        <div class="details">
          <h6>Create a new resume</h6>
          <p>We get to guide you through building an excellent resume</p>
        </div>
      </div>
      <div class="upload-cv cv-option">
        <div
          class="option-image"
          role="button"
          :class="{ active: activeEl === '2' }"
          @click="chooseSelection('2')"
        >
          <div class="text-right">
            <i-icon
              :icon="
                activeEl === 2
                  ? 'material-symbols:check-circle-rounded'
                  : 'ic:round-radio-button-unchecked'
              "
              class="cv-icon"
              :class="{ active: activeEl === '2' }"
            />
          </div>
          <img src="@/assets/img/uploadCv.png" alt="" />
        </div>
        <div class="details">
          <h6>Upload my current resume</h6>
          <p>Taking what you have to give you what you want</p>
        </div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <button class="primary--button" @click="getStarted">Get Started</button>
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
    chooseSelection(value) {
      this.activeEl = value;
    },
    getStarted() {
      this.$router.push(this.activeEl === "1" ? "/create-cv" : "/upload-cv");
    },
  },

  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>
