<template>
  <li class="list-item" @click="emit('openDetail')">
    <h4>{{ contact.name }}</h4>
    <small>{{ contact.phone }}</small>
    <ul class="tags">
      <li v-for="(tag, i) in contact.tags" :key="`${tag}_${i}`">#{{ tag }}</li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
import type { IContacts } from '@/types/contacts'
import type { PropType } from 'vue'

defineProps({
  contact: {
    type: Object as PropType<IContacts>,
    default: () => ({})
  }
})

const emit = defineEmits<{
  (e: 'openDetail'): void
}>()
</script>

<style lang="scss" scoped>
@import 'contact-list.style.scss';
</style>
