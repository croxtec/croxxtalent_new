<template>
  <modal-wrapper title="Registration Successful">
    <slot></slot>
  </modal-wrapper>
</template>

<script>
import ModalWrapper from "@/components/ModalWrapper.vue"

export default {
  components: { ModalWrapper }
}
</script>

<style>

</style>