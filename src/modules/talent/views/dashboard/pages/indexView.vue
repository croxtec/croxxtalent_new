<template>
  <div id="home" class="pb-4">
    <div class="d-flex main-home pb-4" style="gap: 20px">
      <div
        :class="{ 'w-100': !resumePercentage, 'w-75': resumePercentage }"
        class="d-flex flex-column"
        style="gap: 20px"
      >
        <ProfileCard />
        <div class="row" style="gap: 20px">
          <CompetenciesCard
            :class="{
              'flex-30': !resumePercentage,
              'flex-50': resumePercentage,
            }"
            class=""
            v-for="skill in recommended.competency"
            :key="skill.id"
            :cxCompetence="skill"
          />
          <!-- <CompetenciesCard :class="{ 'flex-30' : !resumePercentage,  'flex-50' : resumePercentage}" class="" v-for="skill in recommended.competency" :key="skill.id" :cxCompetence="skill"/> -->
        </div>
      </div>
      <div v-if="resumePercentage" class="w-25">
        <SideBar />
      </div>
    </div>

    <!-- Recommended Jobs -->
    <div class="my-4">
      <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class="header--text">Recommended Jobs</h5>
        <div
          class="d-lg-flex align-items-center see--all linker"
          @click.prevent="$router.push('/recommended')"
          style="gap: 4px"
        >
          <span>Show all</span>
          <i class="isax isax-arrow-right-1"></i>
        </div>
      </div>
      <CxJobs class="mt-3" :jobsCount="4" />
    </div>

    <!-- Top Employers  -->
    <div class="my-4">
      <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class="header--text">Top Employers</h5>
        <div
          class="d-lg-flex align-items-center see--all linker"
          @click.prevent="$router.push('/jobs')"
          style="gap: 4px"
        >
          <span>Show all </span>
          <i class="isax isax-arrow-right-1"></i>
        </div>
      </div>
      <CxEmployers class="mt-3" :employersCount="4" />
    </div>

    <!-- Courses  -->
    <div class="my-4">
      <!-- @click.prevent="$router.push('/training')" -->
      <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class="header--text">Courses</h5>
        <div
          class="d-lg-flex align-items-center see--all linker"
          style="gap: 4px"
        >
          <span>Coming Soon</span>
          <!-- <i class="isax isax-arrow-right-1"></i> -->
          <!-- <sup class="coming-soon">soon</sup> -->
        </div>
      </div>
      <!-- <CxEmployers class="mt-3" :employersCount="4"/> -->

      <CxTraining class="mt-3" :trainingCount="4" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import CxEmployers from "@/components/cards/cxEmployers.vue";
import CxJobs from "@/components/cards/cxJobs.vue";
import CxJobGrid from "../../jobs/components/CxJobGrid.vue";
import ProfileCard from "../components/ProfileCard.vue";
import SideBar from "../components/SideBar.vue";
import CxTraining from "@/components/cards/cxTraining.vue";
import CompetenciesCard from "@/components/cards/CompetenciesCard.vue";

export default {
  components: {
    ProfileCard,
    SideBar,
    CxJobs,
    CxEmployers,
    CxTraining,
    CompetenciesCard,
    CxJobGrid,
  },

  data() {
    return {
      // resumePercentage: false,
    };
  },

  methods: {
    ...mapActions("competencies", ["getRecommendedCompetency"]),
    ...mapActions("cvs", ["list"]),
  },

  computed: {
    ...mapState("competencies", {
      recommended: (state) => state.recommended,
    }),

    ...mapState("cvs", {
      cvs: (state) => state.data,
      resumePercentage: (state) => (state.data.progress >= 80 ? true : false),
    }),
  },

  mounted() {
    this.getRecommendedCompetency();
  },

  beforeMount() {
    this.list();
  },
};
</script>

<style></style>

<style>
@media (max-width: 990px) {
  .main-home {
    flex-direction: column !important;
  }

  .w-75,
  .w-25 {
    width: 100% !important;
  }
  .flex-30,
  .flex-50 {
    flex-basis: 100% !important;
  }
}
.flex-50 {
  flex-basis: 48%;
}
.flex-30 {
  flex-basis: 32%;
}
</style>
