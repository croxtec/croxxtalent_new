<template>
  <div>
    <ContactPageHeroSection />
    <contact-form />
    <news-letter />
  </div>
</template>

<script>
import NewsLetter from "@/components/forms/newsLetter.vue";
import ContactPageHeroSection from "../components/contactPageHeroSection.vue";
import ContactForm from "@/components/forms/contactForm.vue";

export default {
  components: { ContactPageHeroSection, NewsLetter, ContactForm },
};
</script>
