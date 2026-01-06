import express from 'express';
import connectDB from './lib/db.js';
import { verifyToken } from './lib/auth.js';
import Post from '../models/Post.js';
import User from '../models/User.js';

const app = express();
app.use(express.json());

// Route to fetch all posts for display on the homepage
app.get('/posts', async (req, res) => {
  try {
    await connectDB();
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get user's posts
app.get('/posts/myposts', async (req, res) => {
  try {
    await connectDB();
    
    const authResult = verifyToken(req);
    if (authResult.error) {
      return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
    }

    const userPosts = await Post.find({ userId: authResult.userId });
    res.status(200).json(userPosts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get user's saved posts
app.get('/posts/saved', async (req, res) => {
  try {
    await connectDB();
    
    const authResult = verifyToken(req);
    if (authResult.error) {
      return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
    }

    const user = await User.findById(authResult.userId).populate('savedPosts');
    res.status(200).json(user.savedPosts);
  } catch (error) {
    console.error('Error fetching saved posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to save a favorite post for the user
app.post('/posts/save', async (req, res) => {
  try {
    await connectDB();
    
    const authResult = verifyToken(req);
    if (authResult.error) {
      return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
    }

    const { postId } = req.body;
    const user = await User.findById(authResult.userId);
    
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

export default app;

