<template>
  <li class="list-item" @click="emit('openDetail')">{{ contact.name }}</li>
</template>

<script lang="ts" setup>
import type { IContacts } from '@/types/contacts'
import type { PropType } from 'vue'

defineProps({
  contact: {
    type: Object as PropType<IContacts>,
    default: () => ({
      name: ''
    })
  }
})

const emit = defineEmits<{
  (e: 'openDetail'): void
}>()
</script>

<style lang="scss" scoped>
@import 'contact-list.style.scss';
</style>
