const express = require('express');
const multer = require('multer');
const path = require('path');
const Post = require('../models/post'); // Assuming you have a Post model in models/post.js
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id; // Add userId to request object
    next();
  });
};

// Multer setup for image upload (storing in 'uploads' directory)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to allow all types of files
const fileFilter = (req, file, cb) => {
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

// Route to handle new post creation
router.post('/', verifyToken, upload.single('image'), async (req, res) => {
  const { taskName, taskTags, taskDescription, quota, deadline } = req.body;
  const image = req.file ? req.file.filename : null; // Get the image file name if uploaded

  try {
    const newPost = new Post({
      userId: req.userId, // The userId comes from the JWT
      taskName,
      taskTags: taskTags ? taskTags.split(',').map(tag => tag.trim()) : [], // Convert comma-separated tags into an array
      taskDescription,
      quota: parseInt(quota, 10), // Ensure quota is saved as an integer
      deadline: new Date(deadline), // Convert the deadline string into a Date object
      croppedImage: image, // Store the image file name
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created successfully!', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch all posts for display on the homepage
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/myposts', verifyToken, async (req, res) => {
try {
    const userPosts = await Post.find({ userId: req.userId });
    res.status(200).json(userPosts);
} catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Server error' });
}
});

// Route to save a favorite post for the user
router.post('/save', verifyToken, async (req, res) => {
const { postId } = req.body;

try {
    const user = await User.findById(req.userId);
    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }

    // Add postId to the user's savedPosts array if it's not already there
    if (!user.savedPosts.includes(postId)) {
    user.savedPosts.push(postId);
    await user.save();
    }

    res.status(200).json({ message: 'Post saved to favorites' });
} catch (error) {
    console.error('Error saving favorite post:', error);
    res.status(500).json({ message: 'Server error' });
}
});

// Route to get the user's saved posts
router.get('/saved', verifyToken, async (req, res) => {
try {
    const user = await User.findById(req.userId).populate('savedPosts');
    res.status(200).json(user.savedPosts);
} catch (error) {
    console.error('Error fetching saved posts:', error);
    res.status(500).json({ message: 'Server error' });
}
});

module.exports = router;
