const express = require('express');
const multer = require('multer');
const path = require('path');
const Profile = require('../models/profile');
const router = express.Router();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id; // Add userId to request object
    next();
  });
};

// Multer setup for file upload (storing in 'uploads' directory)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter for accepting only certain file types
const fileFilter = (req, file, cb) => {
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

// Profile creation route (with file upload)
router.post('/', verifyToken, upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'resume', maxCount: 1 }]), async (req, res) => {
  const { name, location, school, bio, website } = req.body;
  const profilePic = req.files['profilePic'] ? req.files['profilePic'][0].filename : null; // Get the file name of profilePic
  const resume = req.files['resume'] ? req.files['resume'][0].filename : null; // Get the file name of resume

  try {
    // Check if the user already has a profile
    const existingProfile = await Profile.findOne({ userId: req.userId });
    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' });
    }

    // Create a new profile
    const newProfile = new Profile({
      userId: req.userId, // The userId comes from the JWT
      name,
      location,
      school,
      bio,
      website,
      profilePic, // Use the file path for the profilePic
      resume // Use the file path for the resume
    });

    await newProfile.save();
    res.status(201).json({ message: 'Profile created successfully!', profile: newProfile });
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/', verifyToken, upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'resume', maxCount: 1 }]), async (req, res) => {
  const { name, location, school, bio, website } = req.body;
  const profilePic = req.files['profilePic'] ? req.files['profilePic'][0].filename : null; // Get the new profilePic file, if uploaded
  const resume = req.files['resume'] ? req.files['resume'][0].filename : null; // Get the new resume file, if uploaded

  try {
    // Find the existing profile by userId
    const existingProfile = await Profile.findOne({ userId: req.userId });
    
    if (!existingProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update profile fields only if new values are provided
    existingProfile.name = name || existingProfile.name;
    existingProfile.location = location || existingProfile.location;
    existingProfile.school = school || existingProfile.school;
    existingProfile.bio = bio || existingProfile.bio;
    existingProfile.website = website || existingProfile.website;

    // Update the profilePic and resume only if new files are uploaded
    if (profilePic) {
      existingProfile.profilePic = profilePic; // Update with new profilePic
    }

    if (resume) {
      existingProfile.resume = resume; // Update with new resume
    }

    // Save the updated profile
    await existingProfile.save();
    res.status(200).json({ message: 'Profile updated successfully!', profile: existingProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
