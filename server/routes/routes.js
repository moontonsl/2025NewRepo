const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController.js');
const schoolController = require('../controllers/schoolsController.js');
const eventsController = require('../controllers/eventsDataController.js');

router.get('/msl_schools', schoolController.fetchSchools); //schools
router.get('/msl_news_data', newsController.fetchNews); //news
router.get('/msl_events', eventsController.fetchEvents); //events

module.exports = router;
