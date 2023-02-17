<template>
  <div class="form-details mt-4">
    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Title <span class="text-danger">*</span></label>
        <input type="text" placeholder="Input Award Title" />
      </div>
      <div class="w-100">
        <label for="">Date Received<span class="text-danger">*</span></label>
        <!-- <input type="text" placeholder="Input postal code" /> -->
        <input type="date" name="" id="" />
      </div>
    </div>

    <div class="mb-3">
      <label for="">Award Organization<span class="text-danger">*</span></label>
      <input type="text" name="" placeholder="Organization Name" id="" />
    </div>

    <div class="mb-3">
      <label for="">Decription <span class="text-danger">*</span></label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Description"
      ></textarea>
    </div>

    <div class="text-center">
      <button class="primary--button">Save</button>
    </div>
  </div>
</template>
