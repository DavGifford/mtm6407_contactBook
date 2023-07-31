<template>
    <div>
      <h1>Welcome to your Contact Book</h1>
      <input type="text" v-model="searchQuery" @input="filterContacts" placeholder="Search contacts...">
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="{ name: 'contact-details', params: { id: contact.id } }">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
        <button @click="deleteContact(contact.id)">Delete</button>
      </li>
    </ul>
    <router-link :to="{ path: '/new' }" >Add New Contact</router-link>
  </div>
</template>

<script>
import { getAllContacts, deleteContact } from '/contacts.js';

export default {
  data() {
    return {
      contacts: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    filterContacts() {
      
    },
    deleteContact(contactId) {
      deleteContact(contactId);
      this.contacts = getAllContacts(); 
    },
  },
  created() {
    this.contacts = getAllContacts();
  },
};
</script>