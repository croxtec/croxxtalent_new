<template>
  <div>
    <FaqHeader />
    <div class="container">
      <news-letter />
    </div>
  </div>
</template>

<script>
import newsLetter from "@/components/forms/newsLetter.vue";
import FaqHeader from "../components/faq/faqHeader.vue";
export default {
  components: { newsLetter, FaqHeader },
};
</script>
