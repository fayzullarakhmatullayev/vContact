import { defineStore } from 'pinia'
import type { IContacts } from '@/types/contacts'
import { ref } from 'vue'

export const useContactsStore = defineStore(
  'contacts',
  () => {
    const contacts = ref<IContacts[]>(JSON.parse(localStorage.getItem('contacts') || '[]'))
    const singleContact = ref<IContacts>(JSON.parse(localStorage.getItem('singleContact') || '{}'))

    const addContact = (contact: IContacts) => {
      contacts.value.push(contact)
    }

    const removeContact = (id: number | Date) => {
      contacts.value = contacts.value.filter((contact) => contact.id !== id)
    }

    const updateContact = (updatedContact: IContacts) => {
      const index = contacts.value.findIndex((contact) => contact.id === updatedContact.id)
      if (index !== -1) {
        contacts.value[index] = updatedContact
      }
    }

    const addSingleContact = (contact: IContacts) => (singleContact.value = contact)

    return { contacts, singleContact, addSingleContact, addContact, removeContact, updateContact }
  },
  { persist: true }
)
