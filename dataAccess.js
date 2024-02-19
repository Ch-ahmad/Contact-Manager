
const fs = require('fs');
const path = require('path');
const Contact = require('./Contact');

const DATA_FILE = path.join(__dirname, 'contacts.json');

// Load contacts
function loadContacts() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data).contacts;
  } catch (err) {
    console.error('Error: unable to read', err);
    return [];
  }
}

// Save contacts 
function saveContacts(contacts) {
  try {
    const data = JSON.stringify({ contacts }, null, 2);
    fs.writeFileSync(DATA_FILE, data, 'utf8');
  } catch (err) {
    console.error('Error: unable to write', err);
  }
}

module.exports = { loadContacts, saveContacts };
