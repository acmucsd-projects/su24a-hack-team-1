import connectDB from './lib/db.js';
import { verifyToken } from './lib/auth.js';
import Profile from '../server/models/Profile.js';
import multer from 'multer';
import { Blob } from '@vercel/blob';

// Configure multer for memory storage
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

  if (req.method !== 'POST' && req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const authResult = verifyToken(req);
    if (authResult.error) {
      return res.status(authResult.error.status).json({ auth: false, message: authResult.error.message });
    }

    // Handle file upload
    upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'resume', maxCount: 1 }])(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload error' });
      }

      const { name, location, school, bio, website } = req.body;

      // Handle POST (create profile)
      if (req.method === 'POST') {
        const existingProfile = await Profile.findOne({ userId: authResult.userId });
        if (existingProfile) {
          return res.status(400).json({ message: 'Profile already exists' });
        }

        let profilePicUrl = null;
        let resumeUrl = null;

        if (req.files && req.files['profilePic']) {
          const file = req.files['profilePic'][0];
          const blob = await Blob.put(file.originalname, file.buffer, {
            access: 'public',
          });
          profilePicUrl = blob.url;
        }

        if (req.files && req.files['resume']) {
          const file = req.files['resume'][0];
          const blob = await Blob.put(file.originalname, file.buffer, {
            access: 'public',
          });
          resumeUrl = blob.url;
        }

        const newProfile = new Profile({
          userId: authResult.userId,
          name,
          location,
          school,
          bio,
          website,
          profilePic: profilePicUrl,
          resume: resumeUrl,
        });

        await newProfile.save();
        return res.status(201).json({ message: 'Profile created successfully!', profile: newProfile });
      }

      // Handle PUT (update profile)
      if (req.method === 'PUT') {
        const existingProfile = await Profile.findOne({ userId: authResult.userId });
        
        if (!existingProfile) {
          return res.status(404).json({ message: 'Profile not found' });
        }

        existingProfile.name = name || existingProfile.name;
        existingProfile.location = location || existingProfile.location;
        existingProfile.school = school || existingProfile.school;
        existingProfile.bio = bio || existingProfile.bio;
        existingProfile.website = website || existingProfile.website;

        if (req.files && req.files['profilePic']) {
          const file = req.files['profilePic'][0];
          const blob = await Blob.put(file.originalname, file.buffer, {
            access: 'public',
          });
          existingProfile.profilePic = blob.url;
        }

        if (req.files && req.files['resume']) {
          const file = req.files['resume'][0];
          const blob = await Blob.put(file.originalname, file.buffer, {
            access: 'public',
          });
          existingProfile.resume = blob.url;
        }

        await existingProfile.save();
        return res.status(200).json({ message: 'Profile updated successfully!', profile: existingProfile });
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
