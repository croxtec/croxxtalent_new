<template>
  <div >
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
          <button type="submit" :disabled="invalid" class="primary--button">Save</button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import toastify from "toastify-js";
// import Vue from "vue";

export default {
  props: {
    formObject: {
      type: Object,
    }
  },

  data(){
      return {
        form : {
          id: null,
          institution: "",
          certification_course_id: "",
          start_date: "",
          end_date: "",
          is_current: 0,
          editMode: false
        }
      }
  },

  methods: {
      ...mapActions("cvCertification", ["list","create", "update"]),

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


      editResumeCertification(value){
        console.log('Editing Certification', value.id);
        const newData =  {
          ...this.form, id: value.id,
          ...this.form,institution: value.institution,
          ...this.form,certification_course_id: value.certification_course_id,
          ...this.form,start_date: value.start_date,
          end_date: value.end_date,
          is_current: 0,
          editMode: true
        }
      },

     
  }, 

  computed: {
    ...mapState("config", {
      course_of_studies: (state) => state.course_of_studies,
    })
  },

  mounted() {
  },

  beforeDestroy() {
  },
};

</script>