<template>
  <div>
    <span class="closeQuiz" @click="closeQuiz">X</span>
    <div class="center">
      <div class="stepper-progress-bar" :style="'width:' + stepProgress"></div>
      <div class="stepper my-5">
        <div
          :class="{ current: step == steps, current: step > steps - 1 }"
          class="stepper-item-counter mt-5 mx-4"
          v-for="steps in questions.length"
          :key="steps"
        >
          <span>{{ steps }}</span>
        </div>
      </div>
      <!-- confirmation Modal -->
      <div class="confirm-modal-overlay" v-if="confirmSubmission">
        <div class="confirm-modal">
          <img
            src="@/assets/img/question.png"
            alt=""
            srcset=""
            class="img-fluid modal-img"
          />
          <h4>Are you sure you want to submit?</h4>
          <div class="button-container my-3">
            <button class="confirm-button bg-primary" @click="confirmSubmit">
              Submit
            </button>
            <button class="cancel-button bg-danger" @click="cancelSubmit">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <!-- end of confirmation -->
      <div class="overlayBackground" v-if="step > questions.length">
        <div class="modalShow text-center">
          <h4>You have gotten to the end of the assessment</h4>
          <p class="my-3">Do you want to submit this assessment?</p>
          <div class="text-center mt-3 d-flex justify-content-center">
            <button
              class="back mr-3"
              @click="previousPage"
              id="backButton"
              :disabled="step === 1"
            >
              Back
            </button>
            <button
              class="rounded-pill text-white next"
              @click="submitAssessment"
            >
              Submit Assessment
            </button>
          </div>
        </div>
      </div>
      <div class="quiz-card" v-if="currentQuestion" :key="currentQuestion.id">
        <h6 class="text-center my-5">{{ currentQuestion.question }}</h6>
        <div class="questions" v-if="currentQuestion.type === 'radio'">
          <div class="container mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === 'option1' ? 'active' : '1'"
                  role="button"
                  @click="selectItem('option1')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === 'option1'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>{{ currentQuestion.option1 }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === 'option2' ? 'active' : ''"
                  role="button"
                  @click="selectItem('option2')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === 'option2'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>{{ currentQuestion.option2 }}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === 'option3' ? 'active' : ''"
                  role="button"
                  @click="selectItem('option3')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === 'option3'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>{{ currentQuestion.option3 }}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="selected === 'option4' ? 'active' : ''"
                  role="button"
                  @click="selectItem('option4')"
                >
                  <i-icon
                    class="mr-4"
                    :icon="
                      selected === 'option4'
                        ? 'material-symbols:check-circle-rounded'
                        : 'mdi:checkbox-blank-circle-outline'
                    "
                    width="20px"
                  />
                  <span>{{
                    currentQuestion.option4 ? currentQuestion.option4 : "N/A"
                  }}</span>
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
        <div
          class="majorInput text-center my-5"
          v-if="currentQuestion.type === 'text'"
        >
          <input
            type="text"
            class="textInput"
            placeholder="Enter your Answer here"
            v-model="answer"
          />
        </div>
        <div class="text-center mt-3 d-flex justify-content-center">
          <button
            class="back mr-3"
            @click="previousPage"
            id="backButton"
            :disabled="step === 1"
          >
            Back
          </button>
          <button
            class="rounded-pill text-white next"
            @click="nextPage"
            :disabled="step === questions.length + 1"
          >
            Next
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
      confirmSubmission: false,
      assessments: "",
      answer: "",
      selectedOption: "",
      questions: [],
      selected: null,
      fileUpload: false,
      textInput: false,
      step: 1,
      currentQuestionIndex: 0,
    };
  },
  methods: {
    closeQuiz() {
      this.$router.go(-1);
    },
    selectItem(value) {
      this.selected = value;
    },
    nextPage() {
      this.submitQuestion();
    },
    submitAssessment() {
      this.confirmSubmission = true;
    },
    confirmSubmit() {
      this.closeQuiz();
    },
    cancelSubmit() {
      this.previousPage()
      this.confirmSubmission = false
    },
    async submitQuestion() {
      if (this.currentQuestion.type === "radio") {
        this.selectedOption = this.selected;
      } else if (this.currentQuestion.type === "text") {
        this.selectedOption = this.answer;
      } else if (this.currentQuestion.type === "fileUpload") {
        this.selectedOption = this.answer;
      }
      const payload = {
        assesment_id: this.assessments.id,
        question_id: this.currentQuestion.id,
        answer: this.selectedOption,
      };
      try {
        let response = await $request.post(
          `/assesments/talent/answer`,
          payload
        );
        this.step++;
        this.currentQuestionIndex++;
      } catch (error) {
        alert('please select an option')
        console.error(error.data.message);
      }
    },
    previousPage() {
      this.step--;
      this.currentQuestionIndex--;
    },
  },
  computed: {
    stepProgress() {
      return (100 / 20) * (this.step - 0.28) + "%";
    },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  mounted() {
    const assessment = JSON.parse(localStorage.getItem("assessmentQuestions"));
    console.log(assessment);
    this.questions = assessment.questions;
    this.assessments = assessment;
  },
};
</script>

<style scooped>
/* html,
body {
  overflow: hidden;
} */
.overlayBackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modalShow {
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
  padding: 10px 21px;
  gap: 10px;
  color: #0040a1;
  border: 1px solid #0040a1;
  border-radius: 40px;
}
.next {
  padding: 10px 21px;
  border-radius: 40px;
  gap: 10px;
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
.closeQuiz {
  position: absolute;
  right: 90px;
  top: 40px;
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
}
.confirm-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999999;
}

.confirm-modal {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
}

button {
  /* background-color: #007bff; */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  /* background-color: #0056b3; */
}
.modal-img {
  height: 100px;
}
</style>
