<template>
  <div class="talent--hero_section">
    <div class="">
      <div class="pivot--text container">
        <div class="left--pivot container">
          <div class="">
            <h1 class="main--text">
              Accelerate Your Career in the Energy Industry
            </h1>
            <p class="desc--text">
              The platform is designed to connect talented individuals with the
              best opportunities.
            </p>

            <!-- Hero Search Area  -->
            <div class="talent--search">
              <HeroSearch />
              <div class="mt-2">
                <ListPopularJobs />
              </div>
            </div>
          </div>
        </div>
        <div class="text-right employer-hero-bg">
          <div class="right--pivot">
            <div>
              <h6>100%</h6>
              <h5>
                Verified <br />
                Offers
              </h5>
            </div>
          </div>
          <img src="@/assets/img/about.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSearch from "@/components/forms/heroSearch.vue";
import ListPopularJobs from "@/components/static/listPopularJobs.vue";

export default {
  components: { HeroSearch, ListPopularJobs },
};
</script>

<style></style>
