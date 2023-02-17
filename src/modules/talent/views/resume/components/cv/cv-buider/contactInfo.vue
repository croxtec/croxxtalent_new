<template>
  <div>
    <h5 style="font-size: 18px; font-weight: 600">CONTACT INFO</h5>
    <p class="small text-muted">
      Input details you would like to have on your CV
    </p>

    <div class="form-details mt-4">
      <div class="d-flex" style="gap: 20px">
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
        <div class="mb-3 w-100">
          <label for="">Email Address <span class="text-danger">*</span></label>
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

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">City <span class="text-danger">*</span></label>
          <select type="text">
            <option value="" disabled selected>Select City</option>
            <option value="Male">1</option>
            <option value="Female">2</option>
          </select>
        </div>
        <div class="mb-3 w-100">
          <label for=""
            >Postal Code<span class="font-weight-lighter"
              >(optional)</span
            ></label
          >
          <input type="text" placeholder="Input postal code" />
        </div>
      </div>

      <div>
        <div class="mb-3 w-100">
          <label for="">Home Address <span class="text-danger">*</span></label>
          <input type="text" placeholder="Input Home Address" />
        </div>
      </div>
    </div>
  </div>
</template>
