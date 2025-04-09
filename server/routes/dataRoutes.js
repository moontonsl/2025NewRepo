const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/dataController');

router.get('/:type', getData);  // Route for all resources (e.g., /api/data/event, /api/data/news)

module.exports = router;
