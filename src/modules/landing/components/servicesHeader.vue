<template>
  <div class="services-page">
    <div class="container">
      <div class="text-center mx-auto">
        <span>Everything you need to get ahead in the world of work.</span>
      </div>
    </div>
  </div>
</template>

<style>
.services-page .container span {
  font-weight: 700;
  font-size: 40px;
  width: 50%;
  text-align: center;
}

.services-page .container {
  /* display: flex;
  display: inline-flex;
  flex-direction: column;
  align-items: center; */
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
