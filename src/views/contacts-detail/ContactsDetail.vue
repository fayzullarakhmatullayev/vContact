<template>
  <h1 class="title">Contact</h1>
  <div class="details">
    <div class="contact-detail">
      <p>
        Name: <span>{{ store.singleContact.name }}</span>
      </p>
      <p>
        Phone: <a :href="`tel:${store.singleContact.phone}`">{{ store.singleContact.phone }}</a>
      </p>
      <p>
        Email: <a :href="`mailto:${store.singleContact.email}`">{{ store.singleContact.email }}</a>
      </p>
    </div>
    <div class="tags">
      <span>Tags:</span>
      <ul>
        <li v-for="(tag, i) in store.singleContact.tags" :key="`${tag}_${i}`">#{{ tag }}</li>
      </ul>
    </div>

    <div class="actions">
      <button class="edit" title="Edit" @click="isModalOpen = true">
        <img src="@/assets/svg/create-outline.svg" alt="create-outline" />
      </button>
      <button class="remove" title="Delete" @click="deleteHandler">
        <img src="@/assets/svg/trash-outline.svg" alt="trash-outline" />
      </button>
    </div>
  </div>
  <BaseButton btn-class="btn-blue" @click="router.go(-1)">Back</BaseButton>

  <teleport to="body">
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false">
      <template #title>Update Contact</template>
      <FormSubmit
        :is-edit="true"
        :initial-form-value="store.singleContact"
        @close-form="isModalOpen = false"
      />
    </Modal>
  </teleport>
</template>

<script lang="ts" setup>
import FormSubmit from '@/components/Form/FormSubmit.vue'
import BaseButton from '@/components/Ui/Button/BaseButton.vue'
import Modal from '@/components/modal/Modal.vue'
import { useContactsStore } from '@/store/contacts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useContactsStore()
const router = useRouter()

const isModalOpen = ref(false)

const deleteHandler = () => {
  store.removeContact(store.singleContact.id)
  router.push('/')
}
</script>

<style lang="scss" scoped>
@import 'contacts-detail.style.scss';
</style>
