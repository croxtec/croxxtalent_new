<template>
    <div>
      <header class="d-flex justify-content-between">
        <h6>Recommended Jobs</h6>
        <div class="sorting d-flex">
          <div class="sortBy mr-2 d-flex mt-2">
            <small class="muted mt-1 mr-2">Sort by:</small>
            <span class="mr-2">Most relevant</span>
          </div>
          <span class="vertical">|</span>
          <div class="images">
          <router-link to="/jobs">
            <img
            src="@/assets/img/vertical.png"
            alt=""
            srcset=""
            class="img-fluid mx-3"
          />
          </router-link>
          <router-link to="/rows">
            <img
            src="@/assets/img/horizontal.png"
            alt=""
            srcset=""
            class="img-fluid"
          />
          </router-link>
        </div>
        </div>
      </header>
      <p class="mb-3">Showing 73 results</p>
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
    </div>
  </template>
  
  <script>
  export default {
  data () {
    return {
      jobs: [
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Electrical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Civil Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Chemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Mechanical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'BioChemical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Technical Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        },
        {
         title: 'Software Engineer',
         section: 'Agency',
         location: 'San Fransisco, US',
         description: 'Dropbox is looking for brand designer to help the team to be able to access all of the required state',
        //  category: [
        //   {tag: 'Drilling', 'Management'}
        //  ]
        }
      ]
    }
  }
  }
  </script>
  
  <style scoped>
  .images img {
    cursor: pointer;
  }
  header h6 {
    font-family: 'Poppins';
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
  border: 1px solid #C2DBFF;
  border-radius: 20px;
  padding: 24px;
  }
  .tag {
    font-family: 'Poppins';
  font-style: normal;
  font-weight:bold;
  font-size: 14px;
  color: #0040A1;
  border: 2px solid #0040A1;
  height: 30px;
  padding-bottom: 25px !important;
  }
  h5 {
    font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
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
  .content{
    font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #646868;
  }
  </style>