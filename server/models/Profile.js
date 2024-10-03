const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // Link to the User model
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  profilePic: {
    type: String, // Store the file path for profile picture
  },
  resume: {
    type: String, // Store the file path for resume
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
