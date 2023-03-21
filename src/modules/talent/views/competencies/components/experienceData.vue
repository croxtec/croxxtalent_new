<template>
  <div class="skills">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Well Services" name="1">
        <div class="skills-content mt-3">
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Rig Operations" name="2">
        <div class="skills-content mt-3">
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
            </div>
          </div>
          <div class="skills-data">
            <div>
              <h5>Surface Cementing</h5>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3">
              <button class="primary--button">Complete task</button>
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
  },
};
</script>

<style></style>
