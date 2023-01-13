<template>
  <div>
    <AboutHeader />
    <OurMission />
    <OurTeam />
    <OurCoreServices />
    <OurValues />
    <news-letter />
  </div>
</template>

<script>
import AboutHeader from "../components/about-us/aboutHeader.vue";
import OurMission from "../components/about-us/ourMission.vue";
import OurTeam from "../components/about-us/ourTeam.vue";
import OurCoreServices from "../components/about-us/ourCoreServices.vue";
import NewsLetter from "@/components/forms/newsLetter.vue";
import OurValues from "../components/about-us/ourValues.vue";

export default {
  components: {
    AboutHeader,
    OurMission,
    OurTeam,
    OurCoreServices,
    NewsLetter,
    OurValues,
  },
};
</script>
