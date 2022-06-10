const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config.env' });

const app = require('./app');

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
