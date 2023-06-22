<template>
  <div>
    <HeroSection />
    
    <div class="py-5">
      <HomeCarousel/>
    </div>
    <MeetTalents />
    <WhyCroxx />
    <TrustedBy />
    <featured-jobs :numberOfItems="4" />
    <!-- <DataDriven /> -->
    <news-letter />
  </div>
</template>

<script>
import HeroSection from "../components/home/heroSection.vue";
import FeaturedJobs from "../components/featuredJobs.vue";
import TrustedBy from "../components/home/trustedBy.vue";
import MeetTalents from "../components/home/meetTalents.vue";
import WhyCroxx from "../components/home/whyCroxx.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import DataDriven from "../components/home/dataDriven.vue";
import HomeCarousel from '../components/home/HomeCarousel.vue';
export default {
  components: {
    HeroSection,
    FeaturedJobs,
    TrustedBy,
    MeetTalents,
    WhyCroxx,
    NewsLetter,
    DataDriven,
    HomeCarousel,
  },
};
</script>
