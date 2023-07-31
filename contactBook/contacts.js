
export function getAllContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return contacts;
  }
  
  let contactIdCounter = 1;

  export function addContact(contact) {
    const contacts = getAllContacts();
    contact.id = contactIdCounter++;
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  
  export function updateContact(updatedContact) {
    const contacts = getAllContacts();
    const index = contacts.findIndex((contact) => contact.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    
  }
  
  export function deleteContact(contactId) {
    const contacts = getAllContacts();
    const filteredContacts = contacts.filter((contact) => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  }

