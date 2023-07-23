<template>
  <div>
    <!-- <span class="closeQuiz" @click="closeQuiz">X</span> -->
    <div class="steps-progress-bar mx-auto w-xl-25 my-5">
      <div class="steps">
        <div
          v-for="(steps, index) in questions.length"
          :key="index"
          class="step-container"
        >
          <div class="step" :class="{ active: index <= currentQuestionIndex }">
            {{ index + 1 }}
          </div>
          <div
            v-if="index !== questions.length - 1"
            class="progress-line"
            :class="{ active: index <= currentQuestionIndex }"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="center p-3 w-xl-75 mx-xl-auto my-xl-4 mt-3 text-center mb-5"
      v-if="currentQuestionIndex !== questions.length"
    >
      <div class="py-2">
        <h3 class="question_numb">Question {{ currentQuestion.id }}</h3>
      </div>

      <!-- confirmation Modal -->
      <!-- <div class="confirm-modal-overlay" v-if="confirmSubmission">
        <div class="confirm-modal">
          <img
            src="@/assets/img/question.png"
            alt=""
            srcset=""
            class="img-fluid modal-img"
          />
          <h4>Are you sure you want to submit?</h4>
          <textarea
            rows="6"
            cols="50"
            v-model="feedback"
            placeholder="Managers Feedback"
          />
          <div class="button-container my-3">
            <button class="confirm-button bg-primary" @click="confirmSubmit">
              Submit
            </button>
            <button class="cancel-button bg-danger" @click="cancelSubmit">Cancel</button>
          </div>
        </div>
      </div> -->
      <!-- end of confirmation -->
      <!-- <div class="overlayBackground" v-if="step > currentQuestion.length">
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
            <button class="rounded-pill text-white next" @click="submitAssessment">
              Submit Assessment
            </button>
          </div>
        </div>
      </div> -->
      <div class="quiz-card">
        <h4 class="text-center question-heading my-5">
          {{ currentQuestion.question }}
        </h4>
        <div
          class="questions"
          v-if="currentQuestion.type === 'radio' || currentQuestion.type === 'checkbox'"
        >
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="currentQuestion.answer.option === 'option1' ? 'active' : '1'"
                >
                  <i-icon
                    :class="currentQuestion.answer.option === 'option1' ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
                    :icon="
                      currentQuestion.answer.option === 'option1'
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
                  :class="currentQuestion.answer.option === 'option2' ? 'active' : ''"
                >
                  <i-icon
                    :class="currentQuestion.answer.option === 'option2' ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      currentQuestion.answer.option === 'option2'
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
                  :class="currentQuestion.answer.option === 'option3' ? 'active' : ''"
                >
                  <i-icon
                    :class="currentQuestion.answer.option === 'option3' ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      currentQuestion.answer.option === 'option3'
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
                  :class="currentQuestion.answer.option === 'option4' ? 'active' : ''"
                >
                  <i-icon
                    :class="currentQuestion.answer.option === 'option4' ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      currentQuestion.answer.option === 'option4'
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
        <div
          class="fileUpload w-xl-50 text-center py-3"
          v-else-if="currentQuestion.type === 'file'"
        >
          <img class="fileUpload w-xl-50" :src="currentQuestion.answer.upload" />
          image here
        </div>
        <div
          class="majorInput text-center my-5"
          v-else-if="
            currentQuestion.type === 'text' || currentQuestion.type === 'reference'
          "
        >
          <div class="textInput text_answer text-left container p-4">
            <h4 class="text_answer">{{ currentQuestion.answer.comment }}</h4>
          </div>
        </div>
        <div
          class="text-center justify-content-center d-flex align-items-center"
          v-if="loader"
        >
          <img src="@/assets/img/loaderSession.gif" class="nextLoader" />
          loading next question
        </div>
      </div>
    </div>
    <div v-if="currentQuestionIndex !== questions.length" class="text-center center my-5">
      <h5 class="question_numb py-4">Grade</h5>
      <div class="circle-container my-5">
        <div
          v-for="num in numbers"
          :key="num"
          class="px-4"
          :class="['circle', { active: num === selectedNumber }]"
          @click="handleSelectNumber(num)"
        >
          {{ num }}
        </div>
      </div>
    </div>
    <div v-if="currentQuestionIndex !== questions.length" class="text-center mt-4 center">
      <h5 class="question_numb py-4">Comment</h5>
      <div class="text-center container my-3">
        <textarea
          class="p-4"
          name=""
          id=""
          cols="6"
          rows="6"
          placeholder="Enter comments here"
          v-model="managerComment"
        />
      </div>
    </div>
    <div v-else class="mx-auto mt-5 py-5 p-2 final_page">
      <div class="border_box p-0 text-center py-3">
        <h3 class="score_heading text-muted mb-5">score</h3>
        <h3 class="mb-2">
          <span class="score_value">60</span><span class="score_value_total">/100</span>
        </h3>
      </div>
      <div class="border_box p-0 text-center py-3">
        <h3 class="score_heading text-muted mb-5">Grade</h3>
        <h3 class="score_grade mb-2">Expert (A)</h3>
      </div>
      <textarea
        class="p-4"
        name=""
        id=""
        cols="6"
        rows="6"
        v-model="feedback"
        placeholder="Write a feedback to the talent on the assessment..."
      />
      <div
        @click="showRecommendations()"
        role="button"
        class="border_box p-0 select_section"
      >
        <h6 class="d-flex px-3 py-3 justify-content-between">
          Suggest training for the talent
          <i class="fa fa-solid fa-chevron-up mx-3" v-if="recommendation"></i
          ><i class="fa fa-solid fa-chevron-down mx-3" v-if="!recommendation"></i>
        </h6>

        <div v-if="recommendation">
          <ul>
            <li v-for="items in 4" :key="items">test</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="center my-4 py-5">
      <div class="attach_file text-center py-3">
        <input type="file" accept="*/*" class="input-file" @change="handleFileUpload" />
        <img src="@/assets/icons/arrow-up.svg" />
        <small class="muted">Attach file </small>
      </div>
    </div> -->
    <div class="text-center my-4 d-flex justify-content-center" v-if="loader == false">
      <button
        v-if="currentQuestionIndex !== questions.length"
        class="back mr-3"
        @click="previousPage()"
        id="backButton"
      >
        Back
      </button>
      <button
        v-if="currentQuestionIndex !== questions.length"
        class="rounded-pill text-white next"
        @click="nextPage()"
      >
        Next
      </button>
      <button
        v-if="currentQuestionIndex == questions.length"
        class="rounded-pill text-white next"
        @click="handleConfirmation()"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import $request from "@/axios";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5],
      selectedNumber: null,
      confirmSubmission: false,
      questions: [],
      selected: null,
      step: 1,
      currentQuestionIndex: 0,
      checkedOptions: [],
      loader: false,
      score: null,
      talent: null,
      feedback: "",
      managerComment: "",
      recommendation: false,
    };
  },
  methods: {
    showRecommendations() {
      this.recommendation = !this.recommendation;
    },

    questionOptions(questions) {
      // Filter out null options and return as an array
      return Object.values(questions).filter(
        (option) => option !== null && option !== ""
      );
    },
    handleSelectNumber(num) {
      this.selectedNumber = num;
      // this.score = num;
      console.log(this.selectedNumber);
    },
    closeQuiz() {
      this.$router.go(-1);
    },
    toggleCheckbox(index) {
      this.options[index].checked = !this.options[index].checked;
    },
    selectItem(value) {
      this.selected = value;
    },
    nextPage() {
      // if (this.currentQuestionIndex < this.questions.length - 1) {
      this.handleSubmitScores();
      this.currentQuestionIndex++;
      // }
    },
    cancelSubmit() {
      this.previousPage();
      this.confirmSubmission = false;
    },
    async handleConfirmation() {
      let id = this.assessmentsId;
      console.log(id);
      const payload = {
        feedback: this.feedback,
      };
      const resp = await this.$store.dispatch("assessmentModule/submitManagerFeedback", {
        id,
        payload,
      });
      this.closeQuiz();
      console.log(resp);
    },
    async handleSubmitScores() {
      const payload = {
        assesment_id: this.currentQuestion.answer.assesment_id,
        question_id: this.currentQuestion.answer.assesment_question_id,
        talent_id: this.currentQuestion.answer.talent_id,
        score: this.selectedNumber,
        comment: this.managerComment,
      };
      const resp = await this.$store.dispatch("assessmentModule/markAssessment", payload);
      console.log(resp);
      this.selectedNumber = null;
      this.managerComment = " ";
    },

    previousPage() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
  computed: {
    // stepProgress() {
    //   return (100 / 20) * (this.step - 0.28) + "%";
    // },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  mounted() {
    const assessment = JSON.parse(localStorage.getItem("assessmentResponse"));
    // const id = JSON.parse(localStorage.getItem("userData"));

    this.questions = assessment.assesment.questions;
    this.assessments = assessment.assesment;
    this.assessmentsId = assessment.assesment.id;
    // console.log(this.assessments);
    // console.log(this.questions);
    // console.log(this.managerComment);
    // console.log(this.assessmentsId);
  },
  watch: {},
};
</script>

<style scoped>
.gap {
  gap: 10px;
}
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #0040a1;
  font-size: 20px;
  cursor: pointer;
  color: #0040a1;
}

.circle.active {
  background-color: #0040a1;
  color: #c2c2c2;
}
.nextLoader {
  height: 100px;
}
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
  /* margin: auto; */
  /* margin-top: 60px; */
  /* width: 80%; */
  height: 100%;
  border: 1px solid #c2dbff;
  padding: 10px;
  border-radius: 40px;
}
/* .container {
  padding-left: 100px !important;
  padding-right: 100px !important;
} */
.stepper-progress-bar {
  border-top: 5px solid #00ec83;
  margin-top: 114.5px;
  /* position: absolute; */
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
  outline: 1px dashed #0040a1;
  outline-offset: -10px;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  /* position: relative; */
  /* cursor: pointer; */
  border-radius: 40px;
  /* width: 60%; */
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
  border-radius: 40px;
  border: 1px solid #c2c2c2;
  background: #ebf3ff;
}

.registration-options {
  border-radius: 40px;
  border: 1px solid #e0e0e0;
  background: #fff;
  padding: 13px 27px 13px 14px;
  display: flex;
  align-items: center;
  color: #646868;
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.registration-options-icon {
  color: #e0e0e0;
}
.registration-options-icon.active {
  background-color: #ffffff;
  color: #c2c2c2;
  border-radius: 100%;
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
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.modal-img {
  height: 100px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px;
}

.grid-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.grid-item:hover {
  background-color: #e8e8e8;
}

.checkbox-label {
  margin-left: 10px;
}

input[type="checkbox"] {
  display: none;
}

.checkbox {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
}
.checkbox.checked {
  background-color: #2196f3;
  border-color: #2196f3;
}

.checkbox.checked::after {
  content: "\2713";
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 1px;
  left: 4px;
}
/*  */
.steps-progress-bar {
  width: 50%;
  /* height: 30px; */
  /* border-radius: 15px; */
  /* overflow: hidden; */
  /*  margin: 10px auto; */
}

.steps {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.step-container {
  position: relative;
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ebfff6;
  color: #000;
  border-radius: 50%;
  z-index: 2;
  border: 2px solid #c2ffe4;
}

.step.active {
  background-color: #00ec83;
  color: #fff;
}
/* .progress-line {
  flex-grow: 1;
  height: 2px;
  background-color: #ccc;
}

.progress-line.active {
  background-color: #00ec83;
} */
.progress-line {
  position: absolute;
  /* top: 50%; */
  left: calc(50% + 15px);
  width: calc(100% - 45px);
  flex-grow: 1;
  height: 2px;
  background-color: #ccc;
  /* z-index: 1; */
}

.progress-line.active {
  background-color: #00ec83;
}
.question-heading {
  color: #646868;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.page_header {
  border-bottom: 2px solid gray;
  padding: 20px 10px;
  display: flex;
}
.question_numb {
  color: #06e594;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.attach_file {
  outline: 1px dashed #0040a1;
  outline-offset: -10px;
  color: dimgray;
  position: relative;
  cursor: pointer;
  border-radius: 40px;
  width: 60%;
  margin: auto;
}
.text_answer {
  color: #c2c2c2;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.final_page {
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
}
.border_box {
  border: 1px solid #c2dbff;
  padding: 10px;
  border-radius: 40px;
}
.score_heading {
  color: #646868;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.select_section,
h6 {
  height: 60px;
  color: #646868;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.score_value {
  color: #c2c2c2;
  text-align: center;
  font-size: 48px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.score_value_total {
  color: #646868;
  text-align: center;
  font-size: 48px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.score_grade {
  color: #0040a1;
  text-align: center;
  font-size: 32px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
@media only screen and (max-width: 768px) {
  .final_page {
    display: grid;
    grid-template-columns: auto;
    gap: 25px;
  }
}
</style>
