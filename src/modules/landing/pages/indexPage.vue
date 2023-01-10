<template>
  <div>
    <hero-section />
    <featured-jobs />
    <TrustedBy />
    <MeetTalents />
  </div>
</template>

<script>
import heroSection from "../components/home/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import TrustedBy from "../components/home/trustedBy.vue";
import MeetTalents from "../components/home/meetTalents.vue";
export default {
  components: { heroSection, FeaturedJobs, TrustedBy, MeetTalents },
};
</script>
