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
              <validation-provider v-slot="validationContext" vid="phone"  name="phone" rules="required">
                <div class="phone-number-input">
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <country-flag country="NG" size="small" />
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
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
              <select type="text" placeholder="Enter your first name">
                <option value="" disabled selected class="font-weight-light">
                  Select Country
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="mb-3 w-100">
              <label for="">State <span class="text-danger">*</span></label>
              <select type="text" placeholder="Enter your first name">
                <option value="" disabled selected class="font-weight-light">
                  Select State
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
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
              <validation-provider v-slot="validationContext" vid="postal"  name="postal" rules=">
                <label for=""
                  >Postal Code<span class="font-weight-lighter"
                    >(optional)</span >
                </label  >
                <input v-model="form.postal" type="text" placeholder="Input postal code" />
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

export default {
  data() {
    return {
      form: {
        phone: '',
        email: '',
        country: '',
        state: '',
        city: '',
        postal: '',
        address: '',
      }
    };
  },

  methods: {
    updateCantactInfo(){

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
