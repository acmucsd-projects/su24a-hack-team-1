import connectDB from './lib/db.js';
import mongoose from 'mongoose';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();
    
    // Try to ping the database
    await mongoose.connection.db.admin().ping();
    
    return res.status(200).json({ 
      success: true, 
      message: 'MongoDB connection successful!',
      readyState: mongoose.connection.readyState // 1 = connected
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'MongoDB connection failed',
      error: error.message 
    });
  }
};

