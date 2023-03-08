<template>
  <div class="top--talents">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <h4 class="header--text" data-aos="fade-up">Top Talents</h4>
        <router-link
          to="/"
          class="d-flex align-items-center"
          style="gap: 5px; color: var(--primary-color)"
        >
          <small style="color: var(--primary-color)">See More</small>
          <i
            style="color: var(--primary-color)"
            class="isax isax-arrow-right-1"
          ></i>
        </router-link>
      </div>

      <!-- Talents -->
      <div>
        <CxTalents />
      </div>
    </div>
  </div>
</template>

<script>
import CxTalents from "@/components/cards/cxTalents.vue";

export default { components: { CxTalents } };
</script>
