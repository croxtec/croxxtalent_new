<template>
  <div>
    <hero-section />
    <FeaturedJobs />
    <how-it-works :isEmployer="employer" />
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/employers/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import HowItWorks from "@/components/static/howItWorks.vue";
export default {
  data() {
    return {
      employer: true,
    };
  },
  components: { HeroSection, FeaturedJobs, NewsLetter, HowItWorks },
};
</script>
, NewsLetter
