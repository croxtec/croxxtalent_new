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
              <h5>Surface Cementing</h5>
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
              <h5>Production Cementing</h5>
              <span class="accessment-status mt-2">Basic</span>
            </div>
            <div class="assesement-level mt-2">
              <span>30% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="primary--button"  @click.prevent="assessment()">Take Test</button>
              <button class="primary--button_border">Interview</button>
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
              <button class="primary--button">Take Test</button>
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
