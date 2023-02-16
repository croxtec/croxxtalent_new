<template>
  <div class="form-details mt-4">
    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">First Name <span class="text-danger">*</span></label>
        <input type="text" placeholder="Enter your First Name" />
      </div>
      <div class="mb-3 w-100">
        <label for="">Last Name <span class="text-danger">*</span></label>
        <input type="text" placeholder="Enter your Last Name" />
      </div>
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Company <span class="text-danger">*</span></label>
        <input type="text" placeholder="Company Name" />
      </div>
      <div class="mb-3 w-100">
        <label for="">Position <span class="text-danger">*</span></label>
        <input type="text" placeholder="Position in Company" />
      </div>
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Email Address <span class="text-danger">*</span></label>
        <input type="text" placeholder="Enter your last name" />
      </div>
      <div class="mb-3 w-100">
        <label for="">Phone Number <span class="text-danger">*</span></label>
        <div class="phone-number-input">
          <el-dropdown>
            <span class="el-dropdown-link">
              <country-flag country="NG" size="small" />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <input type="tel" placeholder="Enter phone number" />
        </div>
      </div>
    </div>

    <div class="text-center">
      <button class="primary--button">Save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
