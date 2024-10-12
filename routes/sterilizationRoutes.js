const express = require('express');
const router = express.Router();
const SterilizedItem = require('../models/sterilizedItemModel');

router.post('/receive-items', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newItem = new SterilizedItem({ name, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
