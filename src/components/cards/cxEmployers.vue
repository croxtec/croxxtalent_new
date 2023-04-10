<template>
    <div class="jobs--cards">
      <div class="job--card" @click.prevent="gotoJobs()"
        v-for="item in employersCount" :key="item">
        <div class="top d-flex justify-content-between align-items-center">
          <CxAvatar />
         <span class="tag" style="background-color: var(--blue-100); color: var(--primary-color); font-weight: 500;">20 Jobs</span>
        </div>
        <div class="middle mt-3">
          <h6 class="font-weight-bolder">Oando</h6> 
          <div
            class="d-flex align-items-center mt-1"
            style="font-weight: 300; gap: 3px; font-size: 12px"
          >
            <span style="color: #515b6f">VI, Lagos</span>
           
          </div>
  
          <div class="mt-2">
            <p class="small" style="color: #515b6f">
              Lorem ipsum tenetur laborum? Earum eum hic illo beatae.
            </p>
          </div>
  
         
        </div> 
      </div>
    </div>
  </template>
  
  <script>
  import CxBorderButton from "../buttons/cxBorderButton.vue";
  import CxAvatar from "../static/cxAvatar.vue";
  export default {
    props: ["employersCount"],
    components: {
      CxBorderButton,
      CxAvatar,
    },
    methods: {
      gotoJobs(){
        this.$router.push("/jobs"); 
      }
    }
  };
  </script>
  