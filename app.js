const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const tweetRoutes = require('./routes/tweets');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use('/api/users', userRoutes); 
app.use('/api/tweets', tweetRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
