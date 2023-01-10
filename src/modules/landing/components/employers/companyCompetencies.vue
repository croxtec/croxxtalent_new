import CxCompetencies from '@/components/cards/cxCompetencies.vue';

<template>
  <div class="competencies">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="header--text">Competencies</h4>
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

      <!-- Competencies Cards -->
      <div>
        <cx-competencies />
      </div>
    </div>
  </div>
</template>

<script>
import CxCompetencies from "@/components/cards/cxCompetencies.vue";

export default {
  components: { CxCompetencies },
};
</script>
