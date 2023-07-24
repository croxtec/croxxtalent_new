<template>
  <div class="skills">

    <div v-if="loading">
      <span>Retrieving Data</span>
      <i-icon
        icon="eos-icons:three-dots-loading"
        style="color: var(--primary-500)"
        width="60px"
      />
    </div>
    <div v-else>
      <div
        class="d-flex justify-content-center"
        v-if="skills.length === 0"
      >
        <img src="@/assets/img/empty.svg" alt="" />
      </div>
      <div v-else>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item v-for="(domain, key_domain) in skills" :key="domain.name" :title="domain.name" :name="key_domain">
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
            <div class="skills-content mt-3">
              <CompetenciesCard class="col-md-4" v-for="skill in domain.core[ competency[key_domain]?.activeCore ]?.skills" :key="skill.id" :cxCompetence="skill"/>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CompetenciesCard from '@/components/cards/CompetenciesCard.vue';

export default {
  components: {  CompetenciesCard },

  data() {
    return {
      activeNames: [0, 1, 2],
      customColor: "#0040A1",
      percentage: 30,
      competency: []
    };
  },
  methods: {
    ...mapActions("competencies", ["getCompetencySkills"]),

    handleChange(val) {
      console.log(val);
    },
    assessment() {
      this.$router.push("/assessment");
    },
    switchActive(domainId, item) {
      this.competency[domainId].activeCore = item
    },
  },

  computed: {
    ...mapState("competencies", {
      skills: (state) => state.skills,
      loading: (state) => state.loading,
    })
  },

  mounted(){
    this.getCompetencySkills().then(()=> {
      this.skills.map(() =>  this.competency.push({ activeCore: 0  }));
    })
  }
};
</script>

<style></style>
