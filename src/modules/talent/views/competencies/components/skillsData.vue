<template>
  <div class="skills">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Well Services" name="1">
        <div>
          <div class="skill-header">
            <span v-for="item in skillsArr" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="skills-content mt-3">
          <div class="skills-data">
            <div>
              <h5>Production Cementing</h5>
              <span class="accessment-status mt-2">Intermediate</span>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>

            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="primary--button"  @click.prevent="assessment()">Take Test</button>
              <button class="primary--button_border">Preview</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Bridge Cementing</h5>
              <span class="accessment-status mt-2">Basic</span>
            </div>
            <div class="assesement-completed level-excellent mt-2">
              <div class="assesement-grade">
                <div class="w-75 d-flex"> 
                  <span class="info">Completed</span>  
                  <span class="split-excellent"></span>
                </div>
                <div class="w-25"> 
                  <div class="assement-score score-excellent">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.75 18.2509H9.5C8.4 18.2509 7.5 19.1509 7.5 20.2509V20.5009H6.5C6.09 20.5009 5.75 20.8409 5.75 21.2509C5.75 21.6609 6.09 22.0009 6.5 22.0009H18.5C18.91 22.0009 19.25 21.6609 19.25 21.2509C19.25 20.8409 18.91 20.5009 18.5 20.5009H17.5V20.2509C17.5 19.1509 16.6 18.2509 15.5 18.2509H13.25V15.9609C13 15.9909 12.75 16.0009 12.5 16.0009C12.25 16.0009 12 15.9909 11.75 15.9609V18.2509Z" fill="#D6FFED"/>
                      <path d="M18.9798 11.64C19.6398 11.39 20.2198 10.98 20.6798 10.52C21.6098 9.49 22.2198 8.26 22.2198 6.82C22.2198 5.38 21.0898 4.25 19.6498 4.25H19.0898C18.4398 2.92 17.0798 2 15.4998 2H9.49979C7.91979 2 6.55979 2.92 5.90979 4.25H5.34979C3.90979 4.25 2.77979 5.38 2.77979 6.82C2.77979 8.26 3.38979 9.49 4.31979 10.52C4.77979 10.98 5.35979 11.39 6.01979 11.64C7.05979 14.2 9.55979 16 12.4998 16C15.4398 16 17.9398 14.2 18.9798 11.64ZM15.3398 8.45L14.7198 9.21C14.6198 9.32 14.5498 9.54 14.5598 9.69L14.6198 10.67C14.6598 11.27 14.2298 11.58 13.6698 11.36L12.7598 11C12.6198 10.95 12.3798 10.95 12.2398 11L11.3298 11.36C10.7698 11.58 10.3398 11.27 10.3798 10.67L10.4398 9.69C10.4498 9.54 10.3798 9.32 10.2798 9.21L9.65979 8.45C9.26979 7.99 9.43979 7.48 10.0198 7.33L10.9698 7.09C11.1198 7.05 11.2998 6.91 11.3798 6.78L11.9098 5.96C12.2398 5.45 12.7598 5.45 13.0898 5.96L13.6198 6.78C13.6998 6.91 13.8798 7.05 14.0298 7.09L14.9798 7.33C15.5598 7.48 15.7298 7.99 15.3398 8.45Z" fill="#D6FFED"/>
                    </svg>
                     <span class="h3"> 5</span> 
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="primary--button_border">Preview</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
              <span class="accessment-status mt-2">Expert</span>
            </div>
            <img
              src="@/assets/img/Croxx Badge.png"
              width="120"
              alt=""
              class="mt-2"
            />
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <!-- <button class="primary--button">Download Badge</button> -->
              <button class="primary--button_border">Preview</button>
            </div>
          </div> 
        </div>
      </el-collapse-item>

      <el-collapse-item title="Rig Operations" name="2">
        <div>
          <div class="skill-header">
            <span v-for="item in skillsArr" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="skills-content mt-3">
          <div class="skills-data">
            <div>
              <h5>Drill a stand</h5>
            </div>
            <div class="d-flex align-items-center" style="gap: 10px">
              <img
                src="@/assets/img/Croxx Badge.png"
                width="120"
                alt=""
                class="mt-2"
              />
              <span class="expiring-soon">
                <span>
                  <i-icon
                    class="text-danger"
                    width="30px"
                    icon="ri:alarm-warning-fill"
                  />
                </span>
                <span class="expiring-soon-text">Expiring Soon</span>
              </span>
            </div>
            <div class="mt-3">
              <button class="primary--button">Download</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>BHA Handling</h5>
            </div>
            <span class="expiring-soon">
              <span class="pending-icon">
                <i-icon width="30px" icon="bx:refresh" />
              </span>
              <span class="expiring-soon-text">Pending review</span>
            </span>
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="primary--button" @click.prevent="assessment()">Take Test</button>
              <button class="primary--button_border">Interview</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Drill a stand</h5>
            </div>
            <div class="d-flex align-items-center" style="gap: 10px">
              <img
                src="@/assets/img/Croxx Badge.png"
                width="120"
                alt=""
                class="mt-2"
              />
              <span class="expiring-soon bg-danger">
                <span>
                  <i-icon
                    class="text-white"
                    width="30px"
                    icon="ic:round-warning-amber"
                  />
                </span>
                <span class="expiring-soon-text text-white">Expired</span>
              </span>
            </div>
            <div class="mt-3">
              <button class="primary--button">Download</button>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1", "2"],
      customColor: "#0040A1",
      percentage: 30,
      skillsArr: [
        "Cementing jobs",
        "Stimulation equipment",
        "Auxiliary equipment",
        "Cementing equipment",
        "Down-holes tools",
        "Pressure jobs",
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    assessment() {
      this.$router.push("/assessment");
    },
  },
};
</script>

<style></style>
