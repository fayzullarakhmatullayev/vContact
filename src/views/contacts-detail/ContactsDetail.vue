<template>
  <div class="details">
    <Button btn-class="btn-blue" @click="router.go(-1)">Back</Button>
    <h1 class="title">Contact</h1>
    <div class="contact-detail">
      <p>{{ contact.name }}</p>
      <p>{{ contact.email }}</p>
      <p>{{ contact.phone }}</p>
    </div>
  </div>
  <ul>
    <li v-for="(tag, i) in contact.tags" :key="`${tag}_${i}`">{{ tag }}</li>
  </ul>
</template>

<script lang="ts" setup>
import Button from '@/components/Ui/Button/Button.vue'
import { useContactsStore } from '@/store/contacts'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useContactsStore()
const route = useRoute()
const router = useRouter()

const contact = computed(
  () =>
    store.contacts.find((contact) => contact.id === +route.params.id) || {
      id: 0,
      name: '',
      phone: '',
      email: '',
      tags: []
    }
)
</script>

<style lang="scss" scoped>
@import 'contacts-detail.style.scss';
</style>
