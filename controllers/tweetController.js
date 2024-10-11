const { Tweet } = require('../models');

exports.createTweet = async (req, res) => {
    try {
        const { content, userId } = req.body; // Asegúrate de que el userId se envíe en la solicitud
        const newTweet = await Tweet.create({ content, userId });
        res.status(201).json(newTweet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllTweets = async (req, res) => {
    try {
        const tweets = await Tweet.findAll();
        res.status(200).json(tweets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
