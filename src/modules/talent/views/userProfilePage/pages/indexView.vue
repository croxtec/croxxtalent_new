<template>
  <div>
    <h5 class="title">Profile</h5>
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
    <div class="about mt-5">
      <h6>About</h6>
      <p class="mt-3">
        I’m a petroleum engineer + hydrologist currently working at Rainoil from
        beautiful Osapa London, Nigeria. I’m passionate about designing digital
        products that have a positive impact on the world. Working on oil rigs,
        finding the next oil well either offshore or onshore.
      </p>
    </div>
    <h5 class="competencies-badge my-4">Competencies/Badge</h5>
    <div class="competencies-card">
      <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" />
      <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" />
      <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" />
      <img src="@/assets/img/licence.png" alt="" class="img-fluid mt-5 mx-5" />
    </div>
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
          <button class="details-viewDetails">View Details</button>
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
    }
};
</script>

<style scooped>
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #282929;
}
.contain {
  display: grid;
  grid-template-columns: auto auto;
}
.user-profile {
  border: 1px solid #c2dbff;
  border-radius: 40px;
  width: 822px;
  height: 202px;
  padding: 36px 24px 36px 40px;
  gap: 50px;
  background: #ffffff;
}
.user-contact {
  width: 359px;
  height: 202px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 30px 24px 30px 40px;
  gap: 10px;
}
.profile-pic {
  background-color: #c2dbff;
  border-radius: 100%;
  overflow: hidden;
}
.full-name {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #282929;
}
.profession {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #282929;
}
.company {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #0040a1;
}
.isax-location {
  color: #0040a1;
  font-size: 25px;
}
.location {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #282929;
}
.edit-profile {
  padding: 19px 40px;
  gap: 10px;
  background: #0040a1;
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
.view-resume {
  padding: 19px 40px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0040a1;
}
.user-contact p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #282929;
}
.user-contact label {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #282929;
}
.about {
  align-items: flex-start;
  padding: 24px;
  gap: 20px;
  width: 1230px;
  height: 184px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 40px;
}
.about h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #282929;
}
.about p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #282929;
}
.competencies-badge {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  color: #282929;
}
.competencies-card {
  width: 1230px;
  height: 250px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 10px 30px;
}
.competencies-card img {
  width: 188px;
  height: 140px;
}
.experiences {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 120%;
  color: #282929;
}
.experience-card {
  width: 1230px;
  height: auto;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 20px 30px;
}
.experience-details {
  display: grid;
  grid-template-columns: 7% 93%;
  background: #ffffff;
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 25px 20px;
}
.details-duration,
.details-name h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  color: #282929;
}
.details-duration,
.details-name span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #646868;
}
.details-duration > h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  color: #282929;
}
.details-viewDetails {
  padding: 10px 21px;
  gap: 10px;
  background: #0040a1;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #ffffff;
}
</style>