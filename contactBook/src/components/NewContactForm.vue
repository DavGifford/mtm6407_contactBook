<template>
    <div>
      <h2>New Contact</h2>
      <form @submit="addNewContact">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" v-model="newContact.firstName" required>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" v-model="newContact.lastName" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="newContact.email" required>
        <button type="submit">Add Contact</button>
        <router-link :to="{ path: '/' }">Cancel</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { addContact } from '/contacts.js';
  
  export default {
    data() {
      return {
        newContact: {
          firstName: '',
          lastName: '',
          email: '',
        },
      };
    },
    methods: {
      addNewContact(event) {
        event.preventDefault();
        addContact(this.newContact);
        this.$router.push({ path: '/' });
      },
      cancel() {
        this.$router.push({ path: '/' }); 
      },
    },
  };
  </script>
  