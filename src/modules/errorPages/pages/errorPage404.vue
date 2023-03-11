<template>
  <div>
    <talent-nav v-if="loggedIn" />
    <landing-page-nav v-else />

    <!-- <div>
      {{ loggedIn }}
    </div> -->
    <div class="error-404">
      <div>
        <img src="@/assets/img/error-404.svg" alt="" />
        <div class="text-center">
          <button class="primary--button" @click="$router.go(-1)">
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import landingPageNav from "@/components/navigation/landingPageNav.vue";
import TalentNav from "@/components/navigation/talentNav.vue";
import Cookies from "js-cookie";
import config from "@/config";
export default {
  components: { landingPageNav, TalentNav },
  computed: {
    loggedIn() {
      const accessToken = Cookies.get(config.accessTokenStorageKey);
      return accessToken;
    },
  },
};
</script>
