// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Account
let Account = new Schema({
  Specialization: {
    type: String
  },
  Title: {
    type: String
  },
  FullName: {
    type: String
  }, 
  Email: {
  	type: String
  },
  Password: {
    type: String
  },
  SecurityQuestion: {
    type: String
  },
  SecurityAnswer: {
    type: String
  }
},{
    collection: 'accounts'
});

module.exports = mongoose.model('Account', Account);
