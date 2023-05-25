<template>
  <div class="form-details mt-4">
    <div class="mb-3">
      <label for=""
        >Institution/School <span class="text-danger">*</span></label
      >
      <input
        type="text"
        v-model="payload.school"
        placeholder="Name of school"
      />
      <small class="text-danger" v-for="item in errors.school" :key="item"
        >* {{ item }}</small
      >
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Degree <span class="text-danger">*</span></label>
        <select v-model="payload.degree_id">
          <option value="" disabled selected class="font-weight-light">
            Select Degree
          </option>
          <option v-for="item in degrees" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <small class="text-danger" v-for="item in errors.degree_id" :key="item"
          >* {{ item }}</small
        >
      </div>
      <div class="mb-3 w-100">
        <label for="">Course of Study <span class="text-danger">*</span></label>
        <select v-model="payload.course_of_study_id">
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
        <small
          class="text-danger"
          v-for="item in errors.course_of_study_id"
          :key="item"
          >* {{ item }}</small
        >
      </div>
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Country <span class="text-danger">*</span></label>
        <select v-model="payload.country_code">
          <option value="" disabled selected class="font-weight-light">
            Select Country
          </option>
          <option value="NG">Nigeria</option>
          <option v-for="item in countries" :key="item.id" :value="item.code">
            {{ item.name }}
          </option>
        </select>
        <small
          class="text-danger"
          v-for="item in errors.country_code"
          :key="item"
          >* {{ item }}</small
        >
      </div>
      <div class="mb-3 w-100">
        <label for="">City <span class="text-danger">*</span></label>
        <input
          type="text"
          v-model="payload.city"
          placeholder="Enter your City"
        />
        <small class="text-danger" v-for="item in errors.city" :key="item"
          >* {{ item }}</small
        >
      </div>
    </div>

    <div class="mb-3">
      <div class="d-flex" style="gap: 20px">
        <div class="w-100">
          <label for="">Start Date<span class="text-danger">*</span></label>
          <input type="date" v-model="payload.start_date" name="" id="" />
          <small
            class="text-danger"
            v-for="item in errors.start_date"
            :key="item"
            >* {{ item }}</small
          >
        </div>
        <div class="w-100">
          <label for="">End Date<span class="text-danger">*</span></label>
          <input
            :disabled="payload.is_current"
            type="date"
            name=""
            v-model="payload.end_date"
            id=""
          />
        </div>
      </div>
      <div class="d-flex align-items-center mt-2" style="gap: 8px">
        <input
          type="checkbox"
          name=""
          id="checkBox"
          v-model="payload.is_current"
        />
        <span style="color: var(--gray-300); font-weight: 300; font-size: 13px"
          >I currently work here</span
        >
      </div>
    </div>

    <div class="mb-3">
      <label for="">Decription <span class="text-danger">*</span></label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        v-model="payload.description"
      ></textarea>
    </div>

    <div class="text-center">
      <button
        @click="addEducation"
        class="primary--button py-3"
        style="font-weight: 500"
        :class="{ 'in-active': loading }"
        :disabled="loading"
      >
        <span v-if="loading">
          <i-icon icon="eos-icons:bubble-loading" width="20px" />
        </span>
        <span v-else>Save</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      payload: {
        school: "",
        course_of_study_id: "",
        degree_id: "",
        city: "",
        country_code: "",
        start_date: "",
        is_current: false,
        end_date: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions("cvEducation", ["create"]),
    addEducation() {
      // console.log(this.payload);
      this.create(this.payload);
      if (this.success) {
        this.payload = {};
      }
    },
  },
  computed: {
    ...mapState("config", {
      degrees: (state) => state.degrees,
      course_of_studies: (state) => state.course_of_studies,
      countries: (state) => state.countries,
    }),
    ...mapState("cvEducation", {
      loading: (state) => state.loading,
      success: (state) => state.success,
      errors: (state) => state.validationErrors,
      singleDataSet: (state) => state.singleDataSet,
    }),
  },
};
</script>
