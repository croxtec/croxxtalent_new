<template>
  <div class="form-details mt-4">
    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Language <span class="text-danger">*</span></label>
        <select type="text" placeholder="Enter your first name">
          <option value="" disabled selected class="font-weight-light">
            Language
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="mb-3 w-100">
        <label for="">Level <span class="text-danger">*</span></label>
        <div class="levels">
          <div
            role="button"
            class="level-select"
            v-for="index in 4"
            :key="index"
            @click="selectLevel(index)"
          >
            <i-icon
              :icon="
                activeEl === index
                  ? 'material-symbols:check-circle-rounded'
                  : 'ic:sharp-radio-button-unchecked'
              "
              :color="
                activeEl === index ? 'var(--primary-color)' : 'var(--gray-150)'
              "
            />

            <div class="d-flex align-items-center">
              <i-icon
                icon="ic:baseline-star-rate"
                v-for="item in index"
                :key="item"
                :color="
                  activeEl === index
                    ? 'var(--primary-color)'
                    : 'var(--gray-150)'
                "
              />
            </div>
          </div>
        </div>
      </div>
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
