import CxCompetencies from '@/components/cards/cxCompetencies.vue';

<template>
  <div class="competencies">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="competency-header-text">Featured Competencies</h2>
        <!-- <router-link
          to="/"
          class="d-flex align-items-center"
          style="gap: 5px; color: var(--primary-color)"
        >
          <small style="color: var(--primary-color)">See More</small>
          <i
            style="color: var(--primary-color)"
            class="isax isax-arrow-right-1"
          ></i>
        </router-link> -->
      </div>

      <!-- Competencies Cards -->
      <div class="text-center">
        <div class="featured-competencies mt-5">
        <div class="competency-number">
          <i-icon icon="cil:drop" />
          <span class="comp-header">oil & gas</span>
          <animated-number
            :value="value"
            :formatValue="formatToPrice"
            :duration="duration"
          />
        </div>
        
        <div class="divider"></div>

        <div class="competency-number">
          <i-icon icon="ph:lightning" />
          <span class="comp-header">energy</span>
          <animated-number
            :value="value"
            :formatValue="formatToPrice"
            :duration="duration"
          />
        </div>
        
        <div class="divider"></div>

        <div class="competency-number">
          <i-icon icon="iconoir:airplane" />
          <span class="comp-header">aviation</span>
          <animated-number
            :value="value"
            :formatValue="formatToPrice"
            :duration="duration"
          />
        </div>
        
        <div class="divider"></div>

        <div class="competency-number">
          <i-icon icon="mingcute:bank-line" />
          <span class="comp-header">banking</span>
          <animated-number
            :value="value"
            :formatValue="formatToPrice"
            :duration="duration"
          />
        </div>
      </div>
      </div>
      <!-- <div>
        <cx-competencies />
      </div> -->
    </div>
  </div>
</template>

<script>
// import CxCompetencies from "@/components/cards/cxCompetencies.vue";

export default {
  data() {
    return {
      value: 500,
      duration: 5000,
    };
  },
  methods: {
    formatToPrice(value) {
      return `<h1 class="counter-up-text">${Number(value).toFixed(0)}+</h1>`;
    },
  },
  // components: { CxCompetencies },
};
</script>

<style>
.competency-header-text {
  font-weight: 600;
  color: var(--primary-color);
}

.divider {
  width: 0.7px;
  background: var(--primary-color);
  height: 100%;
}

.counter-up-text {
  font-weight: 600;
  font-size: 3rem;
  color: var(--primary-color);
}

.featured-competencies {
  width: 90%;
  display: flex;
  display: -webkit-flex;
  display: inline-flex;
  height: 180px;
  align-items: center;
  /* gap: 50px; */
  justify-content:space-around;
}

.competency-number {
  color: var(--primary-color);
  text-align: center;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
}

.competency-number span.comp-header {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12px;
}
</style>
