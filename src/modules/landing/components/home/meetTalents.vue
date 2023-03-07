<template>
  <div class="meet-talent">
    <div class="container">
      <div class="meet--talent_content">
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">
              Find jobs, get hired and get paid - on one platform
            </h3>
            <!-- <img
              class="floater-z"
              src="@/assets/img/meet_talents.png"
              width="100%"
              alt=""
            /> -->
            <div class="meet-talents-img p-3 mt-3">
              <!-- <img src="@/assets/img/Interviewed.png" width="100%" alt="" /> -->
              <img
                class="floater-z"
                src="@/assets/img/Find 3d 1.png"
                width="300px"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <cx-button>
              <router-link to="/talents" style="color: inherit"
                ><slot>Find Jobs</slot></router-link
              >
            </cx-button>
          </div>
        </div>
        <div class="">
          <div class="colored-card">
            <h3 class="header--text">
              Source, vet and hire the best in the business
            </h3>
            <img src="@/assets/img/find_jobs.png" width="100%" alt="" />
          </div>
          <div class="mt-5 text-center">
            <cx-button>
              <router-link to="/employers" style="color: inherit"
                ><slot>Find Talents</slot>
              </router-link>
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

<style scoped>
.meet-talents-img {
  background: url("@/assets/img/Interviewed.png");
  width: 60%;
  height: 320px;
  margin: 0 auto;
  background-size: cover;
}
</style>
