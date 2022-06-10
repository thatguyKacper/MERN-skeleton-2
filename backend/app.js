const express = require('express');
const { errorHandler } = require('./helpers/errorHandler');

const userRoutes = require('./routes/userRoutes');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ROUTES
app.use('/api/users', userRoutes);

app.use(errorHandler);

module.exports = app;
