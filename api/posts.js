import connectDB from './lib/db.js';
import { verifyToken } from './lib/auth.js';
import Post from '../server/models/Post.js';
import User from '../server/models/User.js';
import multer from 'multer';
import { Blob } from '@vercel/blob';

// Configure multer for memory storage (Vercel serverless functions)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

export default async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    // Handle POST /api/posts (create new post)
    if (req.method === 'POST' && !req.url.includes('/save')) {
      const authResult = verifyToken(req);
      if (authResult.error) {
        return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
      }

      // Handle file upload
      upload.single('image')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ message: 'File upload error' });
        }

        const { taskName, taskTags, taskDescription, quota, deadline } = req.body;
        let imageUrl = null;

        if (req.file) {
          const blob = await Blob.put(`post-${Date.now()}-${req.file.originalname}`, req.file.buffer, {
            access: 'public',
          });
          imageUrl = blob.url;
        }

        const newPost = new Post({
          userId: authResult.userId,
          taskName,
          taskTags: taskTags ? taskTags.split(',').map(tag => tag.trim()) : [],
          taskDescription,
          quota: parseInt(quota, 10),
          deadline: deadline ? new Date(deadline) : null,
          croppedImage: imageUrl,
        });

        await newPost.save();
        return res.status(201).json({ message: 'Post created successfully!', post: newPost });
      });
      return;
    }

    // Handle POST /api/posts/save
    if (req.method === 'POST' && req.url.includes('/save')) {
      const authResult = verifyToken(req);
      if (authResult.error) {
        return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
      }

      const { postId } = req.body;
      const user = await User.findById(authResult.userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (!user.savedPosts.includes(postId)) {
        user.savedPosts.push(postId);
        await user.save();
      }

      return res.status(200).json({ message: 'Post saved to favorites' });
    }

    // Handle GET /api/posts/myposts
    if (req.method === 'GET' && req.url.includes('/myposts')) {
      const authResult = verifyToken(req);
      if (authResult.error) {
        return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
      }

      const userPosts = await Post.find({ userId: authResult.userId });
      return res.status(200).json(userPosts);
    }

    // Handle GET /api/posts/saved
    if (req.method === 'GET' && req.url.includes('/saved')) {
      const authResult = verifyToken(req);
      if (authResult.error) {
        return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
      }

      const user = await User.findById(authResult.userId).populate('savedPosts');
      return res.status(200).json(user.savedPosts);
    }

    // Handle GET /api/posts (get all posts)
    if (req.method === 'GET') {
      const posts = await Post.find();
      return res.status(200).json(posts);
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
