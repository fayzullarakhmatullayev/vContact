<template>
  <h1 class="title">My Contacts</h1>

  <div class="contact-filter">
    <div class="contact-filter__title">Filters</div>
    <div class="contact-filter__inner">
      <input class="input" placeholder="By Name" v-model.trim="filter.name" />
      <input class="input" type="tel" v-model.trim="filter.phone" placeholder="By Phone" />
      <input class="input" type="email" v-model.trim="filter.email" placeholder="By Email" />
      <input class="input" v-model.trim="filter.tag" placeholder="By Tag" />
    </div>
  </div>

  <ContactList :filteredContacts="filteredContacts" v-if="filteredContacts.length > 0" />
  <div class="empty" v-else>Empty</div>

  <BaseButton btn-class="btn-add" title="Add a new contact" @click="isModalOpem = true" />

  <teleport to="body">
    <Modal @close-modal="isModalOpem = false" v-if="isModalOpem">
      <template #title>Add a new contact</template>
      <FormSubmit @close-form="isModalOpem = false" />
    </Modal>
  </teleport>
</template>

<script setup lang="ts">
import ContactList from '@/components/contact-list/ContactList.vue'
import FormSubmit from '@/components/Form/FormSubmit.vue'
import Modal from '@/components/modal/Modal.vue'
import BaseButton from '@/components/Ui/Button/BaseButton.vue'
import { useContactsStore } from '@/store/contacts'
import { computed } from '@vue/reactivity'
import { reactive, ref } from 'vue'

const store = useContactsStore()

const filter = reactive({
  name: '',
  email: '',
  phone: '',
  tag: ''
})

const filteredContacts = computed(() => {
  if (filter.name) {
    return store.contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.name.toLowerCase())
    )
  }
  if (filter.email) {
    return store.contacts.filter((contact) =>
      contact.email?.toLocaleLowerCase().includes(filter.email.toLowerCase())
    )
  }
  if (filter.phone) {
    return store.contacts.filter((contact) =>
      contact.phone.toLocaleLowerCase().includes(filter.phone.toLowerCase())
    )
  }
  if (filter.tag) {
    const contacts = store.contacts.filter((contact) =>
      contact.tags?.includes(filter.tag.toLowerCase())
    )

    if (contacts.length > 0) {
      return contacts
    }
    return store.contacts
  }
  return store.contacts
})

const isModalOpem = ref(false)
</script>

<style lang="scss" scoped>
@import 'contacts.style.scss';
</style>
