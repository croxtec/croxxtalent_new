<script>
import BackIcon from "./backArrow.vue";

export default {
  components: { BackIcon },
  data: () => {
    return {};
  },
};
</script>
<template>
  <div>
    <header class="d-flex">
      <BackIcon />
      <h6 class="py-2 pl-2">Job Description</h6>
    </header>
    <div class="job-details-container">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img src="@/assets/img/round-logo.png" />
          <div class="pl-4">
            <h6 class="job-title">Petroleum Engineer</h6>
            <p class="job-sub-title">Dest oil . Paris, France</p>
            <div class="d-flex lable-section">
              <div class="green-label">Full-Time</div>
              <div class="line"></div>
              <div class="yellow-label">Mudlogging</div>
              <div class="purple-label">Drilling</div>
            </div>
          </div>
        </div>
        <div>but</div>
      </div>
      <div>k</div>
    </div>
  </div>
</template>
<style scoped>
.heading {
  font-size: 32px;
  line-height: 38.4px;
  font-weight: 700;
}
.job-details-container {
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 30px 20px;
}
.job-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #282929;
}
.job-sub-title {
  font-size: 16px;
  line-height: 25.6px;
  font-weight: 400;
  color: #646868;
}
.lable-section {
  gap: 10px;
}
.green-label {
  color: #56cdad;
  background-color: #56cdad10;
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  border-radius: 50px;
}
.yellow-label {
  color: #ffb836;
  background-color: #ffffff;
  padding: 9px 18px;
  border: 1px solid #ffb836;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  border-radius: 50px;
}
.purple-label {
  color: #7b61ff;
  background-color: #ffffff;
  padding: 9px 18px;
  border: 1px solid #7b61ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  border-radius: 50px;
}
.line {
  height: auto;
  border-left: 1px solid #cbd7e7;
}
</style>
