<template>
  <div>
    <PrivacyPolicyHeader />
    <div class="container">
      <div class="privacy--policy_content mt-5">
        <nav class="privacy--policy_nav">
          <ul>
            <li
              role="button"
              :class="activeEl === '1' ? 'active' : ''"
              @click="toggleActive('1')"
            >
              Privacy Policy
            </li>
            <li
              role="button"
              :class="activeEl === '2' ? 'active' : ''"
              @click="toggleActive('2')"
            >
              Terms of Use
            </li>
          </ul>
        </nav>

        <div class="privacy--data">
          <PrivacyPolicy v-if="activeEl === '1'" />
          <TermsOfUse v-if="activeEl === '2'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrivacyPolicy from "../components/privacy-policy/privacyPolicy.vue";
import TermsOfUse from "../components/privacy-policy/termsOfUse.vue";
import PrivacyPolicyHeader from "../components/privacy-policy/privacyPolicyHeader.vue";

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
  components: { TermsOfUse, PrivacyPolicy, PrivacyPolicyHeader },
};
</script>
