import express from 'express';
import connectDB from './lib/db.js';
import { verifyToken } from './lib/auth.js';
import Profile from '../models/Profile.js';

const app = express();
app.use(express.json());

// Route to fetch user profile
app.get('/profile', async (req, res) => {
  try {
    await connectDB();
    
    const authResult = verifyToken(req);
    if (authResult.error) {
      return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
    }

    const profile = await Profile.findOne({ userId: authResult.userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default app;

