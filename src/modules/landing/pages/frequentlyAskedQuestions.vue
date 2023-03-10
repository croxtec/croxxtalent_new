<template>
  <div>
    <FaqHeader />

    <section class="container">
      <div class="faq-cards">
        <div class="faq-card">
          <img src="@/assets/icons/cv-d.png" alt="" />
          <div>
            <h5>C.V Downloads</h5>
            <p class="body--text">
              Learn more on how you can download free and customizable C.V.
              templates to showcase your skills and experience to potential
              employers.
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/competency.png" alt="" />
          <div>
            <h5>Competency Test</h5>
            <p class="body--text">
              Explore our competency test options and learn how they can ensure
              you find the best fit for the job as an employer, as well as
              assessing your skills and knowledge as a job seeker.
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/application.png" alt="" class="img-fluid" />
          <div>
            <h5>Application Management</h5>
            <p class="body--text">
              See how you can streamline your job or talent search by managing
              all of your job applications in one place with our application
              management system.
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/recruitment.png" alt="" class="img-fluid" />
          <div>
            <h5>Recruiting Process</h5>
            <p class="body--text">
              Get insider tips on how to navigate the recruiting process, from
              crafting the perfect resume to acing the interview.
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/cv-d.png" alt="" class="img-fluid" />
          <div>
            <h5>Skill Assessment</h5>
            <p class="body--text">
              Find out how you can identify the strengths and weaknesses of
              talents with our skill assessments and how jobseekers can receive
              customized training and development plans.
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/cv-d.png" alt="" class="img-fluid" />
          <div>
            <h5>Staffing</h5>
            <p class="body--text">
              See how we handle your staffing needs with our comprehensive
              staffing services, including recruitment, onboarding, and
              performance management.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-list mb-5 container">
      <h5 class="mb-4">Frequently asked questions</h5>
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <h6>What is CroxxTalent, and what services do you offer?</h6>
          </template>
          <div class="mr-5">
            <p>
              CroxxTalent is a talent management and competence vetting platform
              that connects qualified talent with top employers in the industry.
              We offer a range of services, including job postings, talent
              management tools, CV builder, and a competent vetting system.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template slot="title">
            <h6>How do I create an account with CroxxTalent?</h6>
          </template>
          <div class="mr-5">
            <p>
              Creating an account with CroxxTalent is easy. Simply visit our
              website and click on the "Sign Up" button in the top right corner
              of the page. Follow the instructions to complete the registration
              process.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="3">
          <template slot="title">
            <h6>Is CroxxTalent free to use?</h6>
          </template>
          <div class="mr-5">
            <p>
              Creating an account with CroxxTalent is free. However, some of our
              services, such as our competent vetting system, may require
              payment
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="4">
          <template slot="title">
            <h6>How does the competent vetting system work?</h6>
          </template>
          <div class="mr-5">
            <p>
              Our competent vetting system evaluates a candidate's skills and
              experience to ensure they meet the requirements for a specific
              job. Candidates are assessed using a range of tests and
              assessments, and the results are used to determine their
              suitability for the job.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="5">
          <template slot="title">
            <h6>How do I post a job on CroxxTalent?</h6>
          </template>
          <div class="mr-5">
            <p>
              Posting a job on CroxxTalent is easy. Simply log in to your
              account as an employer, click on the "Campaign" button in the left
              side menu, and follow the instructions to complete the job posting
              process.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="6">
          <template slot="title">
            <h6>How do I search for candidate on CroxxTalent?</h6>
          </template>
          <div class="mr-5">
            <p>
              Searching for candidates on CroxxTalent is easy. Simply log in to
              your account, click on the "Search Candidates" button, and use our
              advanced search filters to find the best candidates for your job.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="7">
          <template slot="title">
            <h6>How do I contact a candidate on CroxxTalent?</h6>
          </template>
          <div class="mr-5">
            <p>
              Once you've found a candidate you're interested in, you can
              contact them directly through our messaging system
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="8">
          <template slot="title">
            <h6>How do I use the CV builder on CroxxTalent?</h6>
          </template>
          <div class="mr-5">
            <p>
              Using our CV builder is easy. Simply visit our Build Your CV page,
              enter your details, choose a template, and customize your CV to
              suit your needs.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="9">
          <template slot="title">
            <h6>
              How can I contact CroxxTalent if I have any questions or concerns?
            </h6>
          </template>
          <div class="mr-5">
            <p>
              If you have any questions or concerns, you can contact us through
              our contact form, and one of our dedicated customer service
              representatives will get back to you as soon as possible.
            </p>
            <p>
              At CroxxTalent, we're committed to providing our users with the
              best possible service. If you have any additional questions or
              concerns, please don't hesitate to contact us.
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </section>

    <news-letter />
  </div>
</template>

<script>
import newsLetter from "@/components/forms/newsLetter.vue";
import FaqHeader from "../components/faq/faqHeader.vue";
export default {
  components: { newsLetter, FaqHeader },
};
</script>

<style scoped>
@media only screen and (max-width: 572px) {
  .body--text {
    font-size: 10px;
  }
  .faq-card h5 {
    font-size: 14px !important;
  }
  .faq-card {
    padding: 10px 10px !important;
  }
  .col-sm {
    margin-top: 10px;
  }
}
</style>
