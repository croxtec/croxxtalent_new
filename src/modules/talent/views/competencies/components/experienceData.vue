<template>
  
  <div class="pb-4">
    <competences-header />

    <div class="mt-4">
      <div class="skills">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Well Services" name="1">
            <div class="skills-content mt-3">
              <div class="skills-data">
                <div>
                  <h5>Bridge Cementing</h5>
                </div>
                <div class="assesement-completed level-poor mt-2">
                  <div class="assesement-grade">
                    <div class="w-75 d-flex"> 
                      <span class="info">Completed</span>  
                      <span class="split score-poor"></span>
                    </div>
                    <div class="w-25"> 
                      <div class="assement-score score-poor">
                        <svg width="30" height="30" viewBox="0 0 30 30"  fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.62 6.98L17.52 2.88C17.04 2.4 16.08 2 15.4 2H9.6C8.92 2 7.96 2.4 7.48 2.88L3.38 6.98C2.9 7.46 2.5 8.42 2.5 9.1V14.9C2.5 15.58 2.9 16.54 3.38 17.02L7.48 21.12C7.96 21.6 8.92 22 9.6 22H15.4C16.08 22 17.04 21.6 17.52 21.12L21.62 17.02C22.1 16.54 22.5 15.58 22.5 14.9V9.1C22.5 8.42 22.1 7.46 21.62 6.98ZM16.53 14.97C16.82 15.26 16.82 15.74 16.53 16.03C16.38 16.18 16.19 16.25 16 16.25C15.81 16.25 15.62 16.18 15.47 16.03L12.5 13.06L9.53 16.03C9.38 16.18 9.19 16.25 9 16.25C8.81 16.25 8.62 16.18 8.47 16.03C8.18 15.74 8.18 15.26 8.47 14.97L11.44 12L8.47 9.03C8.18 8.74 8.18 8.26 8.47 7.97C8.76 7.68 9.24 7.68 9.53 7.97L12.5 10.94L15.47 7.97C15.76 7.68 16.24 7.68 16.53 7.97C16.82 8.26 16.82 8.74 16.53 9.03L13.56 12L16.53 14.97Z" fill="#FDB3A9"/>
                          </svg>
                        <span class="h3"> 2</span> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 d-flex align-items-center">
                  <button class="primary--button_border">Preview</button>
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
                  <h5>Hydrolic</h5>
                </div>
                <div class="assesement-completed level-average mt-2">
                  <div class="assesement-grade">
                    <div class="w-75 d-flex"> 
                      <span class="info">Completed</span>  
                      <span class="split score-average"></span>
                    </div>
                    <div class="w-25"> 
                      <div class="assement-score score-average">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM15.28 7.7L9.61 13.37C9.47 13.51 9.28 13.59 9.08 13.59C8.88 13.59 8.69 13.51 8.55 13.37L5.72 10.54C5.43 10.25 5.43 9.77 5.72 9.48C6.01 9.19 6.49 9.19 6.78 9.48L9.08 11.78L14.22 6.64C14.51 6.35 14.99 6.35 15.28 6.64C15.57 6.93 15.57 7.4 15.28 7.7Z" fill="#C2DBFF"/>
                        </svg>
                        <span class="h3"> 3</span> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 d-flex align-items-center">
                  <button class="primary--button_border">Preview</button>
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
    </div>
  </div>
</template>

<script>
import competencesHeader from "../components/competencesHeader.vue";


export default {
  components: {  competencesHeader },

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
