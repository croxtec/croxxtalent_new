<template>
  <div class="about-us">
    <div class="container py-4">
      <div class="w-50 d-flex flex-column" style="gap: 10px">
        <h4 class="w-100">Connecting Talent with Opportunity</h4>
        <p class="">
          CroxxTalent is pioneering a better way of matching talent in the
          energy industry. We understand the dynamics around energy and
          competencies to drive innovation.
        </p>
        <div class="d-flex" style="gap: 10px">
          <button class="primary--button">Hire Talents</button>
          <button class="primary--button_border">Contact Us</button>
        </div>
      </div>
    </div>
    <div class="about-us-right"></div>
  </div>
</template>
<style>
.about-us .container h4 {
  font-weight: 800;
  font-size: 45px;
}

.about-us {
  position: relative;
  height: 100vh;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  align-items: center;
}

.about-us-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  background: url("@/assets/img/about-us-header.png");
  background-position: center;
  background-size: cover;
}

@media (max-width: 990px) {
  .w-50 {
    width: 100% !important;
  }
  .about-us {
    height: auto;
    width: 100%;
  }
  .about-us-right {
    position: unset;
  }
}
</style>
