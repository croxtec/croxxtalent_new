<template>
    <div class="jobs" >
       <div class="floter" v-for="job in jobs" :key="job.id">
        <div class="job-card mx-2" >
          <div class="d-flex justify-content-between">
            <img src="@/assets/img/box.png" alt="" srcset="" class="img-fluid" style="width: 40px;">
            <div class="tag mt-2">FULL TIME</div>
          </div>
          <div class="my-3">
            <h5>{{ job.title }}</h5>
          <span>Agency</span> . <span>San Fransisco, US</span>
          </div>
          <p class="d-block text-truncate content">Dropbox is looking for Brand <br> Designer to help the team to be able to access all of the required state</p>
          <div class="d-flex mt-4 justify-content-between">
            <span class="drilling">Drilling</span>
            <span class="Management">Management</span>
          </div>
        </div>
       </div>
      </div>
  </template>
  
  <script>
  
  export default {
    props: ["jobsCount"],
    data(){
    return {
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
                title: "Mechanical Engineer",
                id: 13,
                section: "Agency",
                location: "San Fransisco, US",
                description:
                "Dropbox is looking for brand designer to help the team to be able to access all of the required state",
                //  category: [
                //   {tag: 'Drilling', 'Management'}
                //  ]
            }
        ],
      }
    },
  };
  </script>
  
  <style>
  .jobs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
  }
  .job-card {
    width: 274px;
  height: 275px;
  border: 1px solid #C2DBFF;
  border-radius: 20px;
  padding: 24px;
  }
  .drilling {
    font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #56CDAD;
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #0040A1;
  }
  
  </style>