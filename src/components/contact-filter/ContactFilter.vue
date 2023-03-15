<template>
  <div class="contact-filter">
    <div class="contact-filter__title">Filters</div>
    <div class="contact-filter__inner">
      <BaseInput placeholder="By Name" @input="emit('filterByName', $event.target.value)" />
      <BaseInput
        type="tel"
        placeholder="By Phone"
        @input="emit('filterByPhone', $event.target.value)"
      />
      <BaseInput
        type="email"
        placeholder="By Email"
        @input="emit('filterByEmail', $event.target.value)"
      />
      <BaseInput placeholder="By Tag" @input="emit('filterByTagname', $event.target.value)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseInput from '@/components/Ui/Input/BaseInput.vue'

const emit = defineEmits<{
  (e: 'filterByName', text: string): void
  (e: 'filterByPhone', text: string): void
  (e: 'filterByEmail', text: string): void
  (e: 'filterByTagname', text: string): void
}>()
</script>

<style lang="scss" scoped>
@import 'contact-filter.style.scss';
</style>
