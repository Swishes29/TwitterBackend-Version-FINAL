const express = require('express');
const tweetController = require('../controllers/tweetController');

const router = express.Router();


router.post('/', tweetController.createTweet);  // Crear un tweet
router.get('/', tweetController.getTweets);     // Obtener todos los tweets
router.delete('/:id', tweetController.deleteTweet);  // Eliminar un tweet por ID
router.get('/search', tweetController.searchTweets);  // Buscar tweets por contenido


module.exports = router;
