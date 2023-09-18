<template>
  <div id="profile-views" class="mb-5">
    <div class="profile-views_container">
      <div class="user-profile-views-card">
        <div class="left_section">
          <h4>Total Number Of Views</h4>
          <div class="No_views">
            <p><span>349</span> Views</p>
          </div>
        </div>
        <div class="right_section">
          <p>past 30d</p>
          <CaretDown />
        </div>
      </div>
    </div>
    <div class="heading"><h5>Who viewed your profile</h5></div>
    <div class="profile-views-container">
      <div class="profile-views-list">
        <div v-for="item in 4" :key="item" class="profile-views-card">
          <div class="viewer">
            <img src="@/assets/img/round-logo.png" alt="" />
            <div class="viewer_details">
              <h4>Schlumberger</h4>
              <span>Viewed 9m ago</span>
            </div>
          </div>
          <button class="primary--button_border button_color">View Profile</button>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination_section">
        <div class="pagination_buttons">
          <div
            @click="previousPage"
            :disabled="currentPage === 1"
            role="button"
            class="pagination_button"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="#282929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <span
              role="button"
              v-for="(pageNumber, index) in pageNumbers"
              :key="pageNumber"
              @click="goToPage(pageNumber)"
              :class="{
                pagination_number_active: pageNumber === currentPage,
                pagination_number_inactive: pageNumber !== currentPage,
              }"
              class=""
              >{{ displayPageNumber(index, pageNumber) }}</span
            >
          </div>
          <div
            @click="nextPage"
            :disabled="currentPage === totalPages"
            role="button"
            class="pagination_button"
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 1L7.625 7L1.375 13"
                stroke="#282929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CaretDown from "@/modules/talent/views/croxxprofile/components/caretDown";
export default {
  components: { CaretDown },
  data() {
    return { currentPage: 1, pageSize: 3, totalPages: 5, pageNumbers: 3 };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    displayPageNumber(index, pageNumber) {
      if (this.totalPages <= 4) {
        return pageNumber;
      } else {
        if (index === 2 || index === this.totalPages - 3) {
          return "";
        } else if (index > 1 && index < this.totalPages - 2) {
          if (this.currentPage >= pageNumber - 1 && this.currentPage <= pageNumber + 1) {
            return pageNumber;
          } else {
            return "";
          }
        } else {
          return pageNumber;
        }
      }
    },
  },
};
</script>
<style scoped>
#profile-views {
  padding-bottom: 100px;
}
.viewer_details p {
  color: #646868;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.viewer {
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
}
.viewer_details h4 {
  color: #282929;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
}
.pagination {
  position: relative;
}
.button_color {
  border: 1px solid #c2dbff !important;
}
.heading {
  text-align: center;
  padding-top: 80px;
  padding-bottom: 10px;
}
.heading h5 {
  color: #646868;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  text-align: center;
}
.pagination_buttons {
  display: flex;
  /* width: 10%;
  margin: 0 auto; */
}
.pagination_section {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination_button {
  padding: 0px 20px;
  /* border: 1px solid #e5e7eb; */
  border-radius: 0.375rem;
}
.pagination_number_active {
  background-color: #0040a1;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}
.pagination_number_inactive {
  background-color: #ffffff;
  color: #0040a1;
  padding: 10px 20px;
  border-radius: 8px;
}
.No_views p span {
  color: #0040a1;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 24px */
}
.No_views p {
  color: #646868;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}
.left_section h4 {
  color: #282929;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}
.right_section p {
  color: #0040a1;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  text-underline-offset: 6px !important;
  text-decoration-line: underline !important;
}
.right_section {
  align-items: center;
  display: flex;
  gap: 5px;
  flex-direction: row;
}
.left_section {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
.profile-views-list {
  padding: 20px 0px;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.profile-views-card {
  border-radius: 30px;
  border: 1px solid #cbd7e7;
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 23px 40px 23px 40px;
  justify-content: space-between;
  align-items: center;
  gap: 46px;
}
.profile-views_container {
  display: flex;
  align-items: center;
}
.profile-views-container {
  width: 100%;
}
.user-profile-views-card {
  border: 1px solid #c2dbff;
  border-radius: 40px;
  padding: 23px 40px;
  gap: 20px;
  background: #ffffff;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .user-profile-views-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left_section h4 {
    font-size: 18px;
    text-align: center;
  }
  .left_section {
    text-align: center;
  }
  .profile-views-card {
    border-radius: 30px;
    border: 1px solid #cbd7e7;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 23px 40px 23px 40px;
    justify-content: space-between;
    align-items: center;
    gap: 46px;
  }
}
</style>
