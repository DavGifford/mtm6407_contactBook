<template>
    <div>
      <h2>Contact Details</h2>
      <div v-if="contact">
        <p><strong>Name:</strong> {{ contact.firstName }} {{ contact.lastName }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <button @click="editContact">Edit</button>
        <button @click="deleteContact">Delete</button>
      </div>
      <div v-else>
        <p>Contact not found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getAllContacts, deleteContact } from '/contacts.js';
  
  export default {
    props: ['id'],
    data() {
      return {
        contact: null,
      };
    },
    methods: {
      editContact() {
        this.$router.push({ name: 'edit-contact', params: { id: this.id } });
      },
      deleteContact() {
        deleteContact(this.id);
        this.$router.push({ path: '/' });
      },
    },
    created() {
      const contacts = getAllContacts();
      this.contact = contacts.find((contact) => contact.id === this.id);
    },
  };
  </script>
  