<template>
  <div id="home" class="pb-4">
   <div class="d-flex pb-4" style="gap:20px">
    <div class="w-75 d-flex flex-column" style="gap:20px">
      <ProfileCard/>
      <div class="d-flex" style="gap:20px">
        <CompetenciesCard class="w-100"/>
        <CompetenciesCard class="w-100"/>
      </div>
      <div class="d-flex" style="gap:20px">
        <CompetenciesCard class="w-100"/>
        <CompetenciesCard class="w-100"/>
      </div>
    </div>
    <div class="w-25">
      <SideBar/>
    </div>
   </div>

   <!-- Recommended Jobs -->
   <div>
    <h5 class="header--text">Recommended Jobs</h5>
    <CxJobs class="mt-3" :jobsCount="4"/>
   </div>

   <!-- Top Employers  -->
   <div class="mt-4">
    <h5 class=" header--text">Top Employers</h5>
    <CxEmployers class="mt-3" :employersCount="4"/>
   </div>

    <!-- Courses  -->
    <div class="mt-4">
    <h5 class=" header--text">Courses</h5>
    <!-- <CxEmployers class="mt-3" :employersCount="4"/> -->
    <CxTraining class="mt-3" :trainingCount="4"/>
   </div>
  </div>
</template>

<script>
import CxEmployers from '@/components/cards/cxEmployers.vue';
import CxJobs from '@/components/cards/cxJobs.vue'
import ProfileCard from '../components/ProfileCard.vue'
import SideBar from '../components/SideBar.vue'
import CxTraining from '@/components/cards/cxTraining.vue';
import CompetenciesCard from '../components/CompetenciesCard.vue';
export default {
  components: { ProfileCard, SideBar, CxJobs, CxEmployers, CxTraining, CompetenciesCard },

}
</script>

<style>

</style>