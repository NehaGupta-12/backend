const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const userRoutes = require('./routes/user.route');

// Middleware
app.use(express.json()); // Replaces bodyParser.json()

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
