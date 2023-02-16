<template>
  <div class="form-details mt-4">
    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Domain <span class="text-danger">*</span></label>
        <select type="text" placeholder="Enter your first name">
          <option value="" disabled selected class="font-weight-light">
            Select Domain
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div class="mb-3 w-100">
        <label for="">Core <span class="text-danger">*</span></label>
        <select type="text" placeholder="Enter your first name">
          <option value="" disabled selected class="font-weight-light">
            Select Core
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>

    <div class="d-flex" style="gap: 20px">
      <div class="mb-3 w-100">
        <label for="">Skill <span class="text-danger">*</span></label>
        <select type="text" placeholder="Enter your first name">
          <option value="" disabled selected class="font-weight-light">
            Select Skill
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
            v-for="(item, index) in levels"
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
            <span class="font-weight-light" style="font-size: 11.5px">
              {{ item.title }}
            </span>
            <div class="d-flex align-items-center">
              <i-icon
                icon="ic:baseline-star-rate"
                v-for="item in index + 1"
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
      activeEl: 0,
      levels: [
        {
          id: 1,
          title: "Beginner",
        },
        {
          id: 2,
          title: "Intermediate",
        },
        {
          id: 3,
          title: "Advanced",
        },
        {
          id: 4,
          title: "Expert",
        },
      ],
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
