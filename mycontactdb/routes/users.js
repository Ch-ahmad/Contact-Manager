var express = require('express');
var router = express.Router();
const Contact = require('../Contact'); // path
const { loadContacts, saveContacts } = require('../dataAccess'); // path

//GET
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST
router.post('/add-contact', function(req, res) {
  // contact detail
  const { firstName, lastName, email, notes } = req.body;

  // Create contact
  const newContact = new Contact(firstName, lastName, email, notes);

  // Load the current contacts, add new and save
  const contacts = loadContacts();
  contacts.push(newContact);
  saveContacts(contacts);

  // Redirect 
  res.redirect('/contacts');
});

module.exports = router;
