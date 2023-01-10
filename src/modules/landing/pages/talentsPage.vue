<template>
  <div>
    <hero-section />
    <FeaturedJobs />
    <how-it-works />
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/talents/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import HowItWorks from "@/components/static/howItWorks.vue";
export default {
  components: { HeroSection, FeaturedJobs, NewsLetter, HowItWorks },
};
</script>
, NewsLetter
