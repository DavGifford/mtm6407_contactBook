<template>
    <div>
      <h2>Edit Contact</h2>
      <form @submit="editContact">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" v-model="editedContact.firstName" required>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" v-model="editedContact.lastName" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="editedContact.email" required>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getAllContacts, updateContact } from '/contacts.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        editedContact: null,
      };
    },
    methods: {
      editContact(event) {
        event.preventDefault();
        updateContact(this.editedContact);
        this.$router.push({ name: 'contact-details', params: { id: this.id } });
      },
    },
    created() {
      const contacts = getAllContacts();
      this.editedContact = contacts.find((contact) => contact.id === this.id);
    },
  };
  </script>
  