<template>
  <div class="modal-mask">
    <div class="modal-content error">
      <img src="@/assets/icons/error.svg" class="modal-icon" alt="" />
      <h5 class="text-center modal-title">Error</h5>
      <div class="modal-body">
        <p class="text-center">Action failed successfully</p>
      </div>

      <div
        class="mt-2 modal-actions d-flex align-items-center justify-content-center"
        style="gap: 10px"
      >
        <button class="primary--button_border">Cancel</button>
        <button class="error-btn">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
