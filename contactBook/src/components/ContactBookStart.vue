<template>
    <div>
      <h2>Contact Book</h2>
      <ul>
        <li v-for="contact in sortedContacts" :key="contact.id">
          <router-link :to="{ name: 'contact-details', params: { id: contact.id } }">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getAllContacts } from '../contact.js';
  
  export default {
    data() {
      return {
        contacts: [],
      };
    },
    computed: {
      sortedContacts() {
        return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
    created() {
      this.contacts = getAllContacts();
    },
  };
  </script>