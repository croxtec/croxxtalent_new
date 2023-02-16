<template>
  <div class="form-details mt-4">
    <div class="mb-3">
      <label for=""
        >Institution/School <span class="text-danger">*</span></label
      >
      <input type="text" placeholder="Name of school" />
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Degree <span class="text-danger">*</span></label>
        <select type="text" placeholder="Enter your first name">
          <option value="" disabled selected class="font-weight-light">
            Select Country
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="mb-3 w-100">
        <label for="">Course of Study <span class="text-danger">*</span></label>
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
          <label for="">End Date<span class="text-danger">*</span></label>
          <!-- <input type="text" placeholder="Input postal code" /> -->
          <input type="date" name="" id="" />
        </div>
        <div class="w-100">
          <label for="">End Date<span class="text-danger">*</span></label>
          <!-- <input type="text" placeholder="Input postal code" /> -->
          <input type="date" name="" id="" />
        </div>
      </div>
      <div class="d-flex align-items-center mt-2" style="gap: 8px">
        <input type="checkbox" name="" id="checkBox" />
        <span style="color: var(--gray-300); font-weight: 300; font-size: 13px"
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
</template>
