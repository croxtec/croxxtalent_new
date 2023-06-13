<template>
    <div id="education-list" class="d-flex flex-column" style="gap: 15px">
   
    <div v-for="item in dataSet" :key="item.id">
      <div class="d-flex justify-content-between align-items-start">
        <div class="d-flex flex-column" style="gap: 5px">
          <h5 class="cv-data-header">
            {{ item.institution  }}
          </h5>
          <h6 class="cv-data-subheader">
            {{ item.certification_course_name + ", " + item.course_of_study_name }}
          </h6>
          <h6 class="cv-date-range">
            {{
              timeStamp(item.start_date) +
              " - " +
              (item.is_current ? "Date" : timeStamp(item.end_date))
            }}
          </h6>
        </div>
        <div class="edit-icon" role="button" @click="edit(item)">
          <span> <i-icon icon="material-symbols:edit-outline" /> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";

export default {

  data() {
    return {
      timeStamp,
    };
  },

  methods: {
    ...mapActions("cvCertification", ["list"]),

    loadRecords(){
      this.$store.dispatch('cvCertification/list', {})
    }
  },

  computed: {
    ...mapState("cvCertification", {
      dataSet: (state) => state.dataSet,
    }),
  },

  beforeMount(){
    console.log('Cv Certification');
    this.loadRecords()
  }

};
</script>

<style></style>
