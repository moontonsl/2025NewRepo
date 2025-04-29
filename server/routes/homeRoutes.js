const express = require('express');
const router = express.Router();
const { helloWorld } = require('../controllers/homeController');

router.get('/', helloWorld);

module.exports = router;