<template>
  <div class="competencies--cards">
    <div class="competencies--card" v-for="item in 8" :key="item">
      <div class="">
        <div class="icon">
          <img src="@/assets/img/logoicon.png" width="25" alt="" />
        </div>
        <div>
          <h6 class="mt-3" style="font-weight: 600">Petroleum</h6>
          <div style="font-size: 13px">
            <span>Talent: </span>
            <span>344</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
