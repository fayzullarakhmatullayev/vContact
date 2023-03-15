<template>
  <h1 class="title">My Contacts</h1>

  <ContactFilter
    @filter-by-name="(name) => (filter.name = name)"
    @filter-by-email="(email) => (filter.email = email)"
    @filter-by-phone="(phone) => (filter.phone = phone)"
    @filter-by-tagname="(tag) => (filter.tag = tag)"
  />

  <ContactList :filteredContacts="filteredContacts" v-if="filteredContacts.length > 0" />
  <div class="empty" v-else>Empty</div>

  <BaseButton btn-class="btn-add" title="Add a new contact" @click="isModalOpem = true" />

  <teleport to="body">
    <Modal @close-modal="isModalOpem = false" v-if="isModalOpem">
      <template #title>Modal</template>
      <BaseInput :type="'email'" placeholder="test" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, animi nemo. Rem porro
      maiores consequatur delectus neque expedita! Sunt reprehenderit reiciendis porro alias omnis
      quaerat facilis autem accusantium dolores animi.
    </Modal>
  </teleport>
</template>

<script setup lang="ts">
import ContactFilter from '@/components/contact-filter/ContactFilter.vue'
import ContactList from '@/components/contact-list/ContactList.vue'
import Modal from '@/components/modal/Modal.vue'
import BaseButton from '@/components/Ui/Button/BaseButton.vue'
import BaseInput from '@/components/Ui/Input/BaseInput.vue'
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
