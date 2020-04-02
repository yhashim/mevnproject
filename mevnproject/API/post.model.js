// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  poster: {
    type: String
  },
  title: {
    type: String
  },
  text: {
    type: String
  }, 
  flagged: {
    type: Number
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);
