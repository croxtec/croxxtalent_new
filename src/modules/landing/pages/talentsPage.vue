<template>
  <div>
    <hero-section />
    <how-it-works />
    <FeaturedJobs :numberOfItems="8" />
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/talents/heroSection.vue";
import HowItWorks from "../components/talents/howItWorks.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
export default {
  components: { HeroSection, FeaturedJobs, NewsLetter, HowItWorks },
};
</script>
