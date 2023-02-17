<template>
  <div class="error-404">
    <div>
      <img src="@/assets/img/error-404.svg" alt="" />
      <div class="text-center">
        <button class="primary--button" @click="$router.go(-1)">Go Back</button>
      </div>
    </div>
  </div>
</template>
