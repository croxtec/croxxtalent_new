<template>
  <div class="container">
    <h3 class="my-5">What do we do?</h3>
    <div class="d-flex flex-column" style="gap: 20px">
      <div class="core-services">
        <div class="core-services-card">
          <div>
            <h5 class="mb-3">We take the pressure off you</h5>
            <p class="body--text">
              Through years of research and development, we created a unique and
              innovative system that uses smart assessments and a tiered
              Work-Experience Model to drive deep data profiling on every
              individual in our ecosystem. This enables us to make intelligent
              matching decisions for energy companies across the world, ensuring
              that the right people are in the right roles, driving business
              success.
            </p>
          </div>
          <div class="text-center">
            <CxButton @buttonClicked="goToRegister">
              <slot>Find talents</slot>
            </CxButton>
          </div>
        </div>
        <div class="w-100">
          <img src="@/assets/img/find-you-talents.png" alt="" class="mt-3" />
        </div>
      </div>
      <div class="core-services">
        <div class="w-100">
          <img src="@/assets/img/get-you-hired.png" alt="" />
        </div>
        <div class="core-services-card mt-3">
          <div>
            <h5 class="mb-3">Productivity/Results oriented:</h5>
            <p class="body--text">
              We understand that our clients are result-oriented, and we strive
              to meet their needs by providing high-quality output in a timely
              manner. By focusing on results and maximizing resources, we can
              ensure that our clients are satisfied and our services are in
              demand.
            </p>
          </div>
          <div class="text-center">
            <CxButton @buttonClicked="goToRegister">
              <slot>Get Hired</slot>
            </CxButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CxButton from "@/components/buttons/cxButton.vue";

export default {
  components: { CxButton },

  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
