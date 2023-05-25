<template>
  <div class="skills">

    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(domain, key_x) in competencies" :key="domain.name" :title="domain.name" :name="key_x">
        <div class="skill-header">
          <div class="skills-list" id="container">
            <span
              role="button"
              @click="switchActive(key_x, key_y)"
              :class="{ active: activeEl === key_y }"
              v-for="(core, key_y) in domain.core"
              :key="key_y"
              >{{ core.name }} </span
            >
          </div>
          <div class="arrows">
            <span class="left-arrow" role="button" @click="scrollButton('left')" @mousedown="scrollButton('left')">
              <i-icon icon="prime:angle-left" width="25px" />
            </span>
            <span class="right-arrow" role="button" @click="scrollButton('right')" @mousedown="scrollButton('right')">
              <i-icon icon="prime:angle-right" width="25px" />
            </span>
          </div>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info text-center"  v-for="skill in domain.core[activeEl].skills" :key="skill.id">
            <span  @click="gotoManagement(skill.code)"
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag" v-text="skill.level"></span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2" v-text="skill.name"></h6>
          </div>

          <!-- <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div>

          <div class="manager-info text-center">
            <span
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag">Level 1</span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2">Surface Cementing</h6>
          </div> -->
        </div>
      </el-collapse-item>

    </el-collapse>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      activeNames: [0,1,2],
      activeEl: 0,
      percentage: 30,
      customColor: "#0040A1",
      skills: []
    };
  },

  computed: {
    ...mapState("manager", {
      competencies: (state) => state.competencies
    })
  },

  methods: {
    ...mapActions("manager", ["getManagerCompetency"]),

    handleChange(val) {
      console.log(val);
    },

    switchActive(domainId, item) {
      console.log(domainId, item);
      this.activeEl = item;
      // const domain = this.competencies[domainId]
      // domain.core.skills = domain.core.find(element => element.name == item.name)?.skills
      // // console.log( domain.core.skill );
    },

    gotoManagement(){
      this.$router.push({name: 'manage-assessment'});
    }

  },


  mounted(){
    this.getManagerCompetency()
  }


};
</script>