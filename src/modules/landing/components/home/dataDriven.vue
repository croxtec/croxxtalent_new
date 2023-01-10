<template>
  <div class="data-driven">
    <div class="container">
      <div class="data--container">
        <div class="left--side_data">
          <div class="data--card">
            <h4 class="header--text">
              Data <br />
              Driven
            </h4>
            <img src="@/assets/img/data-driven.png" alt="" />
            <p class="small">
              Leverage our extensive data on talent’s technical capacity, work
              preferences and growth potential
            </p>
          </div>
          <div class="data--card">
            <h4 class="header--text">
              Hassle Free <br />
              Hiring
            </h4>
            <img src="@/assets/img/hassle-free.png" alt="" />
            <p class="small">
              Leverage our extensive data on talent’s technical capacity, work
              preferences and growth potential
            </p>
          </div>
        </div>
        <div class="right--side_data">
          <div class="data--bottom_card">
            <h4 class="header--text">
              Best <br />
              Fits
            </h4>
            <img src="@/assets/img/best-fits.png" alt="" />
            <p class="small">
              Leverage our extensive data on talent’s technical capacity, work
              preferences and growth potential
            </p>
          </div>
          <div class="data--bottom_card">
            <h4 class="header--text">
              Cost <br />
              Efficiency
            </h4>
            <img src="@/assets/img/cost-efficiency.png" alt="" />
            <p class="small">
              Leverage our extensive data on talent’s technical capacity, work
              preferences and growth potential
            </p>
          </div>
        </div>
      </div>
      <div class="mb-5 text-center">
        <cx-button><slot>Get Started</slot></cx-button>
      </div>
    </div>
  </div>
</template>
<script>
import cxButton from "@/components/buttons/cxButton.vue";
export default {
  components: { cxButton },
};
</script>
