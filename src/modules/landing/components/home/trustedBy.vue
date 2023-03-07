<template>
  <div class="trusted--by">
    <h1 class="text-center text-white">
      The go-to platform for the elite <br />
      <!-- around the world -->
    </h1>
    <div class="container mt-4">
      <div class="body pb-3">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src="@/assets/icons/1.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/2.png" alt="" width="100" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/3.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/4.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/5.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/6.png" alt="" width="150" />
            </div>

            <div class="slide">
              <img src="@/assets/icons/1.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/2.png" alt="" width="100" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/3.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/4.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/5.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/6.png" alt="" width="130" />
            </div>

            <div class="slide">
              <img src="@/assets/icons/1.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/2.png" alt="" width="100" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/3.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/4.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/5.png" alt="" width="130" />
            </div>
            <div class="slide">
              <img src="@/assets/icons/6.png" alt="" width="130" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide img {
  margin-right: 5rem;
}
.body {
  align-items: center;
  /* background: #E3E3E3; */
  display: flex;
  /* height: 100vh; */
  justify-content: center;
}
@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 2));
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 2));
  }
}
.slider {
  /* background: white; */
  /* border-radius: 30px; */
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  /* height: 100px; */
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider img {
  width: 80px;
  height: 100%;
}
.slider::before,
.slider::after {
  /* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
  content: "";
  height: 100px;
  position: absolute;
  /* width: 200px; */
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
/* .slider .slide {
    height: 100px;
    width: 250px;
  } */
.slide-track {
  display: flex;
  align-items: center;
}
</style>
