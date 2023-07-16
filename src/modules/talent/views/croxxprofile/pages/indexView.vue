<template>
  <div>
    <!-- <h5 class="title">Profile</h5> -->
    <div class="contain mt-5">
      <div class="user-profile justify-content-between">
        <!-- <div class="profile-pic"> -->
        <img
          src="@/assets/img/profilePics.png"
          alt=""
          class="justify-center profile-pic"
        />
        <!-- </div> -->
        <div class="name justify-center">
          <h6 class="full-name">Nancy Tukura</h6>
          <p class="profession">Petroleum Engineer</p>
          <p class="company">Rainoil</p>
          <div class="locate mt-3">
            <!-- <i class="isax isax-location"></i> -->
            <img src="@/assets/icons/location.svg" alt="" class="" />

            <span class="location my-3 ml-2">Lagos, Nigeria</span>
          </div>
        </div>
        <div class="buttons_section justify-content-between">
          <button @click="gotoSettings()" class="primary-button">Edit profile</button>
          <button class="button-outline">View resume</button>
        </div>
      </div>
      <div class="user-contact">
        <div>
          <label for="Email">Email</label>
          <p>nacytukura@gmail.com</p>
        </div>
        <div class="mt-3">
          <label for="phone">Phone</label>
          <p>+234 800 123 4567</p>
        </div>
      </div>
    </div>

    <div class="about mt-5">
      <h6>About</h6>
      <p class="mt-3">
        I’m a petroleum engineer + hydrologist currently working at Rainoil from beautiful
        Osapa London, Nigeria. I’m passionate about designing digital products that have a
        positive impact on the world. Working on oil rigs, finding the next oil well
        either offshore or onshore.
      </p>
    </div>

    <div class="my-5">
      <h5 class="competencies-badge my-4">Competencies/Badge</h5>
      <div class="badge-section justify-content-between">
        <img
          src="@/assets/img/licence.png"
          alt=""
          class="img-fluid"
          @click.prevent="gotoBackpack()"
        />
        <img
          src="@/assets/img/licence.png"
          alt=""
          class="img-fluid"
          @click.prevent="gotoBackpack()"
        />
        <img
          src="@/assets/img/licence.png"
          alt=""
          class="img-fluid"
          @click.prevent="gotoBackpack()"
        />
        <img
          src="@/assets/img/licence.png"
          alt=""
          class="img-fluid"
          @click.prevent="gotoBackpack()"
        />
      </div>
    </div>

    <div class="my-3">
      <h5 class="experiences my-4">Experiences</h5>
      <div class="experience-card my-5">
        <div
          class="experience-details justify-content-between my-4"
          v-for="competency in competencies"
          :key="competency"
        >
          <div class="details justify-content-between">
            <img src="@/assets/img/round-logo.png" alt="" />

            <div class="details-name my-2">
              <h6>Drilling Associate</h6>
              <span class="details-location">Rainoil . warri,Delta . full-Time</span>
            </div>
          </div>
          <div class="details justify-content-between">
            <div class="details-duration my-2">
              <h6>Duration</h6>
              <span>July 2016 - May 2017</span>
            </div>
            <button class="details-viewDetails" @click.prevent="gotoBackpack()">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      competencies: [
        {
          certificateName: "Drilling Associate",
        },
        {
          certificateName: "Petroleum Engineer",
        },
        {
          certificateName: "Chemical Engineer",
        },
      ],
    };
  },

  methods: {
    gotoBackpack() {
      return this.$router.push({ name: "profile-detail" });
    },
    gotoSettings() {
      return this.$router.push({ name: "settings" });
    },
  },
};
</script>

<style scoped>
.button-outline {
  padding: 10px 21px;
  color: #0040a1;
  border: 1px solid #0040a1;
  border-radius: 40px;
  height: 40%;
  background-color: #ffffff;
}
.primary-button {
  background-color: var(--primary-color);
  padding: 10px 21px;
  color: #fff;
  border-radius: 40px;
  height: 40%;
  border: none;
}
</style>
