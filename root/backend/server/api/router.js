const express = require('express');
const poll = require('./routes/poll');

const router = express.Router();

router.use('/polls', poll);

module.exports = router;