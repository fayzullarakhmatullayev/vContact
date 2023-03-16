<template>
  <TransitionGroup tag="ul" class="list" name="list">
    <ContactListItem
      v-for="(contact, i) in filteredContacts"
      :key="`${contact.id}_${i}`"
      :contact="contact"
      @open-detail="openDetail(contact)"
    />
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ContactListItem from './ContactListItem.vue'
import type { PropType } from 'vue'
import type { IContacts } from '@/types/contacts'
import { useContactsStore } from '@/store/contacts'

const router = useRouter()

defineProps({
  filteredContacts: Object as PropType<IContacts[]>
})

const store = useContactsStore()

const openDetail = (contact: IContacts) => {
  router.push(`/contact/${contact.id}`)
  store.addSingleContact(contact)
}
</script>

<style lang="scss" scoped>
@import 'contact-list.style.scss';
</style>
