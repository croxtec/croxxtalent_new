<template>
  <div id="cv" ref="elementToDownload">
    <div class="main-cv-container">
      <div class="left-cv-container">
        <!-- Work Experience  -->
        <div>
          <div class="cv-header">
            <div class="cv-header-text">work experience</div>
            <div class="cv-liner"></div>
          </div>
        </div>
        <div class="d-flex flex-column cv-item" style="gap: 15px">
          <div
            v-for="item in workHistory"
            :key="item.id"
            class="d-flex flex-column"
            style="gap: 2px"
          >
            <h6 class="cv-data-header">
              {{ item.employer + ", " + item.city + ", " + item.country_name }}
            </h6>
            <h6 class="cv-data-subheader">
              {{ item.job_title_name }}
            </h6>
            <h6 class="cv-date-range">
              {{
                timeStamp3(item.start_date) +
                " - " +
                (item.is_current ? "Current" : timeStamp3(item.end_date))
              }}
            </h6>
          </div>
        </div>

        <!-- Pro Skills  -->
        <div>
          <div class="cv-header">
            <div class="cv-header-text">pro skills</div>
            <div class="cv-liner"></div>
          </div>
        </div>

        <!-- Hobbies  -->
        <div>
          <div class="cv-header">
            <div class="cv-header-text">hobbies</div>
            <div class="cv-liner"></div>
          </div>
        </div>

        <!-- Follow Me  -->
        <div>
          <div class="cv-header">
            <div class="cv-header-text">follow me</div>
            <div class="cv-liner"></div>
          </div>
        </div>
      </div>
      <div class="right-cv-container">
        <!-- Work Designation  -->
        <div class="cv-header">
          <div class="cv-header-text" v-text="data.job_title"></div>
          <div class="cv-liner"></div>
        </div>

        <!-- Personal Information  -->
        <div class="cv-personal-info pb-5">
          <h4 class="d-flex" style="gap: 5px">
            <span
              class="first-name text-uppercase"
              v-text="data.first_name"
            ></span
            ><span class="last-name text-uppercase" v-text="data.last_name">
            </span>
          </h4>

          <!-- Personal Details  -->
          <div class="personal-details">
            <span class="personal-detail">
              <span> <i-icon icon="fa6-solid:square-phone" /> </span>
              <span v-text="data.phone"></span>
            </span>
            <span class="personal-detail">
              <span> <i-icon icon="lucide:mail" /> </span>
              <span v-text="data.email"></span>
            </span>
            <span class="personal-detail">
              <span> <i-icon icon="ic:baseline-location-on" /> </span>
              <span v-text="data.address"></span>
            </span>
          </div>

          <!-- Bio and Photo -->
          <div class="cv-image">
            <img
              v-if="data.photo"
              src="https://sp-images.summitpost.org/1038746.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=1685bd4ce0f5d871bb859c2eccaf8d03"
              alt=""
            />
            <i-icon
              v-else
              class="img"
              :icon="
                data.gender === 'Male'
                  ? 'entypo:user'
                  : 'foundation:torso-female'
              "
            />
            <div class="img-spacer"></div>
          </div>

          <div class="user-bio">
            <span></span>
            <div class="bio-text">
              <p v-text="data.career_summary"></p>
            </div>
          </div>
        </div>

        <!-- Education  -->
        <div class="education">
          <div>
            <div class="cv-header">
              <div class="cv-header-text">education</div>
              <div class="cv-liner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeStamp3 } from "@/filter";
import { mapState, mapActions } from "vuex";
// import jsPDF from "jspdf";
export default {
  data() {
    return {
      timeStamp3,
    };
  },

  methods: {
    ...mapActions("cvWorkHistory", ["list"]),
    getWorkExperiences() {
      this.list();
    },

  },

  beforeMount() {
    this.getWorkExperiences();
  },

  mounted() {
  },

  computed: {
    ...mapState("cvs", {
      isLoading: (state) => state.loading,
      data: (state) => state.data,
      dataSet: (state) => state.dataSet,
    }),
    ...mapState("cvWorkHistory", {
      workHistory: (state) => state.dataSet,
    }),
  },
};
</script>

<style>
.cv-item {
  padding: 0px 0 5px 15px;
}

.cv-data-header {
  font-size: 14px;
  font-weight: 600;
}

.cv-data-subheader,
.cv-date-range {
  font-size: 12px;
}
</style>
