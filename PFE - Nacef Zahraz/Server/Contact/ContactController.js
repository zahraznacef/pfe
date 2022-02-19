const Contact = require('./ContactModel');

module.exports = {

  // Add Contact 

  addContact : async (req, res) => {

    try {
      const fullname = req.body.fullname;
      const email = req.body.email;
      const subject = req.body.subject;
      const message = req.body.message;
      const contact = await new Contact({
        fullname,
        email,
        subject,
        message
      });
      await contact.save();
      res.json(contact);
      } 
      catch (err) {
        console.log(err);
      }
  },

  // Get All Contacts

  getAllContacts: async (req, res) => {
    try {
      const contact = await Contact.find();
      res.json(contact);
    } catch (err) {
      console.log(err);
    }
  },

  // Delete Contact 

  deleteContact : async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      res.json(contact);
    } catch (err) {
      console.log(err);
    }
  },

 

  // GetContact 
  
  getContact : async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      res.json(contact);
    } catch (err) {
      console.log(err);
    }
  },
};