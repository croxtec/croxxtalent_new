<template>
  <div>
    <div class="center">
      <div class="stepper-progress-bar" :style="'width:' + stepProgress"></div>
      <div class="stepper my-5">
        <div
        :class="{'current': step == steps, 'current': step > steps -1 }"
          class="stepper-item-counter mt-5 mx-4 "
          v-for="steps in stepper.length"
          :key="steps"
        >
          <span>{{ steps }}</span>
        </div>
      </div>
      <div class="quiz-card">
        <h6 class="text-center my-5">What is surface cementing</h6>
        <div class="questions" v-if="questions">
          <div class="container mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === '1' ? 'active' : ''"
                  role="button"
                  @click="selectItem('1')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === '1'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm hiring (Employer)</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === '2' ? 'active' : ''"
                  role="button"
                  @click="selectItem('2')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === '2'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm hiring (Employer)</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === '3' ? 'active' : ''"
                  role="button"
                  @click="selectItem('3')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === '3'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I want to refer talents (Affiliate)</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === '4' ? 'active' : ''"
                  role="button"
                  @click="selectItem('4')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === '4'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>I'm hiring (Employer)</span>
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
          <input
            type="text"
            class="textInput"
            placeholder="Enter your job description"
          />
        </div>
        <div class="text-center mt-3 d-flex justify-content-center">
          <div
            class="rounded-pill back mr-3"
            @click="previousPage"
            id="backButton"
            :disabled="step === 1"
          >
            Back
          </div>
          <div
            class="rounded-pill text-white next "
            @click="nextPage"
            :disabled="step === 5"
          >
            Next
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
      selected: null,
      questions: true,
      fileUpload: false,
      questions: true,
      textInput: false,
      step: 1,
      stepper: [
        { count: 1, id: 1 },
        { count: 2, id: 2 },
        { count: 3, id: 3 },
        { count: 4, id: 4 },
        { count: 5, id: 5 },
      ],
    };
  },
  methods: {
    selectItem(value) {
      this.selected = value;
    },
    nextPage () {
      this.step++
      if (this.step === 3) {
        this.questions = false
        this.fileUpload = true
      } else if (this.step === 4) {
        this.fileUpload = false
        this.textInput = true
      }
    },
    previousPage () {
      this.step--
      if (this.step === 4) {
        this.fileUpload = false
        this.textInput = true
      } else if (this.step === 3) {
        this.textInput = false
        this.fileUpload = true
      } else if (this.step === 1){
        document.querySelector('#backButton').disabled = true;
      } else {
        this.fileUpload = false
        this.questions = true
      }
    }
  },
  computed: {
    stepProgress() {
      console.log(this.step)
      return (100 / 20) * (this.step - 0.28) + "%";
    },
  },
};
</script>

<style scooped>
.next, .back {
  width: 73px;
height: 42px;
display: flex;
padding: 10px 21px;
cursor: pointer;
}
.center {
  margin: auto;
  margin-top: 130px;
  width: 80%;
  height: 600px;
  border: 1px solid #080808;
  padding: 10px;
  border-radius: 40px;
}
.container {
  padding-left: 100px !important;
  padding-right: 100px !important;
}
.stepper-progress-bar {
  border-top: 5px solid #00ec83;
  margin-top: 114.5px;
  position: absolute;
  width: 350px;
  left: 600px;
}
.stepper-item-counter {
  border: 2px solid #c2ffe4;
  padding: 10px;
  background-color: #ebfff6;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  z-index: 9;
  color: black;
}
.stepper {
  display: flex;
  justify-content: center;
}
.current {
  background-color: #00ec83 !important;
  color: white !important;
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
  width: 495px;
height: 152px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  padding: 20px;
}
.back {
  color: #0040a1;
  border: 1px solid #0040a1;
}
.next {
  background-color: #0040a1;
}
.registration-options.active {
  background-color: var(--blue-100);
  border: 1px solid var(--primary-color);
}

.registration-options {
  border: 1px solid var(--gray-200);
  padding: 13px 27px 13px 14px;
  border-radius: 40px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
</style>
