<template>
  <div>
    <h5 style="font-size: 18px; font-weight: 600">
      Lets help you get that resume that gets you hired
    </h5>
    <p class="small text-muted">
      Input details you would like to have on your CV
    </p>
    <div class="text-center my-4 title-page-image">
      <img src="@/assets/icons/no-user.png" alt="" />
      <i-icon icon="" />
      <div>
        <small class="text-dark mt-3" style="font-weight: 500"
          >Upload a Profile Photo</small
        >
      </div>
    </div>

    <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
      <form  @submit.prevent="handleSubmit(updateResumeInfo)">
        <div class="form-details">
          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="firstname"  name="firstname" rules="required|max:30">
                  <label for="">First Name <span class="text-danger">*</span></label>
                  <input v-model="form.firstname" type="text" placeholder="Enter your first name" />
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="lastname"  name="lastname" rules="required|max:30">
                <label for="">Last Name <span class="text-danger">*</span></label>
                <input v-model="form.lastname" type="text" placeholder="Enter your last name" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          </div>
  
          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="gender"  name="gender" rules="required">
                  <label for="">Gender <span class="text-danger">*</span></label>
                  <select v-model="form.gender">
                    <option value="" disabled selected>Pick Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="dateOfBirth"  name="dateOfBirth" rules="required">
                <label for="">Date of Birth <span class="text-danger">*</span></label>
                <input v-model="dateOfBirth" type="date" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          </div>
  
          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="industry"  name="industry" rules="required">
                <label for="">Industry <span class="text-danger">*</span></label>
                <select v-model="form.industry_id" name="industry">
                  <option value="" disabled selected>Pick Industry</option>
                  <option v-for="item in industries" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="job_title"  name="job title" rules="required">
                <label for="">Job Title<span class="text-danger">*</span></label>
                <input v-model="form.job_title" type="text" placeholder="Enter your Job Title" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          </div>
  
          <div>
            <div class="d-flex justify-content-between">
              <label for=""> Career Summary <span class="text-danger">*</span></label>
              <span class="" style="font-size: 14px">(150 words)</span>
            </div>
            <validation-provider v-slot="validationContext" vid="career"  name="career" rules="required|min:30|max:150">
              <textarea v-model="form.career" name="career" id="" cols="30" rows="4"></textarea>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
             </validation-provider>
          </div>
        </div>
        <div class="text-center mt-3">
          <button class="primary--button" :disabled="invalid">Save</button>
        </div>
      </form>
    </validation-observer>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        gender: '',
        dateOfBirth: '',
        industry_id: '',
        job_title: '',
        career: '',
      }
    };
  },

  methods: {
    updateResumeInfo(){

    }
  },


  computed: {
    ...mapState("config", {
      industries: (state) => state.industries,
      job_titles: (state) => state.job_titles,
    }),
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>
