<template>
  <div>
    <ServicesHeader />
    <section class="resources-card">
      <div class="container">
        <div class="resource-card">
          <div class="w-100">
            <div class="img-area p-5">
              <img
                src="@/assets/img/competency.png"
                alt=""
                data-aos="zoom-in-up"
              />
            </div>
          </div>

          <div data-aos="zoom-in-left w-100">
            <h4>Competency Management</h4>
            <p class="body--text">
              Employers often struggle to find qualified workers with the
              necessary job competencies. CroxxTalent solves this by identifying
              the specific competencies for energy industry roles, allowing
              employers to validate employee competencies, track progress, and
              keep records. Employees can also manage their own competencies
              through our system.
            </p>
            <div class="mt-3">
              <button class="outline-btn">Try now</button>
            </div>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="resource-card">
            <div data-aos="fade-right">
              <h4>Global Mobility</h4>
              <p class="body--text">
                In addition to supplying our highly competent professionals who
                align with your talent management goals, we can also assist you
                with planning and managing your global workforce, ensuring
                smooth cross-border operations. We also help employees settle
                into their new job.
              </p>
              <div class="mt-3">
                <button class="outline-btn">Try now</button>
              </div>
            </div>
            <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/global.png"
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
              <img src="@/assets/img/talent.png" alt="" data-aos="zoom-in-up" />
            </div>
          </div>
          <div data-aos="fade-up-left">
            <h4>Talent Acquisition</h4>
            <p class="body--text">
              Our platform helps you find the best talent for your organization.
              We use advanced assessment tools and data analytics to identify
              high-potential candidates who will thrive in your organization.
              With our platform, you can build a strong talent pipeline and make
              better hiring decisions.
            </p>
            <div class="mt-3">
              <button class="outline-btn">Try now</button>
            </div>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="resource-card">
            <div data-aos="fade-down-right">
              <h4>Talent Development</h4>
              <p class="body--text">
                We aim to enhance employees' knowledge, skills, and attitudes to
                drive organizational success. At CroxxTalent, we provide
                top-quality training and assessment to help talents develop
                their competencies, from basic to expert levels. We also offer a
                platform for external training institutes and freelancers to
                provide professional training to our talents.
              </p>
              <div class="mt-3">
                <button class="outline-btn">Try now</button>
              </div>
            </div>
            <div class="w-100">
              <div class="img-area p-5">
                <img
                  src="@/assets/img/talent-dev.png"
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
                src="@/assets/img/payroll.png"
                alt=""
                data-aos="zoom-in-up"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <h4>Payroll Management</h4>
            <p class="body--text">
              We provide comprehensive payroll management services to help you
              streamline your HR processes. Our team handles all payroll-related
              tasks, from processing payments to ensuring compliance with local
              regulations. We make sure your employees are paid accurately and
              on time, every time.
            </p>
            <div class="mt-3">
              <button class="outline-btn">Try now</button>
            </div>
          </div>
        </div>
        <div class="colored-resource-card">
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
                <button class="outline-btn">Try now</button>
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
        </div>
      </div>
    </section>
    <news-letter />
  </div>
</template>

<script>
import NewsLetter from "@/components/forms/newsLetter.vue";
import ServicesHeader from "../components/servicesHeader.vue";
export default {
  components: {
    ServicesHeader,
    NewsLetter,
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
  padding-top: 150px;
  padding-bottom: 150px;
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
