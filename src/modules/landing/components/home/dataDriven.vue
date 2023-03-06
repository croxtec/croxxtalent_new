<template>
  <div class="data-driven">
    <div class="container">
      <div class="data--container">
        <div class="left--side_data">
          <div class="data--card">
            <h4 class="header--text">
              Data <br />
              Driven
            </h4>
            <img src="@/assets/img/data-driven.png" alt="" />
            <p class="body--text">
              Whether you're a talented professional looking for your next
              career move or an employer seeking top talent, CroxxTalent has
              everything you need to make it happen.
            </p>
          </div>
          <div class="data--card">
            <h4 class="header--text">
              Hassle Free <br />
              Hiring
            </h4>
            <img src="@/assets/img/hassle-free.png" alt="" />
            <p class="body--text">
              We've designed our platform to be simple, user-friendly, and
              efficient. Our goal is to make the hiring process thorough yet
              seamless and stress-free for employers and talents alike.
            </p>
          </div>
        </div>
        <div class="right--side_data">
          <div class="data--bottom_card">
            <h4 class="header--text">
              Best <br />
              Fits
            </h4>
            <img src="@/assets/img/best-fits.png" alt="" />
            <p class="body--text">
              Find the right job for you and build a stronger team with our
              personalized job matching services.
            </p>
          </div>
          <div class="data--bottom_card">
            <h4 class="header--text">
              Cost <br />
              Efficiency
            </h4>
            <img src="@/assets/img/cost-efficiency.png" alt="" />
            <p class="body--text">
              Maximizing value for your budget with cost-efficient solutions -
              you don’t have to break the bank to get the quality of services
              you need.
            </p>
          </div>
        </div>
      </div>
      <div class="mb-5 text-center">
        <cx-button @buttonClicked="goToRegister"
          ><slot>Get Started</slot></cx-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import cxButton from "@/components/buttons/cxButton.vue";
export default {
  components: { cxButton },

  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
