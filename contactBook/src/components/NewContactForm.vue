<template>
    <div>
      <h2>New Contact</h2>
      <form @submit="addNewContact">
        <label for="first-name">First Name:</label><br>
        <input type="text" id="first-name" v-model="newContact.firstName" required><br>
        <label for="last-name">Last Name:</label><br>
        <input type="text" id="last-name" v-model="newContact.lastName" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" v-model="newContact.email" required><br>
        <button type="submit">Add Contact</button><br>
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
  <style>
  </style>