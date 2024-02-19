class Contact {
    constructor(firstName, lastName, email = '', notes = '') {
      this.id = Date.now().toString(); //timeStamp used as id
      this.firstName = firstName.trim();
      this.lastName = lastName.trim();
      this.email = email.trim();
      this.notes = notes.trim();
      this.createdAt = new Date().toISOString(); 
    }
  }
  
  module.exports = Contact;
  