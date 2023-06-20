<template>
  <div id="education-list" class="d-flex flex-column" style="gap: 15px">
    <div v-for="item in dataSet" :key="item.id">
      <div class="d-flex justify-content-between align-items-start">
        <div class="d-flex flex-column" style="gap: 5px">
          <h5 class="cv-data-header">
            {{ item.school + ", " + item.city + ", " + item.country_name }}
          </h5>
          <h6 class="cv-data-subheader">
            {{ item.degree_name + ", " + item.course_of_study_name }}
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
    ...mapActions("cvEducation", ["view", "list"]),
    edit(value) {
      this.$emit("edit", "education");
      this.view(value.id);
    },
  },
  computed: {
    ...mapState("cvEducation", {
      dataSet: (state) => state.dataSet,
    }),
  },

  beforeMount() {
    this.list();
  },
};
</script>

<style></style>
