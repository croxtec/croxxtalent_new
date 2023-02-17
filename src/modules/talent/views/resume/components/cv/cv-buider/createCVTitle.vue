<template>
  <div>
    <h5 style="font-size: 18px; font-weight: 600">
      Lets help you get that resume that gets you hired
    </h5>
    <p class="small text-muted">
      Input details you would like to have on your CV
    </p>
    <div class="text-center my-4 title-page-image">
      <img src="@/assets/icons/no-user.png" alt="" />
      <i-icon icon="" />
      <div>
        <small class="text-dark mt-3" style="font-weight: 500"
          >Upload a Profile Photo</small
        >
      </div>
    </div>

    <div class="form-details">
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">First Name <span class="text-danger">*</span></label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div class="mb-3 w-100">
          <label for="">First Name <span class="text-danger">*</span></label>
          <input type="text" placeholder="Enter your last name" />
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Gender <span class="text-danger">*</span></label>
          <select type="text" placeholder="Enter your first name">
            <option value="" disabled selected>Pick Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="mb-3 w-100">
          <label for="">Date of Birth <span class="text-danger">*</span></label>
          <input type="date" placeholder="Enter your first name" />
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Industry <span class="text-danger">*</span></label>
          <select type="text" placeholder="Enter your first name">
            <option value="" disabled selected>Pick Industry</option>
            <option value="Male">1</option>
            <option value="Female">2</option>
          </select>
        </div>
        <div class="mb-3 w-100">
          <label for="">Job Title<span class="text-danger">*</span></label>
          <input type="text" placeholder="Enter your Job title" />
        </div>
      </div>

      <div>
        <div class="d-flex justify-content-between">
          <label for="">About You <span class="text-danger">*</span></label>
          <span class="" style="font-size: 14px">(150 words)</span>
        </div>
        <textarea name="" id="" cols="30" rows="4"></textarea>
      </div>
    </div>
  </div>
</template>
