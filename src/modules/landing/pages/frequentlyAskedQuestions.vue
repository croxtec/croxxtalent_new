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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/competency.png" alt="" />
          <div>
            <h5>Competency Test</h5>
            <p class="body--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/application.png" alt="" />
          <div>
            <h5>Application Management</h5>
            <p class="body--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/recruitment.png" alt="" />
          <div>
            <h5>Recruiting Process</h5>
            <p class="body--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/cv-d.png" alt="" />
          <div>
            <h5>Skill Assessment</h5>
            <p class="body--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
        <div class="faq-card">
          <img src="@/assets/icons/cv-d.png" alt="" />
          <div>
            <h5>Staffing</h5>
            <p class="body--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-list mb-5 container">
      <h5 class="mb-4">Frequently asked questions</h5>
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template slot="title"> <h6>Why croxxtalent?</h6> </template>
          <div>
            <p>
              Go to Estimate Fees on Cowrie 's homepage on the website to
              estimate transfer costs and see current exchange rate. You can
              estimate fees for sending online or via the website.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template slot="title"> <h6>Why croxxtalent?</h6> </template>
          <div>
            <p>
              Go to Estimate Fees on Cowrie 's homepage on the website to
              estimate transfer costs and see current exchange rate. You can
              estimate fees for sending online or via the website.
            </p>
          </div>
        </el-collapse-item>

        <el-collapse-item name="3">
          <template slot="title"> <h6>Why croxxtalent?</h6> </template>
          <div>
            <p>
              Go to Estimate Fees on Cowrie 's homepage on the website to
              estimate transfer costs and see current exchange rate. You can
              estimate fees for sending online or via the website.
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
