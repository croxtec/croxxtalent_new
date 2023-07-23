<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">WORK HISTORY</h5>
      <p class="small text-muted" style="font-size: 13px">
        Input details you would like to have on your CV.
      </p>

      <!-- View Already added Work History -->
      <div class="d-flex flex-column mt-3" style="gap: 15px">
        <div v-for="item in dataSet" :key="item.id">
          <div class="d-flex justify-content-between align-items-start">
            <div class="d-flex flex-column" style="gap: 5px">
              <h5 class="cv-data-header">
                {{
                  item.employer + ", " + item.city + ", " + item.country_name
                }}
              </h5>
              <h6 class="cv-data-subheader">
                {{ item.job_title_name }}
              </h6>
              <h6 class="cv-date-range">
                {{
                  timeStamp(item.start_date) +
                  " - " +
                  (item.is_current ? "Date" : timeStamp(item.end_date))
                }}
              </h6>
            </div>
            <div class="d-flex" style="gap: 10px">
              <div class="edit-icon" role="button" @click="edit(item)">
                <span> <i-icon icon="material-symbols:edit-outline" /> </span>
              </div>
              <div
                v-if="editing"
                class="edit-icon bg-danger"
                role="button"
                @click="deleteRecord(item.id)"
              >
                <span> <i-icon icon="fluent:delete-12-regular" /> </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Button to Add New Work History -->
      <div class="mt-4" v-if="!editing">
        <button class="add-item-button" @click="show_form = !show_form">
          <span> <i-icon icon="clarity:plus-line" /> </span>
          <span>Add Work History</span>
        </button>
      </div>

      <!-- Form to Create New Work History  -->
      <div v-if="show_form || editing">
        <form class="form-details mt-4" @submit.prevent="handleSubmit()">
          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <label for="">Employer <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="form.employer"
                placeholder="Enter Employer name"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="">Job Title <span class="text-danger">*</span></label>
              <select
                type="text"
                v-model="form.job_title_id"
                placeholder="Select Job title"
              >
                <option value="" disabled selected class="font-weight-light">
                  Select Job Title
                </option>
                <option
                  v-for="item in job_titles"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <label for="">Country <span class="text-danger">*</span></label>
              <select v-model="form.country_code">
                <option value="" disabled selected class="font-weight-light">
                  Select Country
                </option>
                <option value="NG" selected class="font-weight-light">
                  Nigeria
                </option>
                <option
                  v-for="item in countries"
                  :key="item.id"
                  :value="item.code"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="mb-3 w-100">
              <label for="">City <span class="text-danger">*</span></label>
              <input type="text" v-model="form.city" name="" id="" />
              <!-- <select v-model="form.state_id" placeholder="Enter your first name">
                <option value="" disabled selected class="font-weight-light">
                  Select State
                </option>
                <option v-for="item in states" :key="item.id" :value="item.id">
                  {{ item.name }}
                </option>
              </select> -->
            </div>
          </div>

          <div class="mb-3">
            <div class="d-flex" style="gap: 20px">
              <div class="w-100">
                <label for=""
                  >Start Date<span class="text-danger">*</span></label
                >
                <input type="date" v-model="form.start_date" name="" id="" />
              </div>
              <div class="w-100">
                <label for="">End Date<span class="text-danger">*</span></label>
                <input
                  type="date"
                  :disabled="form.is_current"
                  :readonly="form.is_current"
                  v-model="form.end_date"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div class="d-flex align-items-center mt-2" style="gap: 8px">
              <input
                type="checkbox"
                class="w-auto"
                v-model="form.is_current"
                name=""
                id="checkBox"
              />
              <span
                style="
                  color: var(--gray-300);
                  font-weight: 300;
                  font-size: 13px;
                "
                >I currently work here</span
              >
            </div>
          </div>

          <div class="mb-3">
            <label for="">Decription <span class="text-danger">*</span></label>
            <textarea
              name=""
              id=""
              v-model="form.description"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div class="text-center">
            <button class="primary--button">
              {{ editing ? "Edit" : "Save" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { timeStamp } from "@/plugins/filters";
export default {
  data() {
    return {
      timeStamp,
      work_experiences: [],
      show_form: false,
      editing: false,
      singleData: {},
      form: {},
    };
  },
  methods: {
    ...mapActions("cvWorkHistory", [
      "list",
      "create",
      "update",
      "deleteWorkExperience",
    ]),

    getWorkExperiences() {
      this.list();
    },

    createWorkExperience() {
      this.create(this.form)
        this.list().then(() => {
        this.show_form = false;
      });
    },

    updateWorkExperience() {
      this.update({ id: this.singleData.id, payload: this.form }).then(() => {
        this.list();
        this.editing = false;
      });
    },

    handleSubmit() {
      if (this.editing) {
        this.updateWorkExperience();
      } else {
        this.createWorkExperience();
      }
    },

    edit(value) {
      if (this.editing) {
        this.editing = false;
        this.singleData = {};
      } else {
        this.singleData = value;
        this.editing = true;
      }
    },

    deleteRecord(value) {
      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteWorkExperience(value).then(() => {
            this.$swal.fire("Deleted!", "Your work experience has been deleted.", "success");
            this.list();
            this.editing = false
          });
        }
      });
    },

    loadStates() {
      let payload = {
        per_page: "all",
        sort_by: "name",
        sort_dir: "asc",
        archived: "no",
      };
      this.$store.dispatch("config/getCountryStates", {
        id: this.form.country_code,
        payload: payload,
      });
    },
  },

  beforeMount() {
    this.getWorkExperiences();
  },

  computed: {
    ...mapState("cvWorkHistory", {
      dataSet: (state) => state.dataSet,
    }),

    ...mapState("config", {
      job_titles: (state) => state.job_titles,
      countries: (state) => state.countries,
      states: (state) => state.states,
    }),

    formCountryCode: function () {
      return this.form.country_code;
    },
  },

  watch: {
    singleData: function (newValue) {
      if(newValue) {
        this.form = {
          job_title_id: newValue.job_title_id,
          employer: newValue.employer,
          description: newValue.description,
          city: newValue.city,
          country_code: newValue.country_code,
          start_date: newValue.start_date,
          is_current: newValue.is_current,
          end_date: newValue.end_date,
        };
      }
    },

    formCountryCode: function (newValue, oldValue) {
      if (newValue !== oldValue && oldValue != null) {
        this.form.state_id = null;
        if (newValue !== null) {
          this.loadStates();
        }
      }
    },
  },
};
</script>

<style scoped></style>
