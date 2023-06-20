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
        <div>
          <div class="d-flex">
            <button
              class="primary--button mt-5 p-3 px-5 d-flex align-items-center mx-auto"
              style="gap: 10px"
            >
              <span>Save</span>
            </button>
            <button
              class="primary--button mt-5 p-3 px-5 d-flex align-items-center mx-auto"
              style="gap: 10px"
            >
              <span>Apply </span>
            </button>
          </div>
          <div>
            <div class="progress-container"><div class="progress-bar"></div></div>
          </div>
        </div>
      </div>
      <div class="job-content-container">
        <div class="Schlumbe-section">
          <h6 class="Schlumbe-heading mb-4">Schlumbe</h6>
          <p class="Schlumbe-memo mb-4">
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
        <div class="Competency-section mt-4">
          <h6 class="Competency-heading mb-2">Competency</h6>
          <ol>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ol>
        </div>
        <div class="Requirements-section">
          <h6 class="Requirements-section">Requirements</h6>
          <ul>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ul>
        </div>
        <div class="Responsibility-section">
          <h6>Responsibility</h6>
          <ul>
            <li>Domain name</li>
            <li>Core name</li>
            <li>Skill</li>
          </ul>
        </div>
        <div class="Summary-section">
          <h6>Summary</h6>
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
</style>
