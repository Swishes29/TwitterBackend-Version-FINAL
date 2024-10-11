const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa el middleware CORS
const tweetRoutes = require('./routes/tweets');  // Rutas de tweets
const userRoutes = require('./routes/users');    // Rutas de usuarios
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Configura CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Permite el acceso desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rutas
app.use('/api/tweets', tweetRoutes);  // Ruta para los tweets
app.use('/api/users', userRoutes);    // Ruta para los usuarios

// Conexión a la base de datos
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
