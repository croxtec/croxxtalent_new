<template>
  <div class="home--hero_section">
    <div class="container">
      <div class="pivot--text">
        <div class="left--pivot">
          <h1 class="main--text">Build efficient teams easily</h1>
          <p class="desc--text w-100 mb-3">
            We help hire top talents that boost productivity in the energy
            sector.
          </p>
          <div class="d-flex align-items-center" style="gap: 15px">
            <cx-button> <slot>Search Job</slot> </cx-button>
            <cx-border-button> <slot>Hire Talents</slot> </cx-border-button>
          </div>
        </div>
        <div class="right--side">
          <div class="d-flex" style="gap: 20px">
            <div>
              <img
                src="@/assets/img/croxh1.svg"
                loading="lazy"
                style="background-color: var(--primary-color)"
                alt=""
              />
            </div>
            <div class="positioned--image">
              <img
                class=""
                loading="lazy"
                src="@/assets/img/croxh2.svg"
                style="background-color: var(--dark-color)"
                alt=""
              />
            </div>
            <div>
              <img
                src="@/assets/img/Croxh3.svg"
                loading="lazy"
                style="background-color: var(--secondary-color)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Search Area  -->
      <div class="talent--search">
        <div class="mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CxButton from "@/components/buttons/cxButton.vue";
import CxBorderButton from "@/components/buttons/cxBorderButton.vue";
export default {
  components: { CxButton, CxBorderButton },
};
</script>
