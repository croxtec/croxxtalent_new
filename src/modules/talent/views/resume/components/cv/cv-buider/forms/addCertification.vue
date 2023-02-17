<template>
  <div>
    <div class="form-details mt-4">
      <div class="mb-3">
        <label for=""
          >Institution/School <span class="text-danger">*</span></label
        >
        <input type="text" placeholder="Name of school" />
      </div>

      <div class="mb-3">
        <label for="">Course <span class="text-danger">*</span></label>
        <input type="text" placeholder="Name of school" />
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
          <span
            style="color: var(--gray-300); font-weight: 300; font-size: 13px"
            >No Expiration Date</span
          >
        </div>
      </div>

      <div class="text-center">
        <button class="primary--button">Save</button>
      </div>
    </div>
  </div>
</template>
