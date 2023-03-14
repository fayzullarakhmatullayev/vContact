<template>
  <h1 class="title">My Contacts</h1>

  <ContactList />
  <Button btn-class="btn-add" title="Add a new contact" />
</template>

<script setup lang="ts">
import ContactList from '@/components/contact-list/ContactList.vue'
import Button from '@/components/Ui/Button/Button.vue'
</script>

<style lang="scss" scoped>
@import 'contacts.style.scss';
</style>
