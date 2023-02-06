<template>
  <div>
    <TalentNav />
    <slot />
  </div>
</template>

<script>
import TalentNav from "@/components/navigation/talentNav.vue";

export default {
  name: "DashboardLayout",
  components: { TalentNav },
};
</script>
