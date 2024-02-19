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

  
});

module.exports = router;
