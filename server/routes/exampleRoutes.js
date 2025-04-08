const express = require('express');
const router = express.Router();
const { helloWorld } = require('../controllers/exampleController');

router.get('/', helloWorld);

module.exports = router;