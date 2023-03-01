<template>
  <div class="meet-talent">
    <div class="container">
      <div class="meet--talent_content">
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">Find jobs, get hired and get paid - on one platform</h3>
            <img src="@/assets/img/meet_talents.png" width="100%" alt="" />
          </div>
          <div class="mt-5 text-center">
            <cx-button> 
              <router-link to="/talents" style="color: inherit;"><slot>Find Jobs</slot></router-link>
            </cx-button>
          </div>
        </div>
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">Source, vet and hire the best in the business</h3>
            <img src="@/assets/img/find_jobs.png" width="100%" alt="" />
          </div>
          <div class="mt-5 text-center">
            <cx-button> 
              <router-link to="/employers" style="color: inherit;"><slot>Find Talents</slot> </router-link> 
            </cx-button>
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
