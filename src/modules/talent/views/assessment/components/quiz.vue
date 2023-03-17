<template>
  <div>
    <div class="center">
      <div class="stepper-progress-bar"></div>
      <div class="stepper">
        <div class="stepper-item-counter mt-5 mx-4">
          <span>1</span>
        </div>
        <div class="stepper-item-counter mt-5 mx-4">
          <span>2</span>
        </div>
        <div class="stepper-item-counter mt-5 mx-4">
          <span>3</span>
        </div>
        <div class="stepper-item-counter mt-5 mx-4">
          <span>4</span>
        </div>
        <div class="stepper-item-counter mt-5 mx-4">
          <span>5</span>
        </div>
      </div>
      <div class="quiz-card">
        <h6 class="text-center mt-5">What is surface cementing</h6>
        <div class="questions" v-if="questions">
          <div class="container mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 register-options"
                  :class="selected === '1' ? 'active' : ''"
                  role="button"
                  @click="selectItem('1')"
                >
                  <i-icon
                    :icon="
                      selected === '1'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm looking for work (Talent)</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 register-options"
                  :class="selected === '2' ? 'active' : ''"
                  role="button"
                  @click="selectItem('2')"
                >
                  <i-icon
                    :icon="
                      selected === '2'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm looking for work (Talent)</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 register-options"
                  :class="selected === '3' ? 'active' : ''"
                  role="button"
                  @click="selectItem('3')"
                >
                  <i-icon
                    :icon="
                      selected === '3'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm looking for work (Talent)</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 register-options"
                  :class="selected === '4' ? 'active' : ''"
                  role="button"
                  @click="selectItem('4')"
                >
                  <i-icon
                    :icon="
                      selected === '4'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm looking for work (Talent)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fileUpload text-center" v-if="fileUpload">
          <input type="file" name="" id="" class="input-file" />
          <p class="mt-5 font-weight-bold">Click or Drag and Drop</p>
          <small class="muted">SVG, PNG, JPG or GIF (max. 400 x 400px) </small>
        </div>
        <div class="majorInput text-center my-5" v-if="textInput">
          <input type="text" class="textInput" placeholder="Enter your job description">
        </div>
        <div class="text-center mt-3">
          <div class="btn mx-2 rounded-pill back px-4">Back</div>
          <div class="btn mx-2 rounded-pill text-white next px-4">Next</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      questions: true,
      fileUpload: false,
      questions: true,
      textInput: false
    };
  },
  methods: {
    selectItem(value) {
      this.selected = value;
    },
  },
};
</script>

<style scooped>
.center {
  margin: auto;
  margin-top: 130px;
  width: 80%;
  height: 500px;
  border: 1px solid #080808;
  padding: 10px;
  border-radius: 40px;
}
.container {
  padding-left: 100px !important;
  padding-right: 100px !important;
}
.stepper-progress-bar {
  border-top: 5px solid #ebfff6;
  margin-top: 67px;
  position: absolute;
  width: 170px;
  left: 600px;
}
.stepper-item-counter {
  padding: 10px;
  background-color: #00ec83;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  z-index: 9;
  color: white;
}
.stepper {
  display: flex;
  justify-content: center;
}
.register-options {
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.fileUpload {
  outline: 2px dashed #0040a1;
  outline-offset: -10px;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  position: relative;
  cursor: pointer;
  border-radius: 40px;
  width: 60%;
  margin: auto;
}

.input-file {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.fileUpload p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
  color: #282929;
}
.textInput {
  height: 150px;
  width: 400px;
  border-radius: 20px;
  background: #FFFFFF;
  border: 1px solid #C2DBFF;
  padding: 20px;
}
.back {
  color: #0040A1;
  border: 1px solid #0040A1;
}
.next {
  background-color: #0040A1;
}
</style>