const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Assuming you have a User model

router.post('/login', async (req, res) => {
  const { username, password, department } = req.body;

  try {
    // Find user in the database
    const user = await User.findOne({ username, department });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
