<template>
  <div class="modal-mask">
    <div class="modal-content error">
      <img src="@/assets/icons/error.svg" class="modal-icon" alt="" />
      <h5 class="text-center modal-title">Error</h5>
      <div class="modal-body text-center">
        <slot></slot>
      </div>

      <div
        class="mt-2 modal-actions d-flex align-items-center justify-content-center"
        style="gap: 10px"
      >
        <button class="primary--button_border" @click="$emit('close')">
          Cancel
        </button>
        <button class="error-btn" @click="$emit('retry')">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
