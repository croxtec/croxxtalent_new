<template>
  <div id="affiliate">
    <div class="affiliate_container">
      <div class="user-afiliate-card">
        <img
          src="@/assets/img/profilePics.png"
          alt=""
          class="justify-center profile-pic"
        />
        <div class="name">
          <h6 class="full-name">Nancy Tukura</h6>
        </div>
        <div class="left_section">
          <div>
            <div class="primary-button">Edit profile</div>
            <div class="link_container">
              <div class="link_section">
                https://croxxtalent.io/app/affiliate-code-121232f333323
              </div>
              <button class="primary--button_border">Copy Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_two mt-5">
      <div class="user-afiliate-card">
        <div class="card-items">
          <h5 class="profile-name">Referrals</h5>
          <div>
            <ReferralIcon /><BoxIcon />
            <div class="card-values">
              <h5>20</h5>
              <p>Referrals</p>
            </div>
          </div>
        </div>
      </div>
      <div class="user-afiliate-card">
        <div class="card-items">
          <h5 class="profile-name">Reward Points</h5>
          <div>
            <RewardIcon /><BoxIcon />
            <div class="card-values">
              <h5>200</h5>
              <p>Reward Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-afiliate-card mt-5 px-0">
      <div class="referral-container">
        <div class="referral-heading">
          <h4>Referral List</h4>
          <div>
            <div class="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="nav-icon iconify iconify--ri"
              >
                <path
                  fill="currentColor"
                  d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7Zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414Z"
                ></path></svg
              ><input type="search" placeholder="Search" />
            </div>
          </div>
        </div>

        <div class="referral-list">
          <div v-for="item in 4" :key="item" class="referral-card"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReferralIcon from "@/modules/talent/views/affiliate/components/icons/referralIcon.vue";
import RewardIcon from "@/modules/talent/views/affiliate/components/icons/rewardIcon.vue";
import BoxIcon from "@/modules/talent/views/affiliate/components/icons/boxIcon.vue";
export default {
  components: { ReferralIcon, RewardIcon, BoxIcon },

  data() {
    return {};
  },
};
</script>
<style scoped>
.referral-list {
  padding: 23px;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.referral-card {
  border-radius: 30px;
  border: 1px solid #cbd7e7;
  background: #fff;
  display: flex;
  padding: 13px 24.64px 13px 40px;
  justify-content: flex-end;
  align-items: center;
  gap: 46px;
}
.referral-heading h4 {
  color: #282929;
  font-family: Poppins;
  font-size: 15.27px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 18.324px */
}
.referral-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.848px solid #c2dbff;
  padding-bottom: 10px !important;
  padding: 0px 23px;
  margin-bottom: 25px;
}
.search {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
}
div .search {
  border: 1px solid var(--blue-300);
  background: #fff;
  border-radius: 25px;
  padding: 0 25px;
  width: 100%;
}

div .search input {
  border: none;
}

.card-values {
  display: block !important;
}
.card-values h5 {
  color: #282929;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 57.6px */
}
.card-values p {
  color: #979b9b;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.card-items div {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}
.card-items div {
  margin-top: 20px;
}
.section_two {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
}
.left_section {
  width: 100%;
  display: flex;
  align-items: center;
}
.left_section div {
  width: 100%;
}
.link_container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
}
.link_section {
  padding: 14px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #0040a1;
  background: #fff;
  width: 100%;
  color: #646868;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.affiliate_container {
  display: flex;
  align-items: center;
}
.referral-container {
  width: 100%;
}
.user-afiliate-card {
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 23px;
  gap: 20px;
  background: #ffffff;
  display: flex;
  width: 100%;
  flex-direction: row;
}
.name {
  display: flex;
  align-items: center;
  width: 20%;
}
@media only screen and (max-width: 768px) {
  .user-afiliate-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .link_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .link_section {
    overflow: hidden;
  }
  .section_two {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
