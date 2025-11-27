const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post' // Referencing Post model
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
