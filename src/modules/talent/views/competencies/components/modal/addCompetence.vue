<template>
  <div class="modal-mask">
    <div class="modal-content add-competence">
      <div class="modal-title d-flex align-items-center">
        <h5 class="text-center w-100">Add Competence</h5>
        <span class="d-block" role="button" @click="$emit('close')"
          ><i-icon
            icon="material-symbols:close"
            width="20px"
            class="text-danger"
        /></span>
      </div>
      <hr />
      <div class="modal-body">
        <div class="competence-search mb-3">
          <i-icon icon="teenyicons:search-outline" />
          <input type="search" placeholder="Search domain, core, skills" />
        </div>
        <form @submit.prevent="alert('Form Submitted')">
          <div class="mb-3">
            <label for="">Domain</label>
            <select name="" id="">
              <option value="" selected disabled>Domain</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Core</label>
            <select name="" id="">
              <option value="" selected disabled>Core</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Skills</label>
            <select name="" id="">
              <option value="" selected disabled>Skills</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="">Level</label>
            <select name="" id="">
              <option value="" selected disabled>Level</option>
              <option value="">Value 1</option>
              <option value="">Value 2</option>
            </select>
          </div>
        </form>
      </div>

      <div
        class="mt-2 modal-actions d-flex align-items-center justify-content-center"
        style="gap: 10px"
      >
        <button class="primary--button" @click="$emit('add-competence')">
          Add Competence
        </button>
        <!-- <button class="error-btn" @click="$emit('retry')">Try Again</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
