<template>
  <div>
    <span @click.prevent="goBack()" class="backPage"
      ><i class="fa fa-solid fa-arrow-left"></i> Back</span
    >
    <div class="center text-center">
      <div class="m-5">
        <div class="assessment my-4">
          <span class="assess">Assessment</span>
        </div>
        <h5 class="surface my-3">{{ assessment.name }}</h5>
        <p class="mb-5 text-left content">
          Dropbox is looking for Brand Designer to help the team By coupling smart
          assessment protocols with our tiered Work-Experience-Model, we are able to drive
          deep data profiling on every individual in our ecosystem, to make intelligent
          matching decisions for companies across the world. ...
        </p>
        <div class="credentials mb-5 text-left">
          <div class="credential">
            <h6>Level</h6>
            <small>{{ assessment.level }}</small>
          </div>
          <div class="credential">
            <h6>Date</h6>
            <small>22/10/2022</small>
          </div>
          <div class="credential">
            <h6>Validity</h6>
            <small>3 years</small>
          </div>
          <div class="credential">
            <h6>Validation type</h6>
            <small>Automatic</small>
          </div>
          <div class="credential">
            <h6>Delivery type</h6>
            <small>{{ assessment.delivery_type }}</small>
          </div>
        </div>
        <div class="mt-">
          <button class="start-assessment" @click="startAssessment">
            Mark assessment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $request from "@/axios";
export default {
  data() {
    return {
      assessment: "",
    };
  },
  methods: {
    getAssessment() {
      const getUserData = JSON.parse(localStorage.getItem("userData"));
      $request
        .get(`/assesments/${getUserData.code}/result/${getUserData.talentID}`)
        .then((res) => {
          this.assessment = res.data.data.assesment;
          const getResponse = res.data.data;
          const assessmentResponse = JSON.stringify(getResponse);
          localStorage.setItem("assessmentResponse", assessmentResponse);
        });
    },
    goBack() {
      this.$router.go(-1);
    },
    startAssessment() {
      this.$router.push("/ScoreSheet");
    },
  },
  mounted() {
    this.getAssessment();
  },
};
</script>

<style scooped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
.center {
  margin: 50px auto;
  /* margin-top: 50px;  */
  background: #ffffff;
  border: 1px solid #c2dbff;
  padding: 10px;
  border-radius: 40px;
  width: 1201px;
  height: 520px;
}
.surface {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #282929;
}
.content {
  font-size: 14px;
  font-family: "Poppins", sans-serif !important;
  height: 66px;
  line-height: 160%;
  font-style: normal;
  font-weight: 400;
  /* width: 1006px; */
}
.credentials {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-around;
  padding-left: 100px;
  padding-right: 100px;
}
.credential h6 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #282929;
}
.credential small {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #282929;
}
.assessment > span {
  background-color: #c2dbff;
  width: 121px;
  height: 34px;
  font-family: "Poppins", sans-serif !important;
}
.back {
  cursor: pointer;
}
.start-assessment {
  padding: 14px 27px;
  gap: 10px;
  cursor: pointer;
  background: #282929;
  border-radius: 40px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
  margin-top: 30px;
}
.assess {
  align-items: center;
  padding: 4px 12px;
  gap: 16px;
  background: #ebf3ff;
  border-radius: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #0040a1;
}
.backPage {
  cursor: pointer;
}
</style>
