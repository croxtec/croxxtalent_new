<template>
  <div class="modal-mask">
    <div class="modal-content add-competence">
      <div class="modal-title d-flex align-items-center">
        <h5 class="text-center w-100">Add Competence</h5>
        <span class="d-block" role="button" @click="$emit('close')"
          ><i-icon
            icon="material-symbols:close"
            width="20px"
            class="text-danger"
        /></span>
      </div>
      <hr />
      <div class="modal-body">
        <div class="competence-search mb-3">
          <i-icon icon="teenyicons:search-outline" />
          <input type="search" placeholder="Search domain, core, skills" />
        </div>
        <validation-observer ref="form" v-slot="{ invalid, handleSubmit }">
            <form @submit.prevent="handleSubmit(createRecord)">
              <div class="mb-3">
                <validation-provider v-slot="validationContext"
                  vid="domin_id"  name="Domain"
                  rules="required">
                <label for="">Domain</label>
                <select  :class="{ 'is-invalid': validationContext.errors[0] }"
                  @change="selectDomain()" v-model="form.domain_id">
                  <option value="" selected >Select Doamin</option>
                  <option :value="item.id" v-for="item in domains" :key="item.id">
                    {{ item.name }}
                  </option>
                </select>
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>

              <div class="mb-3">
                <validation-provider v-slot="validationContext"
                  vid="core_id"  name="Core"
                  rules="required">
                    <label for="">Core</label>
                    <select @change="selectCore()" v-model="form.core_id">
                      <option value="" selected >Select Core</option>
                      <option :value="item.id" v-for="item in cores" :key="item.id">
                        {{ item.name }}
                      </option>
                    </select>
                    <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>

              <div class="mb-3">
                <validation-provider v-slot="validationContext"
                  vid="skill_id"  name="Skill"
                  rules="required">
                  <label for="">Skills</label>
                  <select v-model="form.skill_id">
                    <option value="" selected disabled>Select Skill</option>
                    <option :value="item.id" v-for="item in skills" :key="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>

              <div class="mb-3">
                <validation-provider v-slot="validationContext"
                  vid="level"  name="Level"
                  rules="required">
                  <label for="">Level</label>
                  <select v-model="form.level">
                    <option value="-" selected disabled>Select Level</option>
                    <option :value="item.value" v-for="item in levels" :key="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                  <small class="text-danger my-2" v-text="validationContext.errors[0]"></small>
                </validation-provider>
              </div>
              <div
                class="mt-4 modal-actions d-flex align-items-center justify-content-center"
                style="gap: 10px"
              >
                <button class="primary--button" type="submit"   :disabled="isLoading || invalid">
                  Add Competence
                </button>
                <!-- @click="$emit('add-competence')"<button class="error-btn" @click="$emit('retry')">Try Again</button> -->
              </div>
            </form>
        </validation-observer>
      </div>
    </div>

    <success-alert v-if="result === 'success'" @close="close">
      <p>{{ success }}</p>
    </success-alert>

    <error-alert v-if="result === 'error'" @close="close">
      <p>{{ error }}</p>
    </error-alert>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ErrorAlert from "@/components/alerts/errorAlert.vue";
import successAlert from "@/components/alerts/successAlert.vue";

export default {
  components: { successAlert, ErrorAlert },
  data() {
    return {
      form: {
        domain_id: '',
        core_id:'',
        skill_id: '',
        level: 'beginner',
      },
      result: ''
    }
  },   
  
  methods: {
    ...mapActions("config", ["getDomains","getCore","getSkills"]),
    
    selectDomain() { 
      this.getCore(this.form.domain_id)
    },

    selectCore() {
      this.getSkills(this.form.core_id)
    },

    createRecord(){
      this.$store.dispatch("cvCompetency/create", {payload: this.form}).then(() => {
          if(this.error){
            this.result = 'error'
          }else{
            this.result = 'success'
            this.close();
          }
      });  

    },

    close() {
      // this.form
    },
  },

  mounted() {
    this.getDomains()
  },

  computed: {
    ...mapState("config", {
      domains: (state) => state.domains,
      levels: (state) => state.levels,
      delivery_type: (state) => state.delivery_type,
      categories: (state) => state.categories,
      cores: (state) => state.cores,
      skills: (state) => state.skills
    }),
    ...mapState("cvCompetency", {
      isLoading: state => state.loading,
      error: state => state.error,
      success: state => state.success,
      validationErrors: state => state.validationErrors,
      data: state => state.data,
      dataSet: state => state.dataSet
    }),
  }

};
</script>

<style></style>
