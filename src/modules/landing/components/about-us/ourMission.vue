<template>
  <div>
    <div class="container">
      <div class="our-mission-container">
        <div class="my-5 w-100 our-mission-cont">
          <img
            width="100%"
            src="@/assets/img/mission-img.png"
            alt=""
            class="img-fluid"
            data-aos="zoom-in"
            data-aos-duration="3000"
          />
          <div class="numbers--card">
            <div class="numbers-content">
              <div class="text-center">
                <h1>200+</h1>
                <h6>Talents</h6>
              </div>
              <div class="text-center">
                <h1>120+</h1>
                <h6>Contractors</h6>
              </div>
              <div class="text-center">
                <h1>300+</h1>
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="our-mission w-100" data-aos="fade-left" data-aos-duration="3000">
          <h3 class="">Our Why</h3>
          <p
            class="desc--text text-left w-100 mt-3"
            style="line-height: 1.5; font-size: 14px"
          >
            CroxxTalent was founded by a group of experienced professionals who
            recognized the need for a more efficient and effective way for
            energy companies to vet, hire and manage their talent. With a deep
            understanding of the challenges faced by both job seekers and
            employers, our team set out to create a platform that could make a
            real difference in the world of talent acquisition and management.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-mission {
  /* margin-top: 200px; */
}

@media only screen and (max-width: 572px) {
  .img-fluid {
    width: 90%;
  }
  .our-mission {
    /* margin-top: 20px; */
  }
  .numbers--card {
    width: 80%;
    left: 20%;
    height: 7em;
    bottom: -50px;
  }

  .numbers--card .numbers-content h1 {
    font-weight: 600;
    font-size: 24px;
  }

  .numbers--card .numbers-content h6 {
    font-weight: 300;
    font-size: 12px;
  }
}
</style>
