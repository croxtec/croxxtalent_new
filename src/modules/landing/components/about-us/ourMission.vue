<template>
  <div class="">
    <div class="numbers-card">
            <div class="numbers-content">
              <div class="text-center">
                <span><i-icon icon="fluent:people-24-regular" /></span>
                <h6>Talents</h6>
                <animated-number
                  :value="value"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>

              <div class="divider"></div>

              <div class="text-center">
                <span><i-icon icon="iconamoon:briefcase-light" /></span>
                <h6>Contractors</h6>
                <animated-number
                  :value="value2"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
              </div>

              <div class="divider"></div>

              <div class="text-center">
                <span><i-icon icon="fontisto:smiling" /></span>
                <h6>Happy Clients</h6>
                <animated-number
                  :value="value3"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
                
              </div>
            </div>
          </div>
    <!-- <div class="container">
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
                <animated-number
                  :value="value"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
                <h6>Talents</h6>
              </div>
              <div class="text-center">
                <animated-number
                  :value="value2"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
                <h6>Contractors</h6>
              </div>
              <div class="text-center">
                <animated-number
                  :value="value3"
                  :formatValue="formatToPrice"
                  :duration="duration"
                />
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>
        </div>

        <div
          class="our-mission w-100"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 200,
      value2: 120,
      value3: 300,
      duration: 5000,
    };
  },
  methods: {
    formatToPrice(value) {
      return `<h1>${Number(value).toFixed(0)}+</h1>`;
    },
  },
};
</script>

<style>
.numbers-card {
    background: url('@/assets/img/hero-g-g.svg');
    height: 500px;
    display: grid;
    display: -ms-inline-grid;
    display: -moz-grid;
    place-items: center;
    background-color: var(--primary-color);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
}

.divider {
  width: 0.7px;
  background:#fff;
  height: 100%;
}

.numbers-card .numbers-content h6 {
  text-transform: uppercase;
  font-size: 11px !important;
  letter-spacing: 2px;
}

.numbers-card .numbers-content{
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    height: 200px;
}

.numbers-card .numbers-content h1, .numbers-card .numbers-content h6, .numbers-card .numbers-content span {
    color: #fff;
}

.numbers-card .numbers-content span {
  font-size: 20px;
}

.numbers-card .numbers-content h1 {
    font-weight: 600;
}

.numbers-card .numbers-content h6 {
    font-weight: 300;
    font-size: 14px;
}

.our-mission {
  /* margin-top: 200px; */
}

@media only screen and (max-width: 572px) {
  .numbers-card .numbers-content {
    flex-direction: column;
    gap: 20px;
    height: auto;
  }

  .img-fluid {
    width: 90%;
  }

  .our-mission {
    /* margin-top: 20px; */
  }
  .numbers--card {
    width: 80%;
    height: 7em;
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
