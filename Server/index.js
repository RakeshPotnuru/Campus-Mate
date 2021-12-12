const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const feedRoutes = require('./routes/feed.route');
const connection = require('./common/connection');

const app = express();
const port = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/feed', feedRoutes);

connection.mongodb();
app.listen(port, () => console.log(`Listening on port ${port}`));
