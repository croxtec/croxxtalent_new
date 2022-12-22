<template>
  <div>
    <hero-section />
    <featured-jobs />
    <TrustedBy />
  </div>
</template>

<script>
import heroSection from "../components/home/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import TrustedBy from "../components/home/trustedBy.vue";
export default {
  components: { heroSection, FeaturedJobs, TrustedBy },
};
</script>
