<template>
  <div>
    <h5 style="font-size: 18px; font-weight: 600">CONTACT INFO</h5>
    <p class="small text-muted">
      Input details you would like to have on your CV
    </p>
    
    <validation-observer  ref="form" v-slot="{ invalid, handleSubmit }">
      <form  @submit.prevent="handleSubmit(updateContactInfo)">
        <div class="form-details mt-4">
          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <label for="">Phone Number <span class="text-danger">*</span></label>
              <validation-provider v-slot="validationContext" vid="phone"  name="phone" rules="required|max:25">
                <!-- <div class="phone-number-input"></div> -->
                <vue-tel-input v-model="form.phone"  autocomplete="off"></vue-tel-input>
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="email"  name="email" rules="required|email">
                <label for="">Email Address <span class="text-danger">*</span></label>
                <input v-model="form.email" type="text" placeholder="Enter your email address" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          </div>

          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
                <label for="">Country <span class="text-danger">*</span></label>
                <select v-model="form.country_code">
                  <option value="" disabled selected class="font-weight-light">
                    Select Country
                  </option>
                  <option value="NG" selected>Nigeria</option>
                  <option v-for="item in countries" :key="item.id" :value="item.code">
                    {{ item.name }}
                  </option>
                </select>

              </div>
            <div class="mb-3 w-100">
              <label for="">State <span class="text-danger">*</span></label>
                <select v-model="form.state_id">
                  <option value="" disabled selected class="font-weight-light">
                    Select State
                  </option>
                  <option v-for="item in states" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
            </div>
          </div>

          <div class="d-flex" style="gap: 20px">
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="city"  name="city" rules="required|max:30">
                <label for="">City <span class="text-danger">*</span></label>
                <input v-model="form.city" type="text" placeholder="Enter the city name" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
            <div class="mb-3 w-100">
              <validation-provider v-slot="validationContext" vid="Postal code"  name="postal code"  rules="max:10">
                <label for=""
                  >Postal Code<span class="font-weight-lighter"
                    >(optional)</span >
                </label  >
                <input v-model="form.postal_code" type="text" placeholder="Input postal code" />
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
              </validation-provider>
            </div>
          </div>

          <div>
            <div class="mb-3 w-100">
              <label for="">Home Address <span class="text-danger">*</span></label>
            </div>
           
            <validation-provider v-slot="validationContext" vid="address"  name="address" rules="required|min:10|max:150">
              <textarea v-model="form.address" name="address" id="" cols="30" rows="3"></textarea>
              <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
             </validation-provider>
          </div>
          <div class="text-center mt-3">
            <button class="primary--button" :disabled="invalid">Save</button>
          </div>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import toastify from "toastify-js";

export default {
  data() {
    return {
      form: {
        phone: '',
        email: '',
        country_code: '',
        state_id: '',
        city: '',
        postal_code: '',
        address: '',
      }
    };
  },

  methods: {
    updateContactInfo(){
      this.$store
        .dispatch("cvs/updateResumeContact", { 
          payload: this.form
        })
        .then(() => {
          console.log('Contact Update',this.success)
          if (this.success !== false && this.error === false) {
            // resolve(true);
              toastify({
              text: this.success,
              className: "info",
              style: {
                background: "green",
                fontSize: "12px",
                borderRadius: "5px",
              },
            }).showToast();
          } else {
            this.$refs.form.setErrors(this.validationErrors); // set VeeValidation error
            // reject(true);
          }
        });
    },

    loadStates() {
      let payload = {
        per_page: "all",
        sort_by: "name",
        sort_dir: "asc",
        archived: "no"
      };
      this.$store.dispatch("config/getCountryStates", {
        id: this.form.country_code,
        payload: payload
      });
    }, 
  },


  computed: {
    ...mapState("config", {
      industries: (state) => state.industries,
      job_titles: (state) => state.job_titles,
      countries: (state) => state.countries,
      states: (state) => state.states,
    }),

    ...mapState("auth", {
      user: (state) => state.user,
    }),

    ...mapState("cvs", {
        isLoading: state => state.loading,
        error: state => state.error,
        success: state => state.success,
        validationErrors: state => state.validationErrors,
        contactInfo: state => state.data,
        dataSet: state => state.dataSet,
        dataSetTotal: state => state.dataSetTotal,
        uploadProgress: state => state.uploadProgress
      }),

      formCountryCode: function() {
        return this.form.country_code;
      }
  },

  watch: {
    contactInfo: function(newValue, oldValue) {
      let vm = this;
      console.log('Contact Value', newValue);
      if(newValue){
        this.form = {
          email: newValue.email,
          phone: newValue.phone,
          address: newValue.address,
          postal_code: newValue.postal_code,
          city: newValue.city,
          country_code: newValue.country_code,
          state_id:
            newValue.country_code !== this.form.country_code &&
            this.form.country_code != null
              ? null
              : newValue.state_id,
          
        };
        this.nameInitials = newValue.photo_url ? newValue.name_initials : newValue.name_initials;
      }
    },

    formCountryCode: function(newValue, oldValue) {

      if (newValue !== oldValue && oldValue != null) {
        this.form.state_id = null;
      }
      // this.$store.commit("countries/SET_STATES_DATASET", {
      //   data: [],
      //   total: 0
      // });
      if (newValue !== null) {
        this.loadStates();
      }
    }
  }
};
</script>
