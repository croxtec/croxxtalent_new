<template>
  <div class="interview-card bg-white">
    <div class="interview-header">
      <h5>Upcoming Interviews</h5>
    </div>
    <div class="interview-date-section">
      <h5><span>Today,</span> 26 December</h5>
      <div><CaretLeft role="button" /><CaretRight role="button" /></div>
    </div>
    <div class="interview-body">
      <div v-for="i in 3" :key="i" class="date-section">
        <h4>10:00 AM</h4>
        <hr class="bar-line" />
        <div v-if="i == 2" class="active-interview">
          <img
            src="@/assets/img/interviewerAvater.png"
            class="interviewerAvater"
            alt=""
          />
          <div class="interviewer-details">
            <h4>Aisha Okocha</h4>
            <p>HR Manager at Schlumberger</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CaretLeft from "@/components/icons/caretLeft.vue";
import CaretRight from "@/components/icons/caretRight.vue";
export default {
  components: { CaretLeft, CaretRight },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.interview-card {
  border: 1px solid var(--blue-300);
  /* padding: 20px; */
  border-radius: 25px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.interview-header {
  padding: 13px 20px;
  border-bottom: 1px solid var(--blue-300);
  color: #282929;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
}
.interview-date-section h5 {
  color: #282929;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
.interview-date-section h5 span {
  color: #282929;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
}
.interview-date-section {
  border-bottom: 1px solid var(--blue-300);
  background: #fff;
  padding: 10px 20px;
  box-shadow: 0px 8px 40px 0px rgba(13, 11, 65, 0.04);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.interview-body {
  height: 70%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}
.bar-line {
  background: #c2dbff;
  width: 70%;
  height: 2px;
  border: none;
}
.date-section h4 {
  color: #646868;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
}
.date-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.active-interview {
  border-radius: 40px;
  background: #ebf3ff;
  padding: 14px;
  /* height: 53px; */
  position: absolute;
  width: 67%;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.interviewerAvater {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  flex-shrink: 0;
}
.interviewer-details p {
  color: #646868;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
}
.interviewer-details h4 {
  color: #282929;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
}
.assesement-completed {
  padding: 4px 15px !important;
  border-radius: 25px;
}
</style>
