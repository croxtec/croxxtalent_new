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
      <div class="d-flex job-title-container justify-content-between">
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
      <div class="job-content-container">
        <div>
          <h3>Schlumbe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At a eu fusce et suspendisse
            condimentum. Cursus at orci tempor ut aliquet in leo. Gravida tortor varius
            phasellus viverra elementum. Quis faucibus vel sem duis. Mattis praesent ac
            nunc eget feugiat varius est non gravida. Ipsum convallis quis ornare
            vulputate amet. Morbi nunc tincidunt in fermentum pharetra massa phasellus
            faucibus nibh. Quis gravida lorem malesuada porttitor. Dignissim sagittis arcu
            faucibus ultrices integer at bibendum. Nibh egestas arcu interdum vitae sit
            ornare.rger
          </p>
        </div>
        <div>
          <h3>Competency</h3>
          <ul>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ul>
        </div>
        <div>
          <h3>Requirements</h3>
          <ul>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ul>
        </div>
        <div>
          <h3>Responsibility</h3>
          <ul>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ul>
        </div>
        <div>
          <h3>Summary</h3>
          <span
            >Lorem ipsum dolor sit amet consectetur. At a eu fusce et suspendisse
            condimentum. Cursus at orci tempor ut aliquet in leo. Gravida tortor varius
            phasellus viverra elementum. Quis faucibus vel sem duis. Mattis praesent ac
            nunc eget feugiat varius est non gravida. Ipsum convallis quis ornare
            vulputate amet. Morbi nunc tincidunt in fermentum pharetra massa phasellus
            faucibus nibh. Quis gravida lorem malesuada porttitor. Dignissim sagittis arcu
            faucibus ultrices integer at bibendum. Nibh egestas arcu interdum vitae sit
            ornare.</span
          >
        </div>
        <button
          class="primary--button mt-5 p-3 px-5 d-flex align-items-center mx-auto"
          style="gap: 10px"
        >
          <span>Apply Now</span>
        </button>
      </div>
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
  padding: 30px 0px;
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
.job-content-container {
  border-top: 1px solid #c2dbff;
  padding: 0px 20px;
}
.job-title-container {
  padding: 8px 20px;
}
</style>
