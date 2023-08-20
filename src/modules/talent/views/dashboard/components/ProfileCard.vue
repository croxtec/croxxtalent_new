<template>
  <div id="profile-card" class="bordered">
    <!-- <div>
      {{ user }}
     </div> -->
   <div class="d-flex align-items-center profile-card justify-content-between w-100 py-2" style="gap:20px; ">
    <div class="d-flex align-items-center" style="gap:20px">
      <img  class="linker" @click.prevent="gotoProfile()"
      src="https://vectorified.com/images/generic-avatar-icon-25.jpg"
      alt=""
    />
     <div class="linker" @click.prevent="gotoProfile()">
      <h5 class="profile-name">{{ user.cv.name }}</h5>
      <h6 class="profile-profession">{{ cvs.job_title_name }}</h6>
     </div>
    </div>
    <div @click.prevent="gotoCompleteResume(p)"
      class="assesement-level py-3 w-25 linker">
      <span>{{ cvs.progress }}% Complete</span> 
      <el-progress
        :percentage="cvs.progress"
        :color="customColor"
        :show-text="false"
      ></el-progress>
    </div>
    <button class="primary--button linker" @click.prevent="gotoCompleteResume()">Complete CV</button>
   </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      customColor: "#0040A1",
    };
  },
  methods: {
    ...mapActions('cvs', ['list']),
    gotoCompleteResume(){
      this.$router.push({name: 'create-cv'});
    },

    gotoProfile(){
      this.$router.push({name: 'profile'});
    }
  },

  beforeMount(){
    this.list()
  },

  computed: {
    ...mapState('auth', {
      user: (state) => state.user
    }),

    ...mapState('cvs', {
      cvs: (state) => state.data
    }),
  

  }
};
</script>

<style>
@media (max-width:990px) {
  .profile-card {
    flex-direction: column !important;
    align-items: start !important;
  }
}
</style>