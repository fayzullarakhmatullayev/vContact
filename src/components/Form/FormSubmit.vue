<template>
  <form class="form" @submit.prevent.enter="submitHandler" v-if="isEdit">
    <input class="input" placeholder="Name *" required v-model.trim="initialFormValue.name" />
    <input
      class="input"
      placeholder="Phone *"
      required
      name="phone"
      v-model.trim="initialFormValue.phone"
    />
    <input class="input" placeholder="Email" type="email" v-model.trim="initialFormValue.email" />
    <div class="form-tags">
      <input class="input" placeholder="Add tag" v-model.trim="tag" />
      <BaseButton type="button" :btn-class="'btn-blue'" @click="addTags">Add tag</BaseButton>
    </div>

    <ul class="form-tags__items" v-if="initialFormValue.tags && initialFormValue.tags.length > 0">
      <li v-for="(tag, i) in initialFormValue.tags" :key="`${tag}_${i}`">#{{ tag }}</li>
    </ul>
    <div class="form-buttons">
      <BaseButton type="button" btn-class="btn-red" @click="emit('closeForm')">Close</BaseButton>
      <BaseButton type="submit" btn-class="btn-green">Edit</BaseButton>
    </div>
  </form>
  <form class="form" @submit.prevent.enter="submitHandler" v-else>
    <input class="input" placeholder="Name *" required v-model.trim="addFormValues.name" />
    <input
      class="input"
      placeholder="Phone *"
      required
      name="phone"
      v-model.trim="addFormValues.phone"
    />
    <input class="input" placeholder="Email" type="email" v-model.trim="addFormValues.email" />
    <div class="form-tags">
      <input class="input" placeholder="Add tag" v-model.trim="tag" />
      <BaseButton type="button" :btn-class="'btn-blue'" @click="addTags">Add tag</BaseButton>
    </div>

    <ul class="form-tags__items" v-if="addFormValues.tags && addFormValues.tags.length > 0">
      <li v-for="(tag, i) in addFormValues.tags" :key="`${tag}_${i}`">#{{ tag }}</li>
    </ul>
    <div class="form-buttons">
      <BaseButton type="button" btn-class="btn-red" @click="emit('closeForm')">Close</BaseButton>
      <BaseButton type="submit" btn-class="btn-green">Add</BaseButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useContactsStore } from '@/store/contacts'
import type { IContacts } from '@/types/contacts'
import { ref, type PropType } from 'vue'
import BaseButton from '../Ui/Button/BaseButton.vue'

const store = useContactsStore()
const emit = defineEmits<(e: 'closeForm') => void>()
const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  },
  initialFormValue: {
    type: Object as PropType<IContacts>,
    default: { id: 0, name: '', phone: '', email: '', tags: [] }
  }
})

const addFormValues = ref<IContacts>({
  id: 0,
  name: '',
  phone: '',
  email: '',
  tags: []
})

const tag = ref('')

const addTags = () => {
  if (tag.value.length > 0) {
    if (props.isEdit) {
      props.initialFormValue.tags?.push(tag.value.toLowerCase())
    } else {
      addFormValues.value.tags?.push(tag.value.toLowerCase())
    }
    tag.value = ''
  }
}

const submitHandler = () => {
  if (props.isEdit) {
    store.updateContact(props.initialFormValue)
  } else {
    store.addContact({ ...addFormValues.value, id: Date.now() })
  }
  emit('closeForm')
}
</script>

<style lang="scss" scoped>
@import 'form.style.scss';
</style>
