<template>
  <TransitionGroup tag="ul" class="list" name="list">
    <ContactListItem
      v-for="contact in filteredContacts"
      :key="contact.id"
      :contact="contact"
      @open-detail="router.push(`/contact/${contact.id}`)"
    />
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ContactListItem from './ContactListItem.vue'
import type { PropType } from 'vue'
import type { IContacts } from '@/types/contacts'
const router = useRouter()

defineProps({
  filteredContacts: Object as PropType<IContacts[]>
})
</script>

<style lang="scss" scoped>
@import 'contact-list.style.scss';
</style>
