<template>
  <div>
    <!-- <span class="closeQuiz" @click="closeQuiz">X</span> -->
    <div class="center p-3 w-xl-25 mx-xl-auto my-xl-4 text-center mb-5">
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

      <!-- <div class="stepper-progress-bar" :style="'width:' + stepProgress"></div> -->
      <!-- <div class="stepper my-5">
        <div
          :class="{ current: step == steps, current: step > steps - 1 }"
          class="stepper-item-counter mx-4"
          v-for="steps in questions.length"
          :key="steps"
        >
          <span>{{ steps }}</span>
        </div>
      </div> -->
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
          <div class="button-container my-3">
            <button class="confirm-button bg-primary" @click="confirmSubmit">
              Submit
            </button>
            <button class="cancel-button bg-danger" @click="cancelSubmit">Cancel</button>
          </div>
        </div>
      </div> -->
      <!-- end of confirmation -->
      <!-- <div class="overlayBackground" v-if="step > questions.length">
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
      <div v-if="currentQuestionIndex !== questions.length" class="quiz-card">
        <h4 class="text-center question-heading my-5">{{ currentQuestion.question }}</h4>
        <div v-if="currentQuestion.type === 'radio'" class="questions">
          <div class="container px-0 mt-4">
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
                  :class="selected === 'option2' ? 'active' : '2'"
                  role="button"
                  @click="selectItem('option2')"
                >
                  <i-icon
                    :class="selected === 'option2' ? 'active' : '2'"
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
                    :class="selected === 'option3' ? 'active' : '3'"
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
                    :class="selected === 'option4' ? 'active' : '4'"
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
        <!--multi select -->
        <div v-else-if="currentQuestion.type === 'checkbox'" class="questions">
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="mb-4 registration-options"
                  :class="isSelected('option1') ? 'active' : '1'"
                  role="button"
                  @click="toggleSelection('option1')"
                >
                  <i-icon
                    :class="isSelected('option1') ? 'active' : '1'"
                    class="mr-4 registration-options-icon"
                    :icon="
                      isSelected('option1')
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
                  :class="isSelected('option2') ? 'active' : ''"
                  role="button"
                  @click="toggleSelection('option2')"
                >
                  <i-icon
                    :class="isSelected('option2') ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      isSelected('option2')
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
                  :class="isSelected('option3') ? 'active' : ''"
                  role="button"
                  @click="toggleSelection('option3')"
                >
                  <i-icon
                    :class="isSelected('option3') ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      isSelected('option3')
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
                  :class="isSelected('option4') ? 'active' : ''"
                  role="button"
                  @click="toggleSelection('option4')"
                >
                  <i-icon
                    :class="isSelected('option4') ? 'active' : ''"
                    class="mr-4 registration-options-icon"
                    :icon="
                      isSelected('option4')
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
        <!-- upload file -->
        <label
          v-else-if="currentQuestion.type === 'file'"
          for="file-upload"
          class="fileUpload w-xl-50 text-center py-3"
        >
          <input
            type="file"
            accept="*/*"
            hidden
            id="file-upload"
            class="input-file"
            @change="handleFileUpload"
          />
          <p class="mt-5 font-weight-bold">Click or Drag and Drop</p>
          <small class="muted">SVG, PNG, JPG or GIF (max. 400 x 400px) </small>
          <h4 v-if="fileName">{{ fileName }}</h4>
        </label>
        <div
          v-else-if="currentQuestion.type === 'text'"
          class="container text-center my-5"
        >
          <textarea
            rows="6"
            cols="50"
            type="text"
            placeholder="Enter your Answer here"
            v-model="questionAnswer"
            class="p-4"
          />
        </div>
        <div v-else-if="currentQuestion.type === 'reference'" class="text-center my-5">
          <input
            type="url"
            class="textInput"
            placeholder="Enter link here"
            v-model="urlLink"
          />
        </div>
        <div>
          <!-- <div class="grid-container">
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
                  :name="option.name"
                  v-model="option.checked"
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
          </div> -->
        </div>
        <div
          class="text--center justify-content-center d-flex align-items-center"
          v-if="loader"
        >
          <img src="@/assets/img/loaderSession.gif" class="nextLoader" />
          loading next question
        </div>
      </div>
      <!-- last view -->
      <div v-else class="text-center mt-4">
        <h4 class="text-center question-heading my-5">Weldone!</h4>
        <div class="review_section container justify-content-center">
          <h4 class="question-heading py-2">How was the test?</h4>
          <button class="back" id="backButton">
            <img src="@/assets/icons/like.svg" /> Good
          </button>
          <button class="back" id="backButton">
            <img src="@/assets/icons/like-dislike.svg" /> Indifferent
          </button>
          <button class="back" id="backButton">
            <img src="@/assets/icons/dislike.svg" /> Terrible
          </button>
        </div>
        <div class="text-center container my-3">
          <textarea
            class="p-4"
            name=""
            id=""
            cols="4"
            rows="6"
            v-model="feedback"
            placeholder="Do you have a feedback"
          />
        </div>
      </div>
      <div>{{ selectedOption }}</div>

      <div class="text-center mt-3 d-flex justify-content-center">
        <button
          v-if="currentQuestionIndex !== questions.length"
          class="back mr-3"
          @click="previousPage()"
          id="ba ckButton"
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
  </div>
</template>

<script>
import $request from "@/axios";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // options: [
      //   { id: "option1", name: "option1", label: "Option 1", checked: false },
      //   { id: "option2", name: "option2", label: "Option 2", checked: false },
      //   { id: "option3", name: "option3", label: "Option 3", checked: false },
      //   { id: "option4", name: "option4", label: "Option 4", checked: false },
      // ],
      confirmSubmission: false,
      assessments: "",
      questionAnswer: "",
      selectedOption: null,
      questions: [],
      selected: null,
      fileName: "",
      fileUpload: [],
      urlLink: "",
      step: 1,
      currentQuestionIndex: 0,
      checkedOptions: [],
      loader: false,
      feedback: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.currentQuestion.type === "radio") {
        this.selectedOption = this.selected;
      } else if (this.currentQuestion.type === "text") {
        this.selectedOption = this.questionAnswer;
      } else if (this.currentQuestion.type === "file") {
        this.selectedOption = this.fileUpload;
      } else if (this.currentQuestion.type === "reference") {
        this.selectedOption = this.urlLink;
      } else if (this.currentQuestion.type === "checkbox") {
        this.selectedOption = this.checkedOptions;
      }
      // switch (this.currentQuestion.type) {
      //   case "radio":
      //     this.selectedOption = this.selected;
      //     break;
      //   case "text":
      //     this.selectedOption = this.questionAnswer;
      //     break;
      //   case "file":
      //     this.selectedOption = this.fileUpload;
      //     break;
      //   case "reference":
      //     this.selectedOption = this.urlLink;
      //     break;
      //   case "checkbox":
      //     this.selectedOption = this.checkedOptions;
      //     break;
      //   default:
      //     this.selectedOption = null;
      //     break;
      // }
      const payload = {
        assesment_id: this.assessments.id,
        question_id: this.currentQuestion.id,
        answer: this.selectedOption,
      };
      const resp = await this.$store.dispatch("assessmentModule/submitAssesmentAnswers", {
        payload,
      });
    },

    async handleConfirmation() {
      let id = this.assessments.id;
      const payload = {
        feedback: this.feedback,
      };
      const resp = await this.$store.dispatch(
        "assessmentModule/publishAssesmentsAnswers",
        { id, payload }
      );
      this.closeQuiz();
      console.log(resp);
    },

    toggleSelection(option) {
      // Check if the option is already selected
      const index = this.checkedOptions.indexOf(option);
      if (index > -1) {
        // Option is already selected, remove it from the checkedOptions array
        this.checkedOptions.splice(index, 1);
      } else {
        // Option is not selected, add it to the checkedOptions array
        this.checkedOptions.push(option);
      }
    },
    isSelected(option) {
      // Check if the option is in the checkedOptions array
      return this.checkedOptions.includes(option);
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
      // if (this.currentQuestionIndex < this.questions.length - 1) {
      this.handleSubmit();
      this.currentQuestionIndex++;
      // }
    },
    // submitAssessment() {
    //   this.confirmSubmission = true;
    // },
    // confirmSubmit() {
    //   let id = this.assessments.id;
    //   $request.patch(`/assesments/${id}/talent/publish`);
    //   this.closeQuiz();
    // },
    cancelSubmit() {
      this.previousPage();
      // this.confirmSubmission = false;
    },
    // async submitQuestion() {
    //   if (this.currentQuestion.type === "radio") {
    //     this.selectedOption = this.selected;
    //   } else if (this.currentQuestion.type === "text") {
    //     this.selectedOption = this.questionAnswer;
    //   } else if (this.currentQuestion.type === "file") {
    //     this.selectedOption = this.fileUpload;
    //   } else if (this.currentQuestion.type === "reference") {
    //     this.selectedOption = this.urlLink;
    //   } else if (this.currentQuestion.type === "checkbox") {
    //     this.selectedOption = this.checkedOptions;
    //   }
    //   const payload = {
    //     assesment_id: this.assessments.id,
    //     question_id: this.currentQuestion.id,
    //     answer: this.selectedOption,
    //   };
    //   try {
    //     this.loader = true;
    //     let response = await $request.post(`/assesments/talent/answer`, payload, {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
    //     // this.step++;
    //     this.currentQuestionIndex++;
    //     this.loader = false;
    //   } catch (error) {
    //     // alert("please select an option");
    //     console.error(error.data.message);
    //     this.loader = false;
    //   }
    // },
    previousPage() {
      // this.step--;
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
    // selectedOption() {
    //   if (this.currentQuestion.type === "radio") {
    //     return this.selected;
    //   } else if (this.currentQuestion.type === "text") {
    //     return this.questionAnswer;
    //   } else if (this.currentQuestion.type === "file") {
    //     return this.fileUpload;
    //   } else if (this.currentQuestion.type === "reference") {
    //     return this.urlLink;
    //   } else if (this.currentQuestion.type === "checkbox") {
    //     return this.checkedOptions;
    //   } else {
    //     return null;
    //   }
    // },
  },
  mounted() {
    const assessment = JSON.parse(localStorage.getItem("assessmentQuestions"));
    this.questions = assessment.questions;
    this.assessments = assessment;
    console.log(this.assessments);
    console.log(this.questions);
  },
  watch: {
    // options: {
    //   handler(newOptions) {
    //     const selectedOptionNames = newOptions
    //       .filter((option) => option.checked)
    //       .map((option) => option.name);
    //     this.checkedOptions = selectedOptionNames;
    //   },
    //   deep: true,
    // },
  },
};
</script>

<style scoped>
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

.review_section {
  display: flex;
  gap: 10px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.registration-options-icon {
  color: #e0e0e0;
}
.registration-options-icon.active {
  background-color: #ffffff;
  color: #c2c2c2;
  border-radius: 100%;
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
  margin-top: 60px;
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
  position: absolute;
  width: 350px;
  left: 600px;
  top: 120px;
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
  width: 60%;
  height: 152px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #c2dbff;
  padding: 20px;
  margin: 0 auto;
}
.back {
  padding: 10px 21px;
  gap: 10px;
  color: #0040a1;
  border: 1px solid #0040a1;
  border-radius: 40px;
  background: #ffffff;
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
</style>
