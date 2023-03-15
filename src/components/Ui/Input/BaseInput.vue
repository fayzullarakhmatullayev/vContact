<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
type InputTypes = 'text' | 'password' | 'email' | 'tel'

defineProps({
  type: {
    type: String as PropType<InputTypes>,
    default: 'text'
  },
  placeholder: String
})
</script>

<style lang="scss" scoped>
@import 'base-input.style.scss';
</style>
