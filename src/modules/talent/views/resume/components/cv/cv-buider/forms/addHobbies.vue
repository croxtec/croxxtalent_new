<template>
  <div class="form-details mt-4">
    <div class="mb-3">
      <label for="">Hobbies <span class="text-danger">*</span></label>
      <select type="text" placeholder="Enter your first name">
        <option value="" disabled selected class="font-weight-light">
          Add Hobbies
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>

    <div class="text-center">
      <button class="primary--button">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeEl: 1,
    };
  },

  methods: {
    selectLevel(value) {
      this.activeEl = value;
    },
  },
};
</script>

<style></style>
