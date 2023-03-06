<template>
  <div class="talent--hero_section employer">
    <div class="">
      <div class="pivot--text container">
        <div class="left--pivot container">
          <div class="">
            <h1 class="main--text">
              Energize your team with the best talent in the industry
            </h1>
            <p class="desc--text">
              We assist businesses in realising their full potential by
              assembling teams that drive revenue and facilitate growth
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
          <img src="@/assets/img/employers.png" alt="" />
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
