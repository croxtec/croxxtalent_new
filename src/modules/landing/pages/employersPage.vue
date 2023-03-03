<template>
  <div>
    <hero-section />
    <FeaturedJobs />
    <how-it-works :isEmployer="employer" />
    <TopTalents />
    <trusted-by />
    <company-competencies />
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/employers/heroSection.vue";
import HowItWorks from "../components/employers/howItWorks.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import TopTalents from "../components/employers/topTalents.vue";
import TrustedBy from "../components/home/trustedBy.vue";
import CompanyCompetencies from "../components/employers/companyCompetencies.vue";
export default {
  data() {
    return {
      employer: true,
    };
  },
  components: {
    HeroSection,
    FeaturedJobs,
    NewsLetter,
    HowItWorks,
    TopTalents,
    TrustedBy,
    CompanyCompetencies,
  },
};
</script>
, NewsLetter
