import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '@/views/contacts/Contacts.vue'
import ContactsDetail from '@/views/contacts-detail/ContactsDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contact/:id',
      name: 'contacts-detail',
      component: ContactsDetail
    }
  ]
})

export default router
