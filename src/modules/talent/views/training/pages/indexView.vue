<template>
  <div id="training" class="pb-4">
    <div class="my-4 d-flex align-items-center justify-content-between">
      <h4 class="header--text">Courses</h4>
      <div class="input-field">
        <i-icon icon="ri:search-line" />
        <input type="search" name="" id="" placeholder="Search">
      </div>
    </div>
    <CxTraining :training-count="16"/>
  </div>
</template>

<script>
import CxTraining from '@/components/cards/cxTraining.vue';

export default {
    components: { CxTraining }
}
</script>

<style>

</style>