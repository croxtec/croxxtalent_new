<template>
  <div class="skills">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Well Services" name="1">
        <div>
          <div class="skill-header">
            <span v-for="item in skillsArr" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info">
            <span>
              <span class="manager-tag"></span>
              <span class="manager-count">20</span>
            </span>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Rig Operations" name="2">
        <div>
          <div class="skill-header">
            <span v-for="item in skillsArr" :key="item">{{ item }}</span>
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
