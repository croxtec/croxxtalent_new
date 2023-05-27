<template>
  <div class="skills">

    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(domain, key_domain) in competencies" :key="domain.name" :title="domain.name" :name="key_domain">
        <div class="skill-header">
          <div class="skills-list" :id="key_domain">
            <span
              role="button"
              @click="switchActive(key_domain, key_core)"
              :class="{ active: competency[key_domain]?.activeCore === key_core }"
              v-for="(core, key_core) in domain.core"
              :key="key_core"
              > {{ core.name }} </span
            >
          </div>
          <div class="arrows">
            <span class="left-arrow" role="button" @click="scrollButton('left', key_domain)" @mousedown="scrollButton('left', key_domain)">
              <i-icon icon="prime:angle-left" width="25px" />
            </span>
            <span class="right-arrow" role="button" @click="scrollButton('right', key_domain)" @mousedown="scrollButton('right', key_domain)">
              <i-icon icon="prime:angle-right" width="25px" />
            </span>
          </div>
        </div>
        <div class="manager-data mt-3">
          <div class="manager-info text-center"  v-for="skill in domain.core[ competency[key_domain]?.activeCore ]?.skills" :key="skill.id">
            <span  @click="gotoManagement(skill.code)"
              class="d-flex align-items-center justify-content-center"
              style="gap: 4px"
            >
              <span class="manager-tag" v-text="skill.level"></span>
              <span class="manager-count">20</span>
            </span>
            <h6 class="manager-name mt-2" v-text="skill.name"></h6>
          </div>
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
      competency: []
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
      this.competency[domainId].activeCore = item
    },

    scrollButton(direction, domain_container) {
      if (direction === "left") {
        document.getElementById(domain_container).scrollLeft -= 50;
      } else {
        document.getElementById(domain_container).scrollLeft += 50;
      }
    },

    gotoManagement(code){
      this.$router.push('/manage-assessment/'+code);
    }

  },


  mounted(){
    this.getManagerCompetency().then(()=> {
      this.competencies.map(() =>  this.competency.push({ activeCore: 0  }));
    })
  }


};
</script>