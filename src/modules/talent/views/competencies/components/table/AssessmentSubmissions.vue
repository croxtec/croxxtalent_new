<template>
  <div>
    <div>
      <div class="search-area w-25 mb-2">
          <i-icon icon="teenyicons:search-outline" class="search-icon"/>
          <input type="search" placeholder="Search">
        </div>
    </div>
    <div v-if="loading">
      <span>Retrieving Data</span>
      <i-icon
        icon="eos-icons:three-dots-loading"
        style="color: var(--blue-500)"
        width="60px"
      />
    </div>

    <div v-else>
      <!-- <span class="error-alert" v-if="error">
        {{ error }}
      </span>
      <span class="error-alert" v-else-if="results.length === 0">
        No Data found
      </span> -->
      <div  class="d-flex flex-column" style="gap: 20px">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap">
            <tr v-for="item in summaries.data" :key="item.id">
              <td>
                <div class="d-flex align-items-center" style="gap: 15px">
                  <img src="https://menofvalue.com/wp-content/uploads/2015/04/bigstock-Skeptical-74315989-e1438791711725.jpg" alt="" style="" />
                  <div class="td">
                    <h6 class="cell-content">Stanley Joshua</h6>
                    <h6 class="cell-header">
                      Rain Oil
                      <span> <i-icon icon="ph:dot" /> </span>
                      Warri, Rivers
                      <span> <i-icon icon="ph:dot" /> </span>
                      Full Time
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="td">
                  <h6 class="cell-content">Date</h6>
                  <h6 class="cell-header">Mon, 12/02/ 2023</h6>
                </div>
              </td>
              <td>
                <div class="td">
                  <h6 class="cell-content">Status</h6>
                  <h6 class="cell-header">20% Completed</h6>
                </div>
              </td>
              <td class="text-right">
                <button @click="gotoMarkAssessment(item)"
                  class="button primary-btn py-2"
                  style="width: max-content"
                >
                  Mark Test
                </button>
                <!-- v-if="item.is_published === 0" -->
                <!-- <button @click="viewScore(item)"
                  class="button primary-btn py-2"
                  style="width: max-content"
                  v-else
                >
                  View Score
                </button> -->
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sliceHash } from "@/filter";
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      code: this.$route.params.id,
      details: false,
      sliceHash,
    };
  },

  computed: {
    ...mapState("manager", {
      assessment: (state) => state.assessment,
      summaries: (state) => state.summaries,
      loading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },

  methods: {
    ...mapActions("manager", ["getAssesmentSummaries"]),

    gotoMarkAssessment(item){
      const data = {
        code: item.assesment_code.id,
        talentID: item.talent_id
      }
      const userString = JSON.stringify(data)
      localStorage.setItem("userData", userString)
      this.$router.push({name: 'assessmentSummary', params: {id: item.assesment_code.code}});
    },
    viewScore(item) {
      alert(`Your total Score is ${item.total_score}`)
    }
  },

  mounted(){
    this.getAssesmentSummaries(1).then(() =>{
      this.$route.meta.header = `${this.assessment?.name} - (${this.assessment.level})`;
    });
  }
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
}
th {
  background-color: var(--blue-500) !important;
  color: white;
}
th,
td {
  /* width: 100%; */
  border-bottom: 1px solid var(--blue-300);
  border-top: 1px solid var(--blue-300);
  /* padding: 5px; */
  background: var(--accent-color);
  padding: 20px 25px;
  font-size: 0.8rem;
}

td .td {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 4px;
}

td img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  -o-object-fit: cover;
  object-position: top;
  -o-object-position: top;
  border-radius: 50%;
}

th:nth-child(1) {
  border-radius: 25px 0 0 25px;
}

th:last-child {
  border-radius: 0 25px 25px 0;
}

td:nth-child(1) {
  border-radius: 25px 0 0 25px;
  border-left: 1px solid var(--blue-300);
}

td:last-child {
  border-radius: 0 25px 25px 0;
  border-right: 1px solid var(--blue-300);
}
</style>
