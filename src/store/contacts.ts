import { defineStore } from 'pinia'
import type { IContacts } from '@/types/contacts'
import { ref } from 'vue'

export const useContactsStore = defineStore(
  'contacts',
  () => {
    const contacts = ref<IContacts[]>(JSON.parse(localStorage.getItem('contacts') || '[]'))

    const addContact = (contact: IContacts) => {
      contacts.value.push(contact)
    }

    const removeContact = (id: number) => {
      contacts.value = contacts.value.filter((contact) => contact.id !== id)
    }

    const updateContact = (updatedContact: IContacts) => {
      const index = contacts.value.findIndex((contact) => contact.id === updatedContact.id)
      if (index !== -1) {
        contacts.value[index] = updatedContact
      }
    }

    return { contacts, addContact, removeContact, updateContact }
  },
  { persist: true }
)
