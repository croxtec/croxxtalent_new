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
        <form @submit.prevent="createRecord()">
          <div class="mb-3">
            <label for="">Domain</label>
            <select @change="selectDomain()" v-model="form.domain_id">
              <option value="" selected >Select Doamin</option>
              <option :value="item.id" v-for="item in domains" :key="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Core</label>
            <select @change="selectCore()" v-model="form.core_id">
              <option value="" selected >Select Core</option>
              <option :value="item.id" v-for="item in cores" :key="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Skills</label>
            <select v-model="form.skill_id">
              <option value="" selected disabled>Select Skill</option>
              <option :value="item.id" v-for="item in skills" :key="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Level</label>
            <select v-model="form.level">
              <option value="-" selected disabled>Select Level</option>
              <option :value="item.value" v-for="item in levels" :key="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>
        </form>
      </div>

      <div
        class="mt-2 modal-actions d-flex align-items-center justify-content-center"
        style="gap: 10px"
      >
        <button class="primary--button" type="submit" >
          Add Competence
        </button>
        <!-- @click="$emit('add-competence')"<button class="error-btn" @click="$emit('retry')">Try Again</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
 
  data() {
    return {
      form: {
        domain_id: '',
        core_id:'',
        skill_id: '',
        level: 'beginner',
      }
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
      console.log(this.form);
      // this.$store.dispatch("r/storeSkills", payload).then(() => {
      //     // this.recordsLoading = false;
      // });  

    }
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
  }

};
</script>

<style></style>
