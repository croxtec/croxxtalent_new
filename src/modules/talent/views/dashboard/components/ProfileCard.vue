<template>
  <div id="profile-card" class="bordered">
   <div class="d-flex align-items-center justify-content-between w-100 py-2" style="gap:20px; ">
    
    <div class="d-flex align-items-center" style="gap:20px">
      <img  class="linker" @click.prevent="gotoProfile()"
      src="https://vectorified.com/images/generic-avatar-icon-25.jpg"
      alt=""
    />
     <div class="linker" @click.prevent="gotoProfile()">
      <h5 class="profile-name">Nancy Tukura</h5>
      <h6 class="profile-profession">Petroleum Engineer</h6>
     </div>
    </div>
    <div @click.prevent="gotoCompleteResume(p)"
      class="assesement-level py-3 w-25 linker">
      <span>30% Complete</span>
      <el-progress
        :percentage="percentage"
        :color="customColor"
        :show-text="false"
      ></el-progress>
    </div>
    <button class="primary--button linker" @click.prevent="gotoCompleteResume()">Complete CV</button>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customColor: "#0040A1",
      percentage: 30,
    };
  },
  methods: {
    gotoCompleteResume(){
      this.$router.push({name: 'create-cv'});
    },


    gotoProfile(){
      this.$router.push({name: 'profile'});
    }
  },
};
</script>

<style>
</style>