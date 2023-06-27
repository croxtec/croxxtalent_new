<script>
import BackIcon from "./backArrow.vue";

export default {
  components: { BackIcon },
  data: () => {
    return {
      customColor: "#56CDAD",
      percentage: 30,
    };
  },
};
</script>
<template>
  <div>
    <header class="d-flex mb-4">
      <BackIcon />
      <h6 class="py-2 pl-2">Job Description</h6>
    </header>
    <div class="job-details-container">
      <div class="d-flex job-title-container justify-content-between">
        <div class="d-flex">
          <img class="img-fluid" src="@/assets/img/round-logo.png" />
          <div class="pl-4">
            <h6 class="job-title">Petroleum Engineer</h6>
            <p class="job-sub-title">Dest oil . Paris, France</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex lable-section">
                <div>
                  <div class="green-label">Full-Time</div>
                </div>
                <div><div class="line"></div></div>
                <div><div class="yellow-label">Mudlogging</div></div>
                <div>
                  <div class="purple-label">Drilling</div>
                </div>
              </div>
              <!-- <div class="d-flex apply_button gap-2">
                <div>
                  <button class="primary--button_border p-2 px-5 align-items-center">
                    <span>Save</span>
                  </button>
                </div>
                <div>
                  <button class="primary--button p-2 px-5 align-items-center">
                    <span>Apply </span>
                  </button>
                  <div class="mt-2">
                    <el-progress
                      :percentage="percentage"
                      :color="customColor"
                      :show-text="false"
                    ></el-progress>
                    <span>5 applied of 10 capacity</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div>
          <div style="display: none" class=" apply_button gap-2">
            <div>
              <button class="primary--button_border mt-5 p-2 px-5 align-items-center">
                <span>Save</span>
              </button>
            </div>
            <div>
              <button class="primary--button mt-5 p-2 px-5 align-items-center">
                <span>Apply </span>
              </button>
              <div class="mt-2">
                <el-progress
                  :percentage="percentage"
                  :color="customColor"
                  :show-text="false"
                ></el-progress>
                <span>5 applied of 10 capacity</span>
              </div>
            </div>
          </div>
          <!-- <div class="mt-2">
            <div class="progress-container"><div class="progress-bar"></div></div>
          </div> -->
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
          <div class="my-4">
            <ol>
              <li>Domain name</li>
              <li>Core name</li>
              <li>Skill</li>
            </ol>
          </div>
        </div>
        <div class="Requirements-section">
          <h6 class="Requirements-heading">Requirements</h6>
          <div class="my-4">
            <ul>
              <li>Domain name</li>
              <li>Core name</li>
              <li>Skill</li>
            </ul>
          </div>
        </div>
        <div class="Responsibility-section">
          <h6 class="Responsibility-heading">Responsibility</h6>
          <div class="my-4">
            <ul>
              <li>Domain name</li>
              <li>Core name</li>
              <li>Skill</li>
            </ul>
          </div>
        </div>
        <div class="Salary-section">
          <h6 class="Salary-heading">
            <div class="Salary-section">
              <h6 class="Salary-heading">Salary</h6>
              <div class="my-4">
                <span class="salary-price">N 350,000 - N 500,000</span>
              </div>
            </div>
          </h6>
          <div class="my-4">
            <ul>
              <li>Domain name</li>
              <li>Core name</li>
              <li>Skill</li>
            </ul>
          </div>
        </div>
        <div class="Summary-section">
          <h6 class="Summary-heading mb-4">Summary</h6>
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
