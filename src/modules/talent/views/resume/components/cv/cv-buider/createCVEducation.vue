<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">Education</h5>
      <p class="small text-muted">Add your education history</p>
      <div class="mt-2">
        <cv-education @edit="editData" />
      </div>

      <div class="mt-2" v-if="add_education">
        <AddEducation />
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
    };
  },
  methods: {
    ...mapActions("cvEducation", ["list"]),
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

    editData(value) {
      if (value === "education") {
        this.add_education = !this.add_education;
        this.editEducation = true;
        // if (this.error) {
        //   this.$store.commit("cvEducation/REMOVE_ERROR_SUCCESS");
        // }
      } else {
        this.add_certification = !this.add_certification;
      }
    },
  },
  beforeMount() {
    this.list();
  },
  computed: {
    ...mapState("cvEducation", {
      success: (state) => state.success,
      error: (state) => state.error,
    }),
  },
};
</script>
