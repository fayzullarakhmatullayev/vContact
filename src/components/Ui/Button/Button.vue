<template>
  <button class="btn" :class="btnClass"><slot /></button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

type ButtonProps = 'btn-blue' | 'btn-red' | 'btn-green' | 'btn-add'

defineProps({
  btnClass: String as PropType<ButtonProps>
})
</script>

<style lang="scss" scoped>
@import 'button.style.scss';
</style>
