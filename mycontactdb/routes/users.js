var express = require('express');
var router = express.Router();
const { loadContacts, saveContacts, Contact } = require('../dataAccess'); 

// GET route for listing all contacts
router.get('/contacts', function(req, res, next) {
  const contacts = loadContacts();
  res.render('contacts', { contacts }); // Use the 'contacts.pug' view for listing contacts
});

// POST route for adding a new contact
router.post('/add-contact', function(req, res) {
  const { firstName, lastName, email, notes } = req.body;
  const newContact = new Contact(firstName, lastName, email, notes);
  const contacts = loadContacts();
  contacts.push(newContact);
  saveContacts(contacts);
  res.redirect('/users/contacts'); // Redirect to the listing page
});

// GET route for displaying the edit contact form
router.get('/edit-contact/:id', function(req, res) {
  const contacts = loadContacts();
  const contact = contacts.find(contact => contact.id === req.params.id);
  if (!contact) {
    return res.send('Contact not found.');
  }
  res.render('editContact', { contact }); // Use 'editContact.pug' for the edit form
});

// POST route- updating a contact
router.post('/edit-contact/:id', function(req, res) {
  let contacts = loadContacts();
  contacts = contacts.map(contact => {
    if (contact.id === req.params.id) {
      return { ...contact, firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, notes: req.body.notes };
    }
    return contact;
  });
  saveContacts(contacts);
  res.redirect('/users/contacts'); // Redirect back to contacts list
});

// POST route- deleting a contact
router.get('/delete-contact/:id', function(req, res) {
  const contacts = loadContacts();
  const filteredContacts = contacts.filter(contact => contact.id !== req.params.id);
  saveContacts(filteredContacts);
  res.redirect('/users/contacts'); // Redirect back to the contacts
});

module.exports = router;
