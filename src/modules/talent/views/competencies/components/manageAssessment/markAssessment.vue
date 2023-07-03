<template>
  <div>
    <span class="closeQuiz" @click="closeQuiz">X</span>
    <div class="center">
      <div class="steps-progress-bar">
        <div class="steps">
          <div
            v-for="(step, index) in questions.length"
            :key="index"
            class="step-container"
          >
            <div class="step" :class="{ active: index <= currentQuestionIndex }">
              {{ index + 1 }}
            </div>
            <div
              v-if="index !== questions.length - 1"
              class="progress-line"
              :class="{ active: index < currentQuestionIndex }"
            ></div>
          </div>
        </div>
      </div>

      <!-- <div class="stepper-progress-bar" :style="'width:' + stepProgress"></div>
      <div class="stepper my-5">
        <div
          :class="{ current: step == steps, current: step > steps - 1 }"
          class="stepper-item-counter mt-5 mx-4"
          v-for="steps in questions.length"
          :key="steps"
        >
          <span>{{ steps }}</span>
        </div>
      </div> -->
      <!-- <div v-for="(steps, index) in questions.length" :key="steps" class="d-flex gap-3">
        <div
          :class="{ current: step == steps, current: step > steps - 1 }"
          class="stepper-item-counter"
        >
          {{ index + 1 }}
        </div>
        <div v-if="index + 1 != steps.length" class="d-flex">
          <div class="stepper-progress-bar"></div>
        </div>
      </div> -->

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
            <button class="rounded-pill text-white next" @click="submitAssessment">
              Submit Assessment
            </button>
          </div>
        </div>
      </div>
      <div class="quiz-card" v-if="currentQuestion" :key="currentQuestion.id">
        <h4 class="text-center question-heading my-5">{{ currentQuestion.question }}</h4>
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
                    :class="selected === 'option1' ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
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
                    :class="selected === 'option1' ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
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
                    :class="selected === 'option1' ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
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
                    :class="selected === 'option1' ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
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
        <div class="fileUpload text-center" v-if="currentQuestion.type === 'file'">
          <input type="file" accept="*/*" class="input-file" @change="handleFileUpload" />
          <p class="mt-5 font-weight-bold">Click or Drag and Drop</p>
          <small class="muted">SVG, PNG, JPG or GIF (max. 400 x 400px) </small>
          <h4 v-if="fileName">{{ fileName }}</h4>
        </div>
        <div class="majorInput text-center my-5" v-if="currentQuestion.type === 'text'">
          <textarea
            rows="6"
            cols="50"
            type="text"
            class="textInput"
            placeholder="Enter your Answer here"
            v-model="answer"
          />
        </div>
        <div
          class="majorInput text-center my-5"
          v-if="currentQuestion.type === 'reference'"
        >
          <input
            type="url"
            class="textInput"
            placeholder="Enter link here"
            v-model="urlLink"
          />
        </div>
        <div v-if="currentQuestion.type === 'checkbox'">
          <div class="grid-container">
            <div
              v-for="(option, index) in options"
              :key="index"
              class="grid-item"
              @click="toggleCheckbox(index)"
            >
              <div :class="['checkbox', { checked: option.checked }]">
                <input
                  type="checkbox"
                  :id="option.id"
                  :value="option.checked"
                  v-model="currentAnswer"
                  v-check-match="option.checked"
                />
              </div>
              <label :for="option.id" class="checkbox-label">{{
                option.id === "option1"
                  ? currentQuestion.option1
                  : option.id === "option2"
                  ? currentQuestion.option2
                  : option.id === "option3"
                  ? currentQuestion.option3
                  : option.id === "option4"
                  ? currentQuestion.option4
                  : "no option"
              }}</label>
            </div>
          </div>
        </div>
        <div
          class="text--center justify-content-center d-flex align-items-center"
          v-if="loader"
        >
          <img src="@/assets/img/loaderSession.gif" class="nextLoader" />
          loading next question
        </div>
      </div>
    </div>
    <div class="text-center mt-5">
      <h5 class="text-success">Grade</h5>
    </div>
    <div class="circle-container">
      <div
        v-for="num in numbers"
        :key="num"
        :class="['circle', { active: num === selectedNumber }]"
        @click="selectNumber(num)"
      >
        {{ num }}
      </div>
    </div>
    <div class="text-center mt-4">
      <h5 class="text-success">Managers Comment</h5>
    </div>
    <div class="text-center my-3">
      <textarea
        name=""
        id=""
        cols="6"
        rows="6"
        placeholder="Managers comment"
        v-model="managerComment"
      />
    </div>
    <div class="text-center my-4 d-flex justify-content-center" v-if="loader == false">
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
</template>

<script>
import $request from "@/axios";
export default {
  data() {
    return {
      options: [
        { id: "option1", name: "option1", label: "Option 1", checked: false },
        { id: "option2", name: "option2", label: "Option 2", checked: false },
        { id: "option3", name: "option3", label: "Option 3", checked: false },
        { id: "option4", name: "option4", label: "Option 4", checked: false },
      ],
      numbers: [1, 2, 3, 4, 5],
      selectedNumber: null,
      confirmSubmission: false,
      assessments: "",
      answer: "",
      selectedOption: [],
      questions: [],
      selected: null,
      fileName: "",
      fileUpload: [],
      urlLink: "",
      step: 1,
      currentQuestionIndex: 0,
      checkedOptions: [],
      loader: false,
      score: null,
      talent: null,
      feedback: "",
      managerComment: "",
      currentStep: 0,
    };
  },
  directives: {
    "check-match": {
      bind(el, binding) {
        const { value } = binding;
        if (value === binding.instance.currentAnswer) {
          el.checked = true;
        }
      },
      update(el, binding) {
        const { value } = binding;
        if (value === binding.instance.currentAnswer) {
          el.checked = true;
        } else {
          el.checked = false;
        }
      },
    },
  },
  methods: {
    selectNumber(num) {
      this.selectedNumber = num;
      this.score = num;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      this.fileUpload = formData.get("file");
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
      let talent_id = this.currentQuestion.answer.talent_id;
      this.talent = talent_id;
      this.submitQuestion();
    },
    submitAssessment() {
      this.confirmSubmission = true;
    },
    async confirmSubmit() {
      // let talent = this.currentQuestion.answer.talent_id
      // console.log(talent, "check mate")
      let id = this.assessments.id;
      const payload = {
        feedback: this.feedback,
        talent: this.talent,
      };
      try {
        let response = await $request.patch(
          `/assesments/${id}/management/feedback`,
          payload
        );
        this.closeQuiz();
      } catch (error) {
        alert("please drop a feed back");
        console.error(error.data.message);
      }
    },
    cancelSubmit() {
      this.previousPage();
      this.confirmSubmission = false;
    },
    async submitQuestion() {
      const payload = {
        assesment_id: this.currentQuestion.answer.assesment_id,
        question_id: this.currentQuestion.answer.assesment_question_id,
        talent_id: this.currentQuestion.answer.talent_id,
        score: this.score,
        comment: this.managerComment,
      };
      try {
        this.loader = true;
        let response = await $request.post(`/assesments/management/scoresheet`, payload);
        this.step++;
        this.currentQuestionIndex++;
        this.selectedNumber = "";
        this.managerComment = "";
        this.loader = false;
      } catch (error) {
        alert("please select a score");
        console.error(error.data.message);
        this.loader = false;
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
    currentAnswer: {
      get() {
        const question = this.questions[this.currentQuestionIndex];
        if (question && question.answer) {
          return (
            question.answer.option ||
            question.answer.comment ||
            question.answer.options ||
            question.answer.upload
          );
        }
        return null;
      },
      set(newAnswer) {
        const question = this.questions[this.currentQuestionIndex];
        if (question && question.answer) {
          question.answer.option = newAnswer;
          question.answer.comment = newAnswer;
          question.answer.options = newAnswer;
          question.answer.upload = newAnswer;
        }
      },
    },
  },
  mounted() {
    const assessment = JSON.parse(localStorage.getItem("assessmentResponse"));
    this.questions = assessment.assesment.questions;
    this.assessments = assessment.assesment;
    console.log(this.assessments);
  },
  watch: {
    options: {
      handler(newOptions) {
        const selectedOptionNames = newOptions
          .filter((option) => option.checked)
          .map((option) => option.name);
        this.checkedOptions = selectedOptionNames;
      },
      deep: true,
    },
    currentAnswer(newAnswer) {
      this.selected = newAnswer;
      this.answer = newAnswer;
      this.urlLink = newAnswer;
      this.options.checked = newAnswer;
    },
    currentQuestionIndex(newIndex) {
      const question = this.questions[newIndex];
      if (question && question.answer) {
        this.selected =
          question.answer.option ||
          question.answer.comment ||
          question.answer.options ||
          question.answer.upload;
        this.answer =
          question.answer.option ||
          question.answer.comment ||
          question.answer.options ||
          question.answer.upload;
        this.urlLink =
          question.answer.option ||
          question.answer.comment ||
          question.answer.options ||
          question.answer.upload;
        this.options.forEach((option) => {
          option.checked = (question.answer.options || []).includes(option.name);
        });
      }
    },
  },
};
</script>

<style scoped>
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #0040a1;
  font-size: 20px;
  cursor: pointer;
  margin: 10px;
  color: #0040a1;
}

.circle.active {
  background-color: #0040a1;
  color: #ffffff;
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
  margin: auto;
  margin-top: 130px;
  width: 80%;
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
  border-radius: 40px;
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
  color: var(--primary-color);
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
  overflow: hidden;
  margin: 10px auto;
  padding-top: 60px;
}

.steps {
  display: flex;
  justify-content: space-between;
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

.progress-line {
  position: absolute;
  top: 50%;
  left: calc(50% + 15px);
  width: calc(100% - 45px);
  height: 1px;
  background-color: #00ec83;
  z-index: 1;
}

.progress-line.active {
  background-color: #ccc;
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
</style>
