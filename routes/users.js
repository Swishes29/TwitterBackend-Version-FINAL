const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rutas de usuarios
router.post('/', userController.createUser);   // Ruta para crear un usuario
router.post('/login', userController.loginUser); // Ruta para iniciar sesión

module.exports = router;
