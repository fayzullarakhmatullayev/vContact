<template>
  <h1 class="title">Contact</h1>
  <div class="details">
    <div class="contact-detail">
      <p>
        Name: <span>{{ contact.name }}</span>
      </p>
      <p>
        Phone: <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
      </p>
      <p>
        Email: <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>
    </div>
    <div class="tags">
      <span>Tags:</span>
      <ul>
        <li v-for="(tag, i) in contact.tags" :key="`${tag}_${i}`">#{{ tag }}</li>
      </ul>
    </div>

    <div class="actions">
      <button class="edit" title="Edit">
        <img src="@/assets/svg/create-outline.svg" alt="create-outline" />
      </button>
      <button class="remove" title="Delete">
        <img src="@/assets/svg/trash-outline.svg" alt="trash-outline" />
      </button>
    </div>
  </div>
  <Button btn-class="btn-blue" @click="router.go(-1)">Back</Button>
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
