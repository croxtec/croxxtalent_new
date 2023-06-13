<template>
  <div>
    <h5 style="font-size: 18px; font-weight: 600">WORK HISTORY</h5>
    <p class="small text-muted">
      Input details you would like to have on your CV
    </p>

    <div class="form-details mt-4">
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Employer <span class="text-danger">*</span></label>
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
        <div class="mb-3 w-100">
          <label for="">Job Title <span class="text-danger">*</span></label>
          <input type="text" placeholder="Enter your last name" />
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Country <span class="text-danger">*</span></label>
          <select type="text" placeholder="Enter your first name">
            <option value="" disabled selected class="font-weight-light">
              Select Country
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div class="mb-3 w-100">
          <label for="">State <span class="text-danger">*</span></label>
          <select type="text" placeholder="Enter your first name">
            <option value="" disabled selected class="font-weight-light">
              Select State
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex" style="gap: 20px">
          <div class="w-100">
            <label for="">City <span class="text-danger">*</span></label>
            <input type="date" name="" id="" />
            <!-- <select type="text">
            <option value="" disabled selected>Select City</option>
            <option value="Male">1</option>
            <option value="Female">2</option>
          </select> -->
          </div>
          <div class="w-100">
            <label for="">End Date<span class="text-danger">*</span></label>
            <!-- <input type="text" placeholder="Input postal code" /> -->
            <input type="date" name="" id="" />
          </div>
        </div>
        <div class="d-flex align-items-center mt-2" style="gap: 8px">
          <input type="checkbox" name="" id="checkBox" />
          <span
            style="color: var(--gray-300); font-weight: 300; font-size: 13px"
            >I currently work here</span
          >
        </div>
      </div>

      <div class="mb-3">
        <label for="">Decription <span class="text-danger">*</span></label>
        <textarea name="" id="" cols="30" rows="4"></textarea>
      </div>

      <div class="text-center">
        <button class="primary--button">Save</button>
      </div>
    </div>
  </div>
</template>

