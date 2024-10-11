const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.post('/', tweetController.createTweet);
router.get('/', tweetController.getAllTweets);

module.exports = router;
