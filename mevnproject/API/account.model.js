// account.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Account
let Account = new Schema({
  specialization: {
    type: String
  },
  title: {
    type: String
  },
  fullName: {
    type: String
  }, 
  email: {
  	type: String
  },
  password: {
    type: String
  },
  securityQuestion: {
    type: String
  },
  securityAnswer: {
    type: String
  }
},{
    collection: 'accounts'
});

module.exports = mongoose.model('Account', Account);
