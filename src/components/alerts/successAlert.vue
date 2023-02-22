<template>
  <div class="modal-mask">
    <div class="modal-content success">
      <img src="@/assets/icons/success.svg" class="modal-icon" alt="" />
      <h5 class="text-center modal-title">Success</h5>
      <div class="modal-body text-center">
        <slot></slot>
      </div>

      <div class="modal-actions mt-2 text-center">
        <button class="primary--button_border" @click="$emit('close')">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
