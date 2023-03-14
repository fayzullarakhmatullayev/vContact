<template>
  <ul class="list">
    <ContactListItem
      v-for="contact in store.contacts"
      :key="contact.id"
      :contact="contact"
      @open-detail="router.push(`/contact/${contact.id}`)"
    />
  </ul>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store/contacts.js'
import ContactListItem from './ContactListItem.vue'
const router = useRouter()
const store = useContactsStore()
</script>

<style lang="scss" scoped>
@import 'contact-list.style.scss';
</style>
