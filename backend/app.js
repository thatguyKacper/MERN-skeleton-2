const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();

// ROUTES
app.use('/api/users', userRoutes);

module.exports = app;
