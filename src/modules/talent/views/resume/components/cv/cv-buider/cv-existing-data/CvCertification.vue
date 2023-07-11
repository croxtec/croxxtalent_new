<template>
  <div>
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

    <div  v-if="add_certification">
      <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
        <form  @submit.prevent="form.editMode ? handleSubmit(updateRecord) : handleSubmit(addNewRecord)" 
          class="form-details mt-4">
          <div class="mb-3">
            <label for=""
              >Institution/School <span class="text-danger">*</span></label
            >
            <input  v-model="form.institution" type="text" placeholder="Name of institution" />
          </div>
  
          <!-- <div class="mb-3">
            <label for="">Course <span class="text-danger">*</span></label>
            <input type="text" placeholder="Course Name" />
          </div> -->
          <div class="mb-3">
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
            <!-- <small
              class="text-danger"
              v-for="item in errors.course_of_study_id"
              :key="item"
              >* {{ item }}</small
            > -->
          </div>
  
          <div class="mb-3">
            <div class="d-flex" style="gap: 20px">
              <div class="w-100">
                <label for="">Start Date<span class="text-danger">*</span></label>
                <!-- <input type="text" placeholder="Input postal code" /> -->
                <input  v-model="form.start_date" type="date" name="" id="" />
              </div>
              <div class="w-100">
                <label for="">End Date<span class="text-danger">*</span></label>
                <!-- <input type="text" placeholder="Input postal code" /> -->
                <input  v-model="form.end_date" type="date" name="" id="" />
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
            <button type="submit" class="primary--button">Save</button>
          </div>
        </form>
      </validation-observer>
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
      add_certification: false,
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
    ...mapActions("cvCertification", ["list","create"]),

    loadRecords(){
      this.$store.dispatch('cvCertification/list', {})
    },

    edit(value) {
      console.log('Toggle Edit', value.id);
      this.add_certification = !this.add_certification;
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
      },

      editResumeCertification(value){
        console.log('Editing Certification', value.id);
        this.form =  {
           id: value.id,
          institution: value.institution,
          certification_course_id: value.certification_course_id,
          start_date: value.start_date,
          end_date: value.end_date,
          is_current: 0,
          editMode: true
        }
      }
  },

  computed: {
    ...mapState("cvCertification", {
      dataSet: (state) => state.dataSet,
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
