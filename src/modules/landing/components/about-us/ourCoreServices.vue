<template>
  <div class="container">
    <h3 class="my-5">Our Core Services</h3>
    <div class="core-services justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="core-services-card">
              <div>
                <h5 class="mb-3">Provide talents to your needs</h5>
                <p class="body--text">
                  CroxxTalent boasts of the best skilled workers. Sign up as an
                  employers and go through our robust talent database.
                </p>
              </div>
              <div class="text-center">
                <CxButton>
                  <slot>Find talents</slot>
                </CxButton>
              </div>
            </div>
          </div>
          <div class="col-sm">
              <img src="@/assets/img/find-you-talents.png" alt="" class="mt-3"/>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-sm">
              <img src="@/assets/img/get-you-hired.png" alt="" />
          </div>
          <div class="col-sm">
            <div class="core-services-card mt-3">
              <div>
                <h5 class="mb-3">Get You Hired</h5>
                <p class="body--text">
                  Looking to get hired by top engineering companies? Look no
                  further. Create your CV and start applying for jobs.
                </p>
              </div>
              <div class="text-center">
                <CxButton>
                  <slot>Get Hired</slot>
                </CxButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CxButton from "@/components/buttons/cxButton.vue";

export default { components: { CxButton } };
</script>
