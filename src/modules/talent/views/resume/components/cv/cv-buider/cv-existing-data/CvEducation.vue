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
          <!-- <div>
            {{ singleData }}
          </div> -->
        </div>
        <div class="d-flex" style="gap: 10px">
          <div class="edit-icon" role="button" @click="edit(item)">
            <span> <i-icon icon="material-symbols:edit-outline" /> </span>
          </div>
          <div
            v-if="editing == item.id"
            class="edit-icon bg-danger"
            role="button"
            @click="deleteRecord(item.id, item.school)"
          >
            <span> <i-icon icon="fluent:delete-12-regular" /> </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
export default {
  props: {
    editing: {
      default: null,
    },
  },
  data() {
    return {
      timeStamp,
    };
  },
  methods: {
    ...mapActions("cvEducation", ["view", "list"]),

    edit(value) {
      console.log(this.singleData);
      if (this.singleData === null) {
        this.view(value.id).then(() => {
          this.$emit("editMode", value, "education");
        });
      } else {
        if (value.id !== this.singleData.id) {
          this.view(value.id).then(() => {
            this.$emit("editMode", value, "education");
          });
        } else {
          this.$emit("cancelEdit", value, "education");
        }
      }
    },

    // Delete Education
    deleteRecord(id, name = "") {
      this.$swal
        .fire({
          type: "warning",
          title: `Are you sure you want to delete "${name}"?`,
          text: "This action cannot be undone and will permanently delete this record and its associated records.",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger mx-2",
            cancelButton: "btn btn-secondary mx-2",
          },
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            await this.$store.dispatch("cvEducation/delete", id);
            if (this.success !== false && this.error === false) {
              alert("Success");
              return { response: "success" };
            } else {
              alert("Error");
              return { response: "error" };
            }
          },
        })
        .then((result) => {
          if (result.value) {
            if (result.value.response == "success") {
              let msg = this.success;
              this.$store.commit("cvEducation/REMOVE_ERROR_SUCCESS");
              // this.closeForm();
              this.list();
              this.$swal.fire("", msg, "success");
            } else {
              let msg = this.error;
              this.$swal.fire("", msg, "error");
            }
          }
        });
    },
  },
  computed: {
    ...mapState("cvEducation", {
      dataSet: (state) => state.dataSet,
      singleData: (state) => state.singleDataSet,
    }),
  },

  beforeMount() {
    this.list();
  },
};
</script>

<style></style>
