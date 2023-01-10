<template>
  <div class="meet-talent">
    <div class="container">
      <div class="meet--talent_content">
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">Meet the talents you are looking for</h3>
            <img src="@/assets/img/meet_talents.png" width="100%" alt="" />
          </div>
          <div class="mt-3 text-center">
            <cx-button> <slot>Get Started</slot> </cx-button>
          </div>
        </div>
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">Find jobs, get hired and paid easily.</h3>
            <img src="@/assets/img/find_jobs.png" width="100%" alt="" />
          </div>
          <div class="mt-3 text-center">
            <cx-button> <slot>Get Started</slot> </cx-button>
          </div>
        </div>
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
