<template>
  <div>
    <hero-section />
    <featured-jobs />
    <TrustedBy />
    <MeetTalents />
    <WhyCroxx />
    <DataDriven />
    <news-letter />
  </div>
</template>

<script>
import heroSection from "../components/home/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import TrustedBy from "../components/home/trustedBy.vue";
import MeetTalents from "../components/home/meetTalents.vue";
import WhyCroxx from "../components/home/whyCroxx.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import DataDriven from "../components/home/dataDriven.vue";
export default {
  components: {
    heroSection,
    FeaturedJobs,
    TrustedBy,
    MeetTalents,
    WhyCroxx,
    NewsLetter,
    DataDriven,
  },
};
</script>
