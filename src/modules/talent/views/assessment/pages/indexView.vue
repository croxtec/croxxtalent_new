<template>
  <div>
    <span @click.prevent="goBack()" class="back"><i class="fa fa-solid fa-arrow-left"></i> Back</span>
    <div class="center text-center">
      <div class="m-5">
        <div class="assessment my-4">
            <span class="mb-4 py-2 px-3 rounded-pill">Assessment</span>
        </div>
        <h5 class="mb-4 font-weight-bold">Surface Cementing</h5>
        <p class="mb-5 text-left content">
          Dropbox is looking for Brand Designer to help the team By coupling
          smart assessment protocols with our tiered Work-Experience-Model, we
          are able to drive deep data profiling on every individual in our
          ecosystem, to make intelligent matching decisions for companies across
          the world. ...
        </p>
        <div class="credentials mb-5 text-left">
          <div class="credential">
            <h6 class="font-weight-bold">Level</h6>
            <small>Intermediate</small>
          </div>
          <div class="credential">
            <h6 class="font-weight-bold">Date</h6>
            <small>22/10/2022</small>
          </div>
          <div class="credential">
            <h6 class="font-weight-bold">Validity</h6>
            <small>3 years</small>
          </div>
          <div class="credential">
            <h6 class="font-weight-bold">Validation type</h6>
            <small>Automatic</small>
          </div>
          <div class="credential">
            <h6 class="font-weight-bold">Delivery type</h6>
            <small>Classroom</small>
          </div>
        </div>
        <div class="my-5">
          <span class="btn btn-dark rounded-pill" @click="startAssessment">Start assessment</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        startAssessment () {
          this.$router.push('/quiz')
        }
    }
};
</script>

<style scooped>
.center {
  margin: auto;
  margin-top: 50px;
  width: 60%;
  border: 1px solid #080808;
  padding: 10px;
  border-radius: 40px;
}
.content {
    font-size: 13px;
}
.credentials{ 
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content:space-around
}
.credential > h6 {
    font-size: 13px !important;
}
.credential > small {
    font-size: 10px !important;
}
.assessment > span {
    background-color: #C2DBFF;
}
.back {
    cursor: pointer;
}
</style>