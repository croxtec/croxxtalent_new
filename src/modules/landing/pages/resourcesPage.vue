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
              CroxxTalent boastsLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos Lorem ipsum Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            </p>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="container resource-card">
            <div>
              <h5>Create Unique CV</h5>
              <p class="body--text">
                CroxxTalent boastsLorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos Lorem ipsum Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
              </p>
            </div>
            <img src="@/assets/img/resources/2.png" alt="" />
          </div>
        </div>
        <div class="resource-card container">
          <img src="@/assets/img/resources/3.png" alt="" />
          <div>
            <h5>Global Mobility</h5>
            <p class="body--text">
              CroxxTalent boastsLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos Lorem ipsum Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            </p>
          </div>
        </div>
        <div class="colored-resource-card">
          <div class="container resource-card">
            <div>
              <h5>Total Acquisition</h5>
              <p class="body--text">
                CroxxTalent boastsLorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos Lorem ipsum Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero
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
              CroxxTalent boastsLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos Lorem ipsum Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            </p>
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
