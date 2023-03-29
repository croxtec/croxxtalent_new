<template>
  <div :class="{'home-page': headerName.isBackground}">
    <TalentNav />
    <div class="container">
      <div class="my-4">
        <h4 class="text-capitalize" style="font-weight: 700">
          {{ headerName.header }}
        </h4>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import TalentNav from "@/components/navigation/talentNav.vue";

import { mapActions } from "vuex";
export default {
  name: "DashboardLayout",
  components: { TalentNav },
  methods: {
    ...mapActions("configurations", [
      "getCountries",
      "getCourses",
      "getJobTitles",
      "getIndustries",
      "getDegrees",
    ]),
  },

  beforeMount() {
    this.getCountries();
    this.getCourses();
    this.getIndustries();
    this.getJobTitles();
    this.getDegrees();
  },
  computed: {
    headerName() {
      return this.$route.meta;
    },
  },
};
</script>
