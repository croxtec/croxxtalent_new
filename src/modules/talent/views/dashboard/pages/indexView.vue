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
   <div class="my-4">
    <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class="header--text">Recommended Jobs</h5>
        <div class="d-lg-flex align-items-center see--all"  
          @click.prevent="$router.push('/recommended')"
          style="gap: 4px; margin-right: 3em;">
          <span>Show all</span>
          <i class="isax isax-arrow-right-1"></i>
        </div>
    </div>
    <CxJobs class="mt-3" :jobsCount="4"/>
    <!-- <CxJobGrid class="mt-3" /> -->
   </div>

   <!-- Top Employers  -->
   <div class="my-4">
    <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class=" header--text">Top Employers</h5>
        <div class="d-lg-flex align-items-center see--all" 
          @click.prevent="$router.push('/jobs')"
          style="gap: 4px; margin-right: 3em;">
          <span>Show all </span>
          <i class="isax isax-arrow-right-1"></i>
        </div>
    </div>
    <CxEmployers class="mt-3" :employersCount="4"/>
   </div>

    <!-- Courses  -->
  <div class="my-4">
    <div class="top d-flex align-items-center justify-content-between mb-4">
        <h5 class=" header--text">Recommended Courses</h5>
        <div class="d-lg-flex align-items-center see--all" 
          @click.prevent="$router.push('/training')"
          style="gap: 4px; margin-right: 3em;">
          <span>Show all </span>
          <i class="isax isax-arrow-right-1"></i>
        </div>
    </div>
    <!-- <CxEmployers class="mt-3" :employersCount="4"/> -->
    <CxTraining class="mt-3" :trainingCount="4"/>
   </div>
  </div>
</template>

<script>
import CxEmployers from '@/components/cards/cxEmployers.vue';
import CxJobs from '@/components/cards/cxJobs.vue'
import CxJobGrid from '../../jobs/components/CxJobGrid.vue'
import ProfileCard from '../components/ProfileCard.vue'
import SideBar from '../components/SideBar.vue'
import CxTraining from '@/components/cards/cxTraining.vue';
import CompetenciesCard from '../components/CompetenciesCard.vue';
export default {
  components: { ProfileCard, SideBar, CxJobs, CxEmployers, CxTraining, CompetenciesCard, CxJobGrid },

}
</script>

<style>

</style>