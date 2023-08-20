<template>
  <div>
    <header class="d-flex justify-content-between">
      <h6>Jobs</h6>
    </header>
    <div class="hidden_on_desktop mobile_fliter_section_container my-4">
      <div class="mobile_fliter_section p-2">
        <img
          role="button"
          src="@/assets/icons/search-normal.svg"
          alt=""
          srcset=""
          class=""
          style=""
        />
        <input class="search-bar" type="search" placeholder="Job title or keyword" />
        <img
          @click="showMobileFilter"
          role="button"
          src="@/assets/icons/setting-5.svg"
          alt=""
          srcset=""
          class=""
        />
        <button class="primary--button text-white px-3">Search</button>
      </div>
      <div v-if="mobileFilter" class="drop_down_section py-4">
        filter
        <span @click="showEmployment">
          <h6 class="my-3 justify-between">
            Type of Employment
            <!-- <ArrowUp class="rotate-defult" :class="{ 'rotate-180': show1 }" /> -->
            <svg
              :class="{ 'rotate-180': show1 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show1"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show1"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="employment">
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Full-time (3)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">part-time (5)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Remote (2)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Internship (24)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Contract (3)</span>
          </div>
        </div>
        <span @click="showCategories">
          <h6 class="my-3 justify-between">
            Categories
            <svg
              :class="{ 'rotate-180': show2 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show2"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show2"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="categories">
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Design (24)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">sales (3)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Marketing (3)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Human Resource (6)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Finance (4)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Engineering (4)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Technology (5)</span>
          </div>
        </div>
        <span @click="showJobLevel">
          <h6 class="my-3 justify-between">
            Job Level
            <svg
              :class="{ 'rotate-180': show3 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show3"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show3"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="jobLevel">
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Entry Level (57)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">mid level (3)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Senior Level (5)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Director (6)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">Vp or Above (4)</span>
          </div>
        </div>
        <span @click="showSalaryRange">
          <h6 class="my-3 justify-between">
            Salary Range
            <svg
              :class="{ 'rotate-180': show4 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show4"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show4"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="salaryRange">
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">N700 - N1000 (57)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">N100 - N1500 (3)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">N1500 - N2000 (5)</span>
          </div>
          <div class="my-3">
            <input type="checkbox" name="" id="" />
            <span class="ml-3">N3000 or Above (6)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="job-grid">
      <div class="job-filter pr-2">
        <span @click="showEmployment">
          <h6 class="my-3 justify-between">
            Type of Employment
            <!-- <ArrowUp class="rotate-defult" :class="{ 'rotate-180': show1 }" /> -->
            <svg
              :class="{ 'rotate-180': show1 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show1"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show1"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="employment">
                    <div v-for="item in displayedTypeOfEmployment" :key="item" class="my-3">
              <input type="checkbox" :value="item" v-model="typeOfEmployment"  @change="toggleTypeOfEmployment(item)">
                <span class="ml-3">  {{ item }}</span>
            </div>

        </div>
        <span @click="showCategories">
          <h6 class="my-3 justify-between">
            Categories
            <svg
              :class="{ 'rotate-180': show2 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show2"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show2"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="categories">
            <div v-for="item in displayedCategories" :key="item" class="my-3">
              <input type="checkbox" :value="item"     v-model="categories" 
   @change="togglecategoriesCheck(item)">
                <span class="ml-3">  {{ item }}</span>
            </div>
        </div>
        <span @click="showJobLevel">
          <h6 class="my-3 justify-between">
            Job Level
            <svg
              :class="{ 'rotate-180': show3 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show3"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show3"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="jobLevel">
              <div v-for="item in displayedJobLevelOptions" :key="item" class="my-3">
                <input type="checkbox" :value="item" v-model="jobLevel" @change="toggleJobLevelOptionsCheck(item)">
                  <span class="ml-3">  {{ item }}</span>
              </div>
          
        </div>
        <span @click="showSalaryRange">
          <h6 class="my-3 justify-between">
            Salary Range
            <svg
              :class="{ 'rotate-180': show4 }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 12.5435L11.1651 7.11016C10.5234 6.46849 9.47344 6.46849 8.83177 7.11016L3.39844 12.5435"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <!-- <i class="fa fa-solid fa-chevron-up mx-3" v-if="show4"></i
            ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show4"></i> -->
          </h6>
        </span>
        <div class="employment-card" v-if="salaryRange">

                <div v-for="item in displayedSalaryRangeOptions" :key="item" class="my-3">
                  <input type="checkbox" :value="item" v-model="salaryRange" @change=" toggleSalaryRangeOptions(item)">
                    <span class="ml-3">  {{ item }}</span>
                </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex hidden_on_mobile justify-content-between">
          <p class="pt-3">Showing 73 results</p>
          <div class="sorting d-flex">
            <div class="sortBy mr-2 pt-3 d-flex">
              <small class="muted mr-2">Sort by:</small>
              <span class="mr-2">Most relevant</span>
            </div>
            <span class="vertical">|</span>
            <div class="images d-flex g-2">
              <a class="pt-3 px-2" @click="activeView = '1'">
                <ColumnIcon />
              </a>
              <a class="pt-3 pb-0 px-2" @click="activeView = '2'">
                <RowIcon />
              </a>
            </div>
          </div>
        </div>
        <div class="job-list pt-4">
          <div v-if="activeView === '1'" class="column">
                <ColumnJobCard
                v-for="job in filteredJobs"
                :key="job.id"
                :job="job"
                :optionModal="optionModal"
                @option-clicked="showOptionModal(job.id)"
                @apply-clicked="handleAppliedforjobs(job.id)"
                @save-clicked="handleSavejobs(job.id)"
        />

         </div>
          <div v-if="activeView === '2'" class="list">
                  <RowJobCard
                    v-for="job in filteredJobs"
                    :key="job.id"
                    :job="job"
                    :optionModal="optionModal"
                    @option-clicked="showOptionModal(job.id)"
                    @apply-clicked="handleAppliedforjobs(job.id)"
                    @save-clicked="handleSavejobs(job.id)"
        />
         </div>
          <div class="pagination_section">
            <div  class=" pagination_buttons">
              <div
                @click="previousPage"
                :disabled="currentPage === 1"
                role="button"
                class="pagination_button"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="#282929"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span
                  role="button"
                  v-for="(pageNumber, index) in pageNumbers"
                  :key="pageNumber"
                  @click="goToPage(pageNumber)"
                  :class="{
                    pagination_number_active: pageNumber === currentPage,
                    pagination_number_inactive: pageNumber !== currentPage,
                  }"
                  class=""
                  >{{ displayPageNumber(index, pageNumber) }}</span
                >
              </div>
              <div
                @click="nextPage"
                :disabled="currentPage === totalPages"
                role="button"
                class="pagination_button"
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.375 1L7.625 7L1.375 13"
                    stroke="#282929"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ColumnIcon from "../components/icons/ColumnIcon.vue";
import RowIcon from "../components/icons/RowIcon.vue";
import ArrowUp from "../components/icons/ArrowUp.vue";
import MoreIcon from "../components/icons/MoreIcon.vue";
import RowJobCard from '../components/Cards/RowCard.vue'
import ColumnJobCard from '../components/Cards/ColumnCard.vue'
export default {
  components: { ArrowUp, RowIcon, ColumnIcon, MoreIcon, RowJobCard, ColumnJobCard },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      activeView: "1",
      employment: true,
      categories: true,
      jobLevel: true,
      salaryRange: true,
      optionModal: null,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      mobileFilter: false,
      typeOfEmployment: [
        "full_time",
        "parttime",
        'remote',
        'internship',
        'contract ',
      ],
      categories: [
        "Design",
        "sales",
        "Marketing",
        "humanResource",
        "Finance",
        "Engineering",
        "Technology",
      ],
      jobLevel: [
        "Entry Level",
        "mid level",
        "Senior Level",
        "Director",
        "Vp or Above",
      ],
      salaryRange: [
        "N700 - N1000",
        "N100 - N1500",
        "N1500 - N2000",
        "N3000 or Above",
      ],
      filterMappings: {
        typeOfEmployment: [ 
          "full_time",
          "parttime",
          'remote',
          'internship',
          'contract ',
      ],
        categories: [ 
          "Design",
          "sales",
          "Marketing",
          "humanResource",
          "Finance",
          "Engineering",
          "Technology",
      ],
        jobLevel: [ 
          "Entry Level",
          "mid level",
          "Senior Level",
          "Director",
          "Vp or Above",
        ],
        salaryRange: [ 
          "N700 - N1000",
          "N100 - N1500",
          "N1500 - N2000",
          "N3000 or Above",
      ],
      },
      displayedTypeOfEmployment: [],
      displayedCategories: [],
      displayedJobLevelOptions: [],
      displayedSalaryRangeOptions: [],

    };
  },
  methods: {
    toggleTypeOfEmployment(item) {
      console.log(item + " checked:", this.typeOfEmployment.includes(item));
    },
    togglecategoriesCheck(item) {
      console.log(item + " checked:", this.categories.includes(item));
    },
    toggleJobLevelOptionsCheck(item) {
      console.log(item + " checked:", this.jobLevel.includes(item));
    },
    toggleSalaryRangeOptions(item) {
      console.log(item + " checked:", this.salaryRange.includes(item));
    },

    redirectToJobDetails(jobId) {
      this.$router.push({ name: "job-Details", params: { id: jobId } });
    },
    showOptionModal(item) {
      this.optionModal = this.optionModal === item ? null : item;
    },
    showEmployment() {
      this.employment = !this.employment;
      this.show1 = !this.show1;
    },
    showCategories() {
      this.categories = !this.categories;
      this.show2 = !this.show2;
    },
    showJobLevel() {
      this.jobLevel = !this.jobLevel;
      this.show3 = !this.show3;
    },
    showMobileFilter() {
      this.mobileFilter = !this.mobileFilter;
    },
    showSalaryRange() {
      this.salaryRange = !this.salaryRange;
      this.show4 = !this.show4;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    displayPageNumber(index, pageNumber) {
      if (this.totalPages <= 5) {
        return pageNumber;
      } else {
        if (index === 2 || index === this.totalPages - 3) {
          return "...";
        } else if (index > 1 && index < this.totalPages - 2) {
          if (this.currentPage >= pageNumber - 1 && this.currentPage <= pageNumber + 1) {
            return pageNumber;
          } else {
            return "";
          }
        } else {
          return pageNumber;
        }
      }
    },
    async handleAppliedforjobs(id) {
      const resp = await this.$store.dispatch("jobsModule/applyForJobs", { campaign_id: id });
      console.log(resp);
    },
    async handleSavejobs(id) {
      const resp = await this.$store.dispatch("jobsModule/savedJobs", { campaign_id: id });
      console.log(resp);
    },
    handleFilterChange(filterType, selectedOptions) {
      this[filterType] = selectedOptions;
         this.$forceUpdate();
    }

  },
  created() {
    this.displayedTypeOfEmployment = this.typeOfEmployment.slice(0, 4);
    this.displayedCategories = this.categories.slice(0, 4);
    this.displayedJobLevelOptions= this.jobLevel.slice(0, 4);
    this.displayedSalaryRangeOptions = this.salaryRange.slice(0, 4);

  },

  computed: {
      filteredJobs() {
            let filteredItems = this.paginatedItems;

      if (this.typeOfEmployment.length > 0) {
       return filteredItems = filteredItems.filter(job => this.typeOfEmployment.includes(job.work_type));
      }

      if (this.categories.length > 0) {
       return filteredItems = filteredItems.filter(job => this.categories.includes(job.categories));
      }

      if (this.jobLevel.length > 0) {
       return filteredItems = filteredItems.filter(job => this.jobLevel.includes(job.jobLevel));
      }

      if (this.categories.length > 0) {
       return filteredItems = filteredItems.filter(job => this.salaryRange.includes(job.salaryRange));
      }

      return filteredItems;

    //   if (this.typeOfEmployment.length)
    //   return this.paginatedItems.filter(job => this.typeOfEmployment.includes(job.work_type))
    //   else if (this.categories.length)
    //   return this.paginatedItems.filter(job => this.categories.includes(job.categories))
    //   else if (this.jobLevel.length)
    //   return this.paginatedItems.filter(job => this.jobLevel.includes(job.jobLevel))
    //   else if (this.salaryRange.length)
    //   return this.paginatedItems.filter(job => this.salaryRange.includes(job.salaryRange))
    //   else
    //  return this.paginatedItems
    },

    // sortedPaginatedItems() {
    //   if (!this.paginatedItems.length) {
    //     return this.paginatedItems;
    //   }

    //   const filteredItems = this.paginatedItems.filter(item => {
    //     return (
    //       (this.typeOfEmployment.length === 0 || this.typeOfEmployment.includes(item.work_type))
    //       // Apply similar conditions for other filter categories
    //     );
    //   });

    //   if (this.typeOfEmployment.length > 0) {
    //     return filteredItems.sort((a, b) => {
    //       if (a.work_type === 'full time' && b.work_type !== 'full time') {
    //         return -1;
    //       } else if (a.work_type !== 'full time' && b.work_type === 'full time') {
    //         return 1;
    //       }

    //       // Sort by other criteria if needed
    //       // ...

    //       return 0;
    //     });
    //   }

    //   return filteredItems;
    // },
    jobs() {
      return this.$store.getters["jobsModule/jobs"];
    },
    paginatedItems() {
          if (!this.jobs.length) {
        return [];
      }


      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.jobs.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.jobs.length / this.pageSize);
    },
    pageNumbers() {
      const numbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  mounted() {
    this.$store.dispatch("jobsModule/getJobs");
    // console.log(Array.isArray(this.jobs));
    // console.log(this.getJobs);
    console.log("jobs:", this.jobs);
    console.log("paginatedItems:", this.paginatedItems);
    console.log("filteredJobs:", this.filteredJobs);
    this.$store.dispatch("jobsModule/getJobs");

  },
};
</script>

<style scoped>
.left_section{  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.justify-self-end {
justify-items: end;
    display: grid;
}
.job-list {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

}
.drop_down_section {
  position: absolute;
  top: 70px;
  /* left: 1041px; */
  transform-origin: center top;
  z-index: 2003;
  border: 1px solid var(--blue-100) !important;
  box-shadow: unset !important;
  width: 100% !important;
  border-radius: 35px !important;
  padding: 12px;
  background: #ffffff;
  max-height: 100vh;
  overflow: auto;
}
.mobile_fliter_section_container {
  position: relative;
}
.mobile_fliter_section {
  border-radius: 60px;
  display: flex;
  gap: 4px;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  border: 0.5px solid #e0e0e0;
  box-shadow: 0px 2px 8px 0px #e0e0e0;
  padding: 16px;
}
.search-bar {
  width: 100%;
  padding: 12px 14px;
  font-weight: 400;
  outline: none;
  border-bottom: 4px solid var(--blue-200);
  border: 4px 0px 5px solid var(--blue-200);
  border-radius: 0px;
  background-color: transparent;
  font-size: 14px;
}
.pagination_buttons {
  display: flex;
  width: 10%;
  margin: 0 auto;
}
.pagination_section {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 60px;
}
.pagination_button {
  padding: 0px 20px;
  /* border: 1px solid #e5e7eb; */
  border-radius: 0.375rem;
}
.pagination_number_active {
  background-color: #0040a1;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}
.pagination_number_inactive {
  background-color: #ffffff;
  color: #0040a1;
  padding: 10px 20px;
  border-radius: 8px;
}

.rotate-180 {
  transform: rotate(180deg);
}
.rotate-defult {
  transform: rotate(-180deg);
}
.row {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.4rem;
}
.column {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.4rem;
  margin-bottom: 100px;

}
.images a {
  cursor: pointer;
  display: flex;
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
  grid-gap: 1.4rem;
}
.job-card {
  width: auto;
  height: 275px;
  border: 1px solid #c2dbff;
  border-radius: 20px;
  padding: 24px;
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

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
  grid-template-columns: 20% 80%;
  gap: 1.4rem;
}
.fa-ellipsis-h {
  cursor: pointer;
}
/* .option-modal {
  margin-left: 120px;
  margin-top: 15px;
  text-align: center;
  gap: 10px;
  width: 175px;
  position: absolute;
  background-color: white;
  height: 150px;
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
  font-size: 14px;
  color: #282929;
  opacity: 0.5;
  cursor: pointer;
}
.option-modal > hr {
  background: #c2dbff;
} */
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
.employment-card div > input {
  width: 24px;
  height: 24px;
  border: 2px solid #c2dbff !important;
  border-radius: 4px;
  /* margin-top: 50px; */
}
.job-filter h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* padding-top: 100px; */
}
@media screen and (max-width: 768px) {
  .job-filter {
    display: none;
  }
}
.job-filter span {
  cursor: pointer;
  /* margin-top: 100px; */
}
.list {
  /* display: grid;
  justify-content: center;
  align-content: center; */
  /* min-height: 100vh; */
    margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
.list-job {
  padding: 24px;
  /* width: 919px; */
  /* height: 149px; */
  background: #ffffff;
  border: 1px solid #cbd7e7;
  border-radius: 40px;
}
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
.justify-between {
  justify-content: space-between;
  display: flex;
}
@media only screen and (max-width: 768px) {
  .job-grid {
    display: grid;
    grid-template-columns: auto;
    gap: 1.4rem;
  }
  .pagination_buttons {
    display: flex;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
