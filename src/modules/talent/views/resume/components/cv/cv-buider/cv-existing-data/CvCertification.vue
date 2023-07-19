<template>
  <div>
    <!-- List -->
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
    <!-- Form -->
    <div  v-if="show_form">
      <div class="d-flex align-items-end"  v-if="form.editMode">
        <div class="delete-icon " role="button"   @click="deleteRecord(form.id, form.institution) ">
          <span> <i-icon icon="material-symbols:restore-from-trash-outline" /> </span>
        </div>
      </div>

      <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
        <form  @submit.prevent="form.editMode ? handleSubmit(updateRecord) : handleSubmit(addNewRecord)" 
          class="form-details mt-4">
          <div class="mb-3">
            <validation-provider v-slot="validationContext" vid="institution"  name="institution" rules="required|max:30">
                <label for=""
                  >Institution/School <span class="text-danger">*</span>
                </label >
                <input  v-model="form.institution" type="text" placeholder="Name of institution" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
          <!-- <div class="mb-3">
            <label for="">Course <span class="text-danger">*</span></label>
            <input type="text" placeholder="Course Name" />
          </div> -->
          <div class="mb-3">
            <validation-provider v-slot="validationContext" vid="degree"  name="degree" rules="required">
              <label for="">Course of Study <span class="text-danger">*</span></label>
              <select v-model="form.certification_course_id">
                <option value="" disabled selected class="font-weight-light">
                  Select Course of Study
                </option>
                <option
                  v-for="item in course_of_studies"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
            </validation-provider>
          </div>
  
          <div class="mb-3">
            <div class="d-flex" style="gap: 20px">
              <div class="w-100">
                <validation-provider v-slot="validationContext" vid="degree"  name="degree" rules="required">
                  <label for="">Start Date<span class="text-danger">*</span></label>
                  <!-- <input type="text" placeholder="Input postal code" /> -->
                  <input  v-model="form.start_date" type="date" name="" id="" />
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>
              <div class="w-100">
                <validation-provider v-slot="validationContext" vid="degree"  name="degree" rules="required">
                    <label for="">End Date<span class="text-danger">*</span></label>
                    <!-- <input type="text" placeholder="Input postal code" /> -->
                    <input  v-model="form.end_date" type="date" name="" id="" />
                    <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>
            </div>
            <div class="d-flex align-items-center mt-2" style="gap: 8px">
              <input v-model="form.is_current" type="checkbox" name="" id="checkBox" />
              <span
                style="color: var(--gray-300); font-weight: 300; font-size: 13px"
                >No Expiration Date</span
              >
            </div>
          </div>
  
          <div class="text-center">
            <button type="submit"  v-if="form.editMode" :disabled="isLoading || invalid"
             class="primary--button mr-3">Save Changes</button>

            <button type="submit"  v-else :disabled="isLoading || invalid"
             class="primary--button mr-3">Save</button>

            <button type="reset" class="button" @click="closeForm">Cancel</button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
import toastify from "toastify-js";

export default {

  data() {
    return {
      timeStamp,
      show_form: false,
      form : {
          id: null,
          institution: "",
          certification_course_id: "",
          start_date: "",
          end_date: "",
          is_current: 0,
          editMode: false
      }
    };
  },

  methods: {
    ...mapActions("cvCertification", ["list","create","update"]),

    loadRecords(){
      this.$store.dispatch('cvCertification/list', {})
    },

    edit(value) {
      console.log('Toggle Edit', value.id);
      this.show_form = !this.show_form;
      this.editResumeCertification(value)
      // this.$eventBus.emit('editMode', "certification");
      // this.$eventBus.emit("editCertification", value);
    },

    addNewRecord(){
        console.log(this.form);
        this.create({payload: this.form}).then(() => {
          // this.recordsLoading = false;
          toastify({
            text: `Cetificate created succesfully`,
            className: "info",
            style: {
              background: "green",
              fontSize: "12px",
              borderRadius: "5px",
            },
          }).showToast();
          this.list()
        });  
    },

    updateRecord(){
        console.log('Update rec',this.form);
        this.update({
            work_experience_id: this.form.id,
            payload: this.form
        }).then(() => {
            if (this.success !== false && this.error === false) {
              this.closeForm();
              toastify({
                text: `Cetificate updated succesfully`,
                className: "info",
                style: {
                  background: "green",
                  fontSize: "12px",
                  borderRadius: "5px",
                },
              }).showToast();
              this.list()
          } else {
            this.$refs.form.setErrors(this.validationErrors);
          }
        });  
    },

    closeForm(){
      this.show_form = false;
      this.resetFormData();
    },

    editResumeCertification(value){
      this.form =  {
        id: value.id,
        institution: value.institution,
        certification_course_id: value.certification_course_id,
        start_date: value.start_date,
        end_date: value.end_date,
        is_current: 0,
        editMode: true
      }
    },

    resetFormData(){
      this.form = {
        id: null,
        institution: "",
        certification_course_id: "",
        start_date: "",
        end_date: "",
        is_current: 0,
        editMode: false
      }
    },

    deleteRecord(id, name = "") {
      this.$swal
        .fire({
          type: "warning",
          title: `Are you sure you want to delete "${name}"?`,
          text:
            "This action cannot be undone and will permanently delete this record and its associated records.",
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger mx-2",
            cancelButton: "btn btn-secondary mx-2"
          },
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return this.$store
              .dispatch("cvCertification/delete", {
                cv_id: this.$store.state.cvs.data.id,
                work_experience_id: id
              })
              .then(() => {
                if (this.success !== false && this.error === false) {
                  return { response: "success" };
                } else {
                  return { response: "error" };
                }
              });
          }
        })
        .then(result => {
          if (result.value) {
            if (result.value.response == "success") {
              let msg = this.success;
              this.$store.commit("cvCertification/REMOVE_ERROR_SUCCESS");
              this.closeForm();
              this.loadRecords();
              this.$swal.fire("", msg, "success");
            } else {
              let msg = this.error;
              this.$swal.fire("", msg, "error");
            }
          }
        });
    } 
  },

  computed: {
    ...mapState("cvCertification", {
      isLoading: state => state.loading,
      error: state => state.error,
      success: state => state.success,
      validationErrors: state => state.validationErrors,
      data: state => state.data,
      dataSet: state => state.dataSet,
      dataSetTotal: state => state.dataSetTotal
    }),

    ...mapState("config", {
      course_of_studies: (state) => state.course_of_studies,
    })
  },

  beforeMount(){
    console.log('Cv Certification');
    this.loadRecords()
  }

};
</script>

<style></style>
