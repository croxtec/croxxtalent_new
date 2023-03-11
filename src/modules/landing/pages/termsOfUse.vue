<template>
  <div>
    <TermsHeader />
    <div class="container">
      <div class="mt-5">
        <div class="">
          <TermsOfUse />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Terms from "../components/privacy-policy/Terms.vue";
import TermsOfUse from "../components/privacy-policy/termsOfUse.vue";
import TermsHeader from "../components/privacy-policy/TermsHeader.vue";

export default {
  data() {
    return {
      activeEl: "1",
    };
  },
  methods: {
    toggleActive(value) {
      this.activeEl = value;
    },
  },
  components: { TermsOfUse, TermsHeader },
};
</script>
<style scoped>
@media only screen and (max-width: 572px) {
  .privacy--policy_content {
    display: block;
    justify-content: center;
  }
  .privacy--policy_nav {
    justify-content: center;
    margin-left: 30px;
    margin-bottom: 30px;
  }
  li {
    font-size: 25px !important;
  }
  li.active {
    background-color: var(--primary-color);
    color: white !important;
    padding: 10px;
  }
}
</style>
