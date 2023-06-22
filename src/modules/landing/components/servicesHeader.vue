<template>
  <div class="services-page">
    <div class="container">
      <h1>Everything you need to get ahead in the world of work.</h1>
    </div>
  </div>
</template>

<style>
.services-page .container h1 {
  font-weight: 700;
  width: 50%;
  text-align: center;
}

.services-page .container {
  display: flex;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 550px;
  padding-top: 60px;
  background: url("@/assets/img/services-hero.png");
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.services-page .container img {
  /* height: 100%; */
  width: 80%;
}

@media (max-width: 990px) {
  .services-page .container {
    height: 400px;
    background-size: auto 65%;
    padding-top: 35px;
  }

  .services-page .container h1 {
    width: 100%;
  }
}

</style>
