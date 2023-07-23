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
                <!-- <img
              src="@/assets/img/vertical.png"
              alt=""
              srcset=""
              class="img-fluid mx-3"
            /> -->
                <!-- @click="setLayout('column')" -->
                <ColumnIcon />
              </a>
              <a class="pt-3 pb-0 px-2" @click="activeView = '2'">
                <RowIcon />

                <!-- <img src="@/assets/img/horizontal.png" alt="" srcset="" class="img-fluid" /> -->
              </a>
            </div>
          </div>
        </div>
        <div class="job-list">
          <div v-if="activeView === '1'" class="column">
            <div class="floter" v-for="job in paginatedItems" :key="job.id">
              <div class="job-card">
                <div class="d-flex justify-content-between">
                  <img
                    src="@/assets/img/box.png"
                    alt=""
                    srcset=""
                    class="img-fluid"
                    style="width: 40px"
                  />
                  <i class="fa fa-ellipsis-h" @click="showOptionModal(job.id)"></i>
                  <div class="option-modal py-2" v-if="optionModal === job.id">
                    <span>Apply</span>
                    <hr />
                    <span>Save</span>
                    <hr />
                    <span>Archive</span>
                  </div>
                </div>
                <div class="my-3">
                  <h5>{{ job.title }}</h5>
                  <span>Agency</span> . <span>San Fransisco, US</span>
                </div>
                <p class="d-block text-truncate content">
                  Dropbox is looking for Brand <br />
                  Designer to help the team to be able to access all of the required state
                </p>
                <div class="d-flex mt-4 justify-content-between">
                  <span class="drilling">Drilling</span>
                  <span class="Management">Management</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeView === '2'" class="list">
            <div class="list-job my-3 d-flex" v-for="job in paginatedItems" :key="job.id">
              <img
                src="@/assets/img/round-logo.png"
                alt=""
                class="img-fluid m-3"
                style="width: 64px; height: 64px"
              />
              <div>
                <div class="job-content">
                  <div class="job-container">
                    <h5 class="content-header">{{ job.title }}</h5>
                    <i class="fa fa-ellipsis-h"></i>
                  </div>
                  <div class="location">
                    <span>Rain Oil</span> . <span>Paris, France</span>
                  </div>
                  <div class="options d-flex justify-content-between">
                    <div class="option-tags mt-3">
                      <span class="full-time">Full-Time</span> |
                      <span class="off-shore mr-2">Off-shore</span>
                      <span class="design">Design</span>
                    </div>
                    <div class="option-progress">
                      <progress value="45" max="100"></progress><br />
                      <span>5 applied of 10 capacity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 mx-auto pagination_section">
            <div class="d-flex">
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
              <div class="">
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
import ColumnIcon from "../components/icons/ColumnIcon.vue";
import RowIcon from "../components/icons/RowIcon.vue";
import ArrowUp from "../components/icons/ArrowUp.vue";
export default {
  components: { ArrowUp, RowIcon, ColumnIcon },

  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      activeView: "1",
      layout: "row",
      vertical: false,
      horizontal: false,
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
      jobs: [
        {
          title: "Chemical Engineer",
          id: 1,
          section: "Agency",
          location: "San Fransisco, US",
          description:
            "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
          //  category: [
          //   {tag: 'Drilling', 'Management'}
          //  ]
        },
        {
          title: "Civil Engineer",
          id: 3,
          section: "Agency",
          location: "San Fransisco, US",
          description:
            "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
          //  category: [
          //   {tag: 'Drilling', 'Management'}
          //  ]
        },
        {
          title: "Chemical Engineer",
          id: 4,
          section: "Agency",
          location: "San Fransisco, US",
          description:
            "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
          //  category: [
          //   {tag: 'Drilling', 'Management'}
          //  ]
        },
        {
          title: "Software Engineer",
          id: 16,
          section: "Agency",
          location: "San Fransisco, US",
          description:
            "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
          //  category: [
          //   {tag: 'Drilling', 'Management'}
          //  ]
        },
        {
          title: "Software Engineer",
          id: 16,
          section: "Agency",
          location: "San Fransisco, US",
          description:
            "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
          //  category: [
          //   {tag: 'Drilling', 'Management'}
          //  ]
        },
      ],
    };
  },
  methods: {
    setLayout(layout) {
      this.layout = layout;
    },
    showOptionModal(item) {
      this.optionModal = this.optionModal === item ? null : item;
    },
    showVertical() {
      this.vertical = true;
      this.horizontal = false;
    },
    showHorizontal() {
      this.vertical = false;
      this.horizontal = true;
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
  },
  computed: {
    // jobs() {
    //   return this.$store.getters["jobsModule/jobs"];
    // },
    paginatedItems() {
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
    console.log(Array.isArray(this.jobs));
  },
};
</script>

<style scoped>
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
.pagination_section {
  margin: 100px auto;
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
.option-modal {
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
  display: grid;
  justify-content: center;
  align-content: center;
}
.list-job {
  padding: 10px;
  width: 919px;
  height: 149px;
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
}
</style>
