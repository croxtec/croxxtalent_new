<template>
    <div class="modal-mask">
      <div class="modal-content">
        <img src="@/assets/icons/success.svg" class="modal-icon" alt="" />
        <h5 class="text-center modal-title">{{ title }}</h5>
        <div class="modal-body text-center">
          <slot></slot>
        </div>
  
        <div
          class="mt-2 modal-actions d-flex align-items-center justify-content-center"
          style="gap: 10px"
        >
          <!-- <button class="primary--button_border" @click="$emit('close')">
            Cancel
          </button> -->
          <router-link to="/login"><button class="primary--button">Login</button></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        title: {
            type: String,
            default: "Modal Title"
        }
    }
  };
  </script>
  
  <style></style>
  