<template>
  <div>
    <header class="d-flex sorting_section justify-content-between">
      <div class="d-flex">
        <span class="place-center filter pr-2">Filter</span>
        <div>
          <div class="search">
            <i-icon icon="ri:search-2-line" class="nav-icon" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
      </div>
      <div class="place-center">Showing {{ jobs.length }} results</div>

      <div class="sorting hidden d-flex">
        <div class="sortBy mr-2 d-flex mt-2">
          <small class="muted py-1 mr-2">Sort by:</small>
          <span class="mr-2">Most relevant</span><SmallArrowDown />
        </div>
      </div>
    </header>
    <div class="job-grid">
      <div class="job-list">
        <div class="list">
          <RowJobCard
            v-for="job in jobs"
            :key="job.id"
            :job="job.campaign"
            :showButton="false"
            :optionModal="optionModal"
            :showViewButton="true"
            @option-clicked="showOptionModal(job.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RowJobCard from "../components/Cards/RowCard.vue";
import SmallArrowDown from "../components/SmallArrowDown.vue";

export default {
  components: { RowJobCard, SmallArrowDown },

  data() {
    return {
      optionModal: null,
    };
  },

  methods: {
    showOptionModal(item) {
      this.optionModal = this.optionModal === item ? null : item;
    },
  },
  computed: {
    jobs() {
      return this.$store.getters["jobsModule/jobs"];
    },
  },
  mounted() {
    this.$store.dispatch("jobsModule/getAppliedJobs");
    console.log("Saved jobs:", this.jobs);
  },
};
</script>

<style scoped>
.filter {
  color: #282929;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 26.4px */
}

.place-center {
  display: grid;
  place-self: center;
}

.search {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
}

.sorting_section {
  padding: 12px 0px;
  border-bottom: 1px solid #c2dbff;
  border-top: 1px solid #c2dbff;
  margin: 25px 0;
}

div .search {
  border: 1px solid var(--blue-300);
  background: #fff;
  border-radius: 25px;
  padding: 0 25px;
  width: 100%;
}

div .search input {
  border: none;
}

.images img {
  cursor: pointer;
}

header h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
}

.vertical {
  opacity: 0.1;
  color: #202430;
  font-size: 35px;
}

.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.job-card {
  width: 274px;
  height: 275px;
  border: 1px solid #c2dbff;
  border-radius: 20px;
  padding: 24px;
}

.tag {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #0040a1;
  border: 2px solid #0040a1;
  height: 30px;
  padding-bottom: 25px !important;
}

h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
}

.drilling {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #56cdad;
  background: rgba(86, 205, 173, 0.1);
  border-radius: 80px;
  padding: 4px 16px;
  gap: 8px;
}

.Management {
  padding: 4px 16px;
  gap: 8px;
  width: 128px;
  height: 30px;
  background: rgba(0, 64, 161, 0.1);
  border-radius: 80px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #0040a1;
}

.content {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #646868;
}

.job-grid {
  display: grid;
  grid-template-columns: auto;
}

.fa-ellipsis-h {
  cursor: pointer;
}

.option-modal {
  margin-left: 120px;
  margin-top: 30px;
  text-align: center;
  gap: 10px;
  width: 206px;
  position: absolute;
  background-color: white;
  height: 151px;
  border: 0.5px solid #e0e0e0;
  box-shadow: 0px 79px 128px rgba(192, 192, 192, 0.09),
    0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508),
    0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723),
    0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675),
    0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615);
  border-radius: 20px;
}

.option-modal > span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #282929;
  opacity: 0.5;
  cursor: pointer;
}

.option-modal > hr {
  background: #c2dbff;
}

.employment-card {
  margin-top: 20px;
  margin-bottom: 20px;
}

.employment-card div {
  display: flex;
}

.employment-card div span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #646868;
}

/* .employment-card div > input {
  width: 24px;
  height: 24px;
  outline: 2px solid #c2dbff;
   margin-top: 50px; 
} */
.job-filter h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* padding-top: 100px; */
}

.job-filter span {
  cursor: pointer;
  /* margin-top: 100px; */
}

.list {
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

/* .list-job {
  padding: 10px;
  width: 919px;
  height: 149px;
  background: #ffffff;
  border: 1px solid #cbd7e7;
  border-radius: 40px;
} */
.job-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between !important;
}

.job-container h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
}

.job-container i {
  margin-left: 550px;
}

progress::-moz-progress-bar {
  background: #56cdad;
  height: 5px;
  color: white;
}

progress::-webkit-progress-value {
  background: #56cdad;
  height: 5px;
  color: white;
}

progress {
  background: #56cdad;
  height: 5px;
  color: white;
}

.option-progress span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  color: #646868;
  text-align: center;
  margin-left: 7px;
}

.full-time {
  align-items: center;
  padding: 6px 10px;
  gap: 8px;
  background: rgba(86, 205, 173, 0.1);
  border-radius: 80px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: #56cdad;
}

.off-shore {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: #ffb836;
  background: #ffffff;
  border: 1px solid #ffb836;
  border-radius: 40px;
  padding: 6px 10px;
}

.design {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: #7b61ff;
  background: #ffffff;
  border: 1px solid #7b61ff;
  border-radius: 40px;
  padding: 6px 10px;
}

.location span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #646868;
}
</style>
