<template>
  <div class="modal">
    <div class="modal-outer" @click="emit('closeModal')" />
    <div class="modal-inner">
      <div class="modal-close" @click="emit('closeModal')">
        <img src="@/assets/svg/close-outline.svg" alt="close-outline" />
      </div>
      <h2 class="modal-title"><slot name="title" /></h2>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: 'closeModal'): void }>()
</script>

<style lang="scss" scoped>
@import 'modal.style.scss';
</style>
