<template>
  <div>
    <TalentNav />
    <div class="container">
      <div class="my-4">
        <h4 class="" style="font-weight: 700">{{ headerName.header }}</h4>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import TalentNav from "@/components/navigation/talentNav.vue";

export default {
  name: "DashboardLayout",
  components: { TalentNav },
  computed: {
    headerName() {
      return this.$route.meta;
    },
  },
};
</script>
