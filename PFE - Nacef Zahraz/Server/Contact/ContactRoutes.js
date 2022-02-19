const router = require('express').Router();
const Contact  = require('./ContactController');

// Add Contact  
router.post('/contact/add',Contact.addContact);

// Get All Contacts
router.get('/contacts/get',Contact.getAllContacts);

// Delete Contact 
router.delete('/contact/delete/:id',Contact.deleteContact);

// Get One Contact 
router.get('/contact/get/:id',Contact.getContact);


module.exports = router;