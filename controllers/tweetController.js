const Tweet = require('../models/Tweet');


exports.getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.findAll();
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createTweet = async (req, res) => {
  const { user, handle, avatarUrl, content, time } = req.body; 


  if (!user || !content || !handle || !avatarUrl || !time) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios: user, handle, avatarUrl, content, y time' });
  }

  try {
    const newTweet = await Tweet.create({ user, handle, avatarUrl, content, time });
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un tweet
exports.deleteTweet = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'El ID del tweet es requerido' });
  }

  try {
    const tweetDeleted = await Tweet.destroy({ where: { id } });

    if (tweetDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tweet no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
