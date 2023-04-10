<template>
  <div>
    <!-- <h5 class="title">Profile</h5> -->
    <div class="contain mt-5">
      <div class="user-profile d-flex justify-content-between">
        <div class="profile-pic">
          <img src="@/assets/img/profilePics.png" alt="" class="profile" />
        </div>
        <div class="name">
          <h6 class="full-name">Nancy Tukura</h6>
          <p class="profession">Petroleum Engineer</p>
          <p class="company">Rainoil</p>
          <div class="locate mt-4">
            <i class="isax isax-location"></i>
            <span class="location ml-2">Lagos, Nigeria</span>
          </div>
        </div>
        <div class="buttons mt-4">
          <button class="edit-profile mr-2">Edit profile</button>
          <button class="view-resume">View resume</button>
        </div>
      </div>
      <div class="user-contact">
        <label for="Email">Email</label>
        <p>nacytukura@gmail.com</p>
        <label for="phone" class="mt-3">Phone</label>
        <p>+234 800 123 4567</p>
      </div>
    </div>

    <div class="about mt-5 ">
      <h6>About</h6>
      <p class="mt-3">
        I’m a petroleum engineer + hydrologist currently working at Rainoil from
        beautiful Osapa London, Nigeria. I’m passionate about designing digital
        products that have a positive impact on the world. Working on oil rigs,
        finding the next oil well either offshore or onshore.
      </p>
    </div>

    <div class="my-3">
      <h5 class="competencies-badge my-4">Competencies/Badge</h5>
      <div class="competencies-card">
        <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" @click.prevent="gotoBackpack() " />
        <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" @click.prevent="gotoBackpack() " />
        <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" @click.prevent="gotoBackpack() " />
        <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" @click.prevent="gotoBackpack() " />
      </div>
    </div>

    <div class="my-3">
      <h5 class="experiences my-4">Experiences</h5>
      <div class="experience-card my-5" >
        <div class="experience-details my-4" v-for="competency in competencies" :key="competency">
          <img src="@/assets/img/round-logo.png" alt="" />
          <div class="details d-flex justify-content-between mt-2">
            <div class="details-name">
              <h6>Drilling Associate</h6>
              <span class="details-location"
                >Rainoil . warri,Delta . full-Time</span
              >
            </div>
            <div class="details-duration">
              <h6>Duration</h6>
              <span>July 2016 - May 2017</span>
            </div>
            <button class="details-viewDetails" @click.prevent="gotoBackpack()">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            competencies: [
                {
                   certificateName : "Drilling Associate" 
                },
                {
                   certificateName : "Petroleum Engineer" 
                },
                {
                   certificateName : "Chemical Engineer" 
                },
            ]
        }
    },

    methods: {
      gotoBackpack(){
        return this.$router.push({ name: 'profile-detail' })
      }
    }
};
</script>

<style scooped>
</style>