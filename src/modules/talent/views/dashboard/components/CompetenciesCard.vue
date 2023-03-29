<template>
  <div>
    <div class="skills-data bg-white">
            <div>
              <h5>Surface Cementing</h5>
              <span class="accessment-status mt-2">Intermediate</span>
            </div>
            <div class="assesement-level mt-2">
              <span>0% Complete</span>
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
              ></el-progress>
            </div>
            <div class="mt-3 d-flex align-items-center" style="gap: 20px">
              <button class="primary--button">Take Test</button>
              <button class="primary--button_border">Preview</button>
            </div>
          </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>