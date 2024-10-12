const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin requests
app.use(express.json()); // Parse incoming JSON requests

// Import routes
const otRoutes = require('./routes/otRoutes');
const counterRoutes = require('./routes/counterRoutes');
const sterilizationRoutes = require('./routes/sterilizationRoutes');
const authRoutes = require('./routes/authRoutes'); // Add this line

// Routes
app.use('/api/ot', otRoutes);
app.use('/api/counter', counterRoutes);
app.use('/api/sterilization', sterilizationRoutes);
app.use('/api/auth', authRoutes);  // Added login route

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
