<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">Education</h5>
      <p class="small text-muted">Add your education history</p>
      <div class="mt-2">
        <cv-education
          @editMode="editData"
          @cancelEdit="cancelEdit"
          :editing="editing"
        />
      </div>

      <div class="mt-2" v-if="add_education">
        <AddEducation :payload="educationData" :editMode="editing" @close="close"/>
      </div>

      <hr />
      <button class="add-item-button" @click="create('education')">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Education</span>
      </button>
    </div>

    <div class="mt-5">
      <h5 style="font-size: 18px; font-weight: 600">Certification</h5>
      <p class="small text-muted">
        Add all certifications with their expiration dates
      </p>

      <div class="mt-2">
        <cv-certification />
      </div>
      <div class="mt-2" v-if="add_certification">
        <AddCertification />
      </div>

      <hr />

      <!-- Emmanuel: This might not work because you want to try out prop -->
      <button class="add-item-button" @click="create('certification')">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Certification</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CvCertification from "./cv-existing-data/CvCertification.vue";
import CvEducation from "./cv-existing-data/CvEducation.vue";
import AddCertification from "./forms/addCertification.vue";
import AddEducation from "./forms/addEducation.vue";

export default {
  components: { AddEducation, AddCertification, CvEducation, CvCertification },
  data: () => {
    return {
      add_education: false,
      add_certification: false,
      editEducation: false,
      educationData: {},
      editing: null,
    };
  },
  methods: {
    // ...mapActions("cvCertification", ["list"]),
    create(value) {
      if (value === "education") {
        this.add_education = !this.add_education;
        if (this.error) {
          this.$store.commit("cvEducation/REMOVE_ERROR_SUCCESS");
        }
      } else {
        this.add_certification = !this.add_certification;
      }
    },

    editData(e, value) {
      if (value === "education") {
        this.add_education = true;
        this.editing = e.id;
        this.educationData = this.dataSet;
      } else if (value === "certification") {
        this.add_certification = !this.add_certification;
      }
    },

    cancelEdit(e, value) {
      if (value === "education") {
        if (this.add_education === false) {
          this.add_education = true;
          this.educationData = this.dataSet;
          this.editing = e.id;
        } else {
          console.log("omooo", value);
          this.add_education = false;
          this.educationData = {};
          this.editing = null;
        }
      } else if (value === "certification") {
        this.add_certification = !this.add_certification;
      }
    },

    close(){
      this.add_education = false
    }
  },

  watch: {},

  computed: {
    ...mapState("cvEducation", {
      success: (state) => state.success,
      error: (state) => state.error,
      dataSet: (state) => state.singleDataSet,
    }),
    // ...mapState("cvEducation", {

    // }),
  },
  mounted() {
    // this.$eventBus.on("editMode", this.editData);
  },
};
</script>
