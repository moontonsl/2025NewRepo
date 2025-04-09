const express = require('express');
const cors = require('cors');
const homeRoutes = require('./routes/homeRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔍 Health check route
app.get('/api/health', (req, res) => {
    res.send('Server is healthy!');
});

// Routes
app.use('/api/example', homeRoutes);
app.use('/api/data', dataRoutes);

module.exports = app;
