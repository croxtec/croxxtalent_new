<template>
  <div>
    <ResourcesHeader />
    <section class="py-5">
      <div class="resources-card">
        <div class="resource-card container">
          <img src="@/assets/img/resources/1.png" alt="" />
          <div>
            <h5>Competency Management</h5>
            <p class="body--text">
              Employers often struggle to find qualified workers with the
              necessary job competencies. CroxxTalent solves this by identifying
              the specific competencies for energy industry roles, allowing
              employers to validate employee competencies, track progress, and
              keep records. Employees can also manage their own competencies
              through our system.
            </p>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="container resource-card">
            <div>
              <h5>Global Mobility</h5>
              <p class="body--text">
                In addition to supplying our highly competent professionals who
                align with your talent management goals, we can also assist you
                with planning and managing your global workforce, ensuring
                smooth cross-border operations. We also help employees settle
                into their new job.
              </p>
            </div>
            <img src="@/assets/img/resources/3.png" alt="" />
          </div>
        </div>
        <div class="resource-card container">
          <img src="@/assets/img/resources/4.png" alt="" />
          <div>
            <h5>Talent Acquisition</h5>
            <p class="body--text">
              Our platform helps you find the best talent for your organization.
              We use advanced assessment tools and data analytics to identify
              high-potential candidates who will thrive in your organization.
              With our platform, you can build a strong talent pipeline and make
              better hiring decisions.
            </p>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="container resource-card">
            <div>
              <h5>Talent Development</h5>
              <p class="body--text">
                We aim to enhance employees' knowledge, skills, and attitudes to
                drive organizational success. At CroxxTalent, we provide
                top-quality training and assessment to help talents develop
                their competencies, from basic to expert levels. We also offer a
                platform for external training institutes and freelancers to
                provide professional training to our talents.
              </p>
            </div>
            <img src="@/assets/img/resources/4.png" alt="" />
          </div>
        </div>
        <div class="resource-card container">
          <img src="@/assets/img/resources/5.png" alt="" />
          <div>
            <h5>Payroll Management</h5>
            <p class="body--text">
              We provide comprehensive payroll management services to help you
              streamline your HR processes. Our team handles all payroll-related
              tasks, from processing payments to ensuring compliance with local
              regulations. We make sure your employees are paid accurately and
              on time, every time.
            </p>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="container resource-card">
            <div>
              <h5>Build a CV</h5>
              <p class="body--text">
                Create a stunning CV that highlights your skills and experience
                with our platform. Our tool makes it easy to showcase your
                achievements and stand out from the crowd. Get noticed by
                potential employers and land your dream job.
              </p>
            </div>
            <img src="@/assets/img/resources/2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <news-letter />
  </div>
</template>

<script>
import NewsLetter from "@/components/forms/newsLetter.vue";
import ResourcesHeader from "../components/resourcesHeader.vue";
export default {
  components: {
    ResourcesHeader,
    NewsLetter,
  },
};
</script>
