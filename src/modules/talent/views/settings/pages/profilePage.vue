<template>
  <div class="settings-container container">
    <h3 class="settings-header">Profile Settings</h3>
    <div>
      <div class="user-img-container">
        <img class="user-img" src="@/assets/icons/no-user.png" />
        <img class="" src="@/assets/icons/editIcon.svg" />
      </div>
      <p class="text-center">Upload A Profile Picture</p>
    </div>
    <div class="input-container">
      <div class="input-group mt-5">
        <div class="">
          <label class="input-lable">First Name<span class="red-star">*</span></label>
          <input type="" placeholder="Enter your first name" />
        </div>
        <div class="">
          <label class="input-lable">Last Name<span class="red-star">*</span></label>
          <input type="" placeholder="Enter your last name" />
        </div>
      </div>
      <div class="">
        <label class="input-lable">Email Address<span class="red-star">*</span></label>
        <input type="" placeholder="Campaign Title" />
      </div>
      <div class="">
        <label class="input-lable">Phone Number<span class="red-star">*</span></label>
        <input type="" placeholder="Enter phone number" />
      </div>
    </div>
    <button
      class="primary--button mt-5 p-3 px-5 d-flex align-items-center mx-auto"
      style="gap: 10px"
    >
      <span>Save Changes</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
