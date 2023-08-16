<template>
  <div>
    <div v-if="resumePercentage">
      
    </div>
    <div v-else>
      <CreatePreviewer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CreatePreviewer from './createResumePreviewer.vue'

export default {
  components: {  CreatePreviewer },

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

    ...mapState('cvs', {
      resumePercentage: (state) => (state.data.progress >= 80) ? true : false
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
