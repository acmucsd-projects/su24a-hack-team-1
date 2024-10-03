const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference the user who created the post
    ref: 'User',
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  croppedImage: {
    type: String, // This stores the image file path (uploaded image)
  },
  taskTags: {
    type: [String],
  },
  quota: {
    type: Number,
    default: 1
  },
  deadline: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
