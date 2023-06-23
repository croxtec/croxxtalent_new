<template>
    <div>
      <section class="resources-card pt-5">
        <h4 class="text-center font-weight-bold text-white" style="color:var(--primary-color)">Our Ethos</h4>
        <div class="container">
          <div class="resource-card">
            <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/innovation.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
  
            <div data-aos="zoom-in-left w-100">
              <h4>Innovation</h4>
              <p class="body--text">
                At CroxxTalent, we think outside the box to develop unique solutions for our employees, clients, and the organization.
              </p>
              <div class="mt-3">
                <button class="outline-btn">
                  Try now
                </button>
              </div>
            </div>
          </div>
          <div class="colored-resource-card">
            <div class="resource-card">
              <div data-aos="fade-right">
                <h4>Integrity</h4>
                <p class="body--text">
                    Workplace integrity means doing the right thing when nobody's watching. It fosters teamwork and collaboration, which leads to increased productivity and success.
                </p>
                <div class="mt-3">
                  <button class="outline-btn">
                    Try now
                  </button>
                </div>
              </div>
              <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/integrity.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
            </div>
          </div>
          <div class="resource-card">
            <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/data-driven-new.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
            <div data-aos="fade-up-left">
              <h4>Data-Driven <br> Decision-making </h4>
              <p class="body--text">
                We use cutting-edge technology to provide both employers and job seekers with the insights they need to succeed.
              </p>
              <div class="mt-3">
                <button class="outline-btn">
                  Try now
                </button>
              </div>
            </div>
          </div>
          <div class="colored-resource-card">
            <div class="resource-card">
              <div data-aos="fade-down-right">
                <h4>Customer Satisfaction</h4>
                <p class="body--text">
                    As a “People-first” company, client satisfaction is our top priority. We're dedicated to exceeding expectations and providing top-notch solutions.
                </p>
                <div class="mt-3">
                  <button class="outline-btn">
                    Try now
                  </button>
                </div>
              </div>
              <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/customer-satisfaction.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
            </div>
          </div>
          <div class="resource-card">
            <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/productivity.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <h4>Productivity/ Results-oriended</h4>
              <p class="body--text">
                By focusing on results and maximizing resources, we can ensure that our clients are satisfied and our services are in demand.
              </p>
              <div class="mt-3">
                <button class="outline-btn">
                  Try now
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="colored-resource-card">
            <div class="resource-card">
              <div data-aos="fade-right">
                <h4>Build a CV</h4>
                <p class="body--text">
                  Create a stunning CV that highlights your skills and experience
                  with our platform. Our tool makes it easy to showcase your
                  achievements and stand out from the crowd. Get noticed by
                  potential employers and land your dream job.
                </p>
                <div class="mt-3">
                  <button class="outline-btn">
                    Try now
                  </button>
                </div>
              </div>
              <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/build.png"
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
            </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    components: {
    },
    data() {
      return {};
    },
  };
  </script>
  
  <style>
  .img-area {
    inset: 0;
    z-index: 1;
    /* width: 350px; */
    /* height: 350px; */
    border-radius: 32px;
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    place-items: center;
    background-color: #ffffff3d;
    backdrop-filter: blur(200px);
    box-shadow: 20px -80px 100px rgba(255, 255, 255, 0.2),
      -40px 60px 100px rgba(255, 255, 255, 0.2);
  }
  
  /* RESOURCES */
  .resources-card {
    background-color: var(--primary-color);
  }
  
  .resources-card .container {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    gap: 100px;
    padding-top: 80px;
    padding-bottom:  150px;
  }
  
  .resource-card {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: row-reverse;
    gap: 100px;
    justify-content: center;
    align-items: center;
  }
  
  .resource-card div {
      width: 100%;
  }
  
  .resource-card h4 {
    color: #fff;
    font-weight: 600 !important;
  }
  
  .resource-card .body--text {
    color: #fff;
    font-size: 13px;
    margin-top: 10px !important;
    font-weight: 300;
  }
  
  .img-area img {
    width: 80%;
    height: 350px;
    object-fit: contain;
    -o-object-fit: contain;
    object-position: center;
    -o-object-position: center;
    /* border-radius: 20px; */
  }
  
  .resource-card div h4 {
    font-weight: 500;
  }

  @media (max-width: 990px) {
  .resource-card {
    flex-direction: column;
    gap: 20px;
  }
}
  
  </style>
  