const express = require('express');
const Profile = require('../models/profile'); // Import your Profile model
const jwt = require('jsonwebtoken');
const router = express.Router();

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id; // Add userId to request object
      next();
    });
  };

// Route to fetch user profile
router.get('/', verifyToken, async (req, res) => {
    try {
      // Use the userId from the JWT to find the specific user's profile
      const profile = await Profile.findOne({ userId: req.userId }); // Assuming userId is saved in the profile schema
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      res.status(200).json(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
