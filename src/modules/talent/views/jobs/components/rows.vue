<template>
    <div>
      <header class="d-flex justify-content-between">
        <h6>Jobs</h6>
        <div class="sorting d-flex">
          <div class="sortBy mr-2 d-flex mt-2">
            <small class="muted mt-1 mr-2">Sort by:</small>
            <span class="mr-2">Most relevant</span>
          </div>
          <span class="vertical">|</span>
          <div class="images">
          <router-link to="jobs">
            <img
            src="@/assets/img/vertical.png"
            alt=""
            srcset=""
            class="img-fluid mx-3"
          />
          </router-link>
          <router-link to="rows">
            <img
            src="@/assets/img/horizontal.png"
            alt=""
            srcset=""
            class="img-fluid"
            @click="showHorizontal"
          />
          </router-link>
        </div>
        </div>
      </header>
      <p class="mb-3">Showing 73 results</p>
      <div class="job-grid">
        <div class="job-filter">
          <span @click="showEmployment">
            <h6 class="my-3">
            Type of Employment <i class="fa fa-solid fa-chevron-up mx-3" v-if="show1"></i><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show2"></i>
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
            <h6 class="my-3">Categories <i class="fa fa-solid fa-chevron-up mx-3" v-if="show2"></i><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show2"></i></h6>
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
            <h6 class="my-3">Job Level <i class="fa fa-solid fa-chevron-up mx-3" v-if="show3"></i><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show3"></i></h6>
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
            <h6 class="my-3">Salary Range <i class="fa fa-solid fa-chevron-up mx-3" v-if="show4"></i><i class="fa fa-solid fa-chevron-down mx-3" v-if="!show4"></i></h6>
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
        <div class="job-list">
          <div class="list">
            <div class="list-job my-3 d-flex" v-for="job in jobs" :key="job.id">
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vertical: false,
        horizontal: false,
        employment: true,
        categories:true,
        jobLevel: true,
        salaryRange: true,
        optionModal: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
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
            title: "Electrical Engineer",
            id: 2,
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
            title: "Chemical Engineer",
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
            section: "Agency",
            location: "San Fransisco, US",
            description:
              "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
            //  category: [
            //   {tag: 'Drilling', 'Management'}
            //  ]
          },
          {
            title: "Mechanical Engineer",
            id: 13,
            section: "Agency",
            location: "San Fransisco, US",
            description:
              "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
            //  category: [
            //   {tag: 'Drilling', 'Management'}
            //  ]
          },
          {
            title: "BioChemical Engineer",
            id: 14,
            section: "Agency",
            location: "San Fransisco, US",
            description:
              "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
            //  category: [
            //   {tag: 'Drilling', 'Management'}
            //  ]
          },
          {
            title: "Technical Engineer",
            id: 15,
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
      showOptionModal() {
        this.optionModal = true;
      },
      showVertical () {
        this.vertical = true
        this.horizontal = false
      },
      showHorizontal () {
        this.vertical = false
        this.horizontal = true
      },
      showEmployment () {
        this.employment = !this.employment
        this.show1 = !this.show1
      },
      showCategories () {
        this.categories = !this.categories
        this.show2 = !this.show2
      },
      showJobLevel () {
        this.jobLevel = !this.jobLevel
        this.show3 = !this.show3
      },
      showSalaryRange () {
        this.salaryRange = !this.salaryRange
        this.show4 = !this.show4
      }
    },
  };
  </script>
  
  <style scooped>
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
    grid-template-columns: 20% 80%;
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
  .employment-card div > input {
    width: 24px;
    height: 24px;
    outline: 2px solid #c2dbff;
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
  </style>